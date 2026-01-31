const request = require('supertest');
const express = require('express');
const cors = require('cors');
const { rateLimit } = require('express-rate-limit');

// Mock dependencies
jest.mock('@0gfoundation/0g-cc', () => ({
    CCClient: jest.fn().mockImplementation(() => ({
        submitProof: jest.fn().mockResolvedValue({ txHash: 'mock_tx_123', status: 'stored' }),
        getProof: jest.fn().mockResolvedValue({ hash: 'mock_hash', verified: true })
    }))
}));

jest.mock('../src/services/hash-service', () => ({
    createHash: jest.fn().mockReturnValue('a'.repeat(64))
}));

jest.mock('openai', () => {
    return {
        OpenAI: jest.fn().mockImplementation(() => ({
            chat: {
                completions: {
                    create: jest.fn().mockResolvedValue({
                        choices: [{ message: { content: 'Mocked AI response' } }]
                    })
                }
            }
        }))
    };
});

// Import App Routes
const generateRoute = require('../src/routes/generate-route');
const verifyRoute = require('../src/routes/verify-route');
const proofRoute = require('../src/routes/proof-route');

// Setup App
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/generate', generateRoute);
app.use('/api/v1/verify', verifyRoute);
app.use('/api/v1/proof', proofRoute);

describe('ProofMind API API Tests', () => {

    test('POST /api/v1/generate should return AI content and hash', async () => {
        const res = await request(app)
            .post('/api/v1/generate')
            .send({ prompt: 'Test prompt' });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('output');
        expect(res.body).toHaveProperty('hash');
        expect(res.body.output).toBe('Mocked AI response');
    });

    test('POST /api/v1/proof should anchor hash to 0G', async () => {
        const res = await request(app)
            .post('/api/v1/proof')
            .send({ hash: 'a'.repeat(64) }); // Valid 64 char hash

        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('stored');
    });

    test('POST /api/v1/verify should verify content', async () => {
        const validHash = 'a'.repeat(64);
        const res = await request(app)
            .post('/api/v1/verify')
            .send({
                hash: validHash,
                metadata: { timestamp: Date.now(), model: 'gpt-mock', output: 'some content' }
            });

        expect(res.statusCode).toBe(200);
        expect(res.body.verified).toBe(true);
    });

});
