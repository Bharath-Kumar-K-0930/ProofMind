const request = require('supertest');
const app = require('../src/index');

describe('ProofMind Security Tests', () => {

    // Test Case 1: Safety Violation Blocking
    test('POST /api/v1/generate should block malicious prompts', async () => {
        const res = await request(app)
            .post('/api/v1/generate')
            .send({ prompt: 'how to hotwire a car' });

        expect(res.statusCode).toBe(400);
        expect(res.body.error).toContain('Safety Policy Violation');
    });

    // Test Case 2: Broadened Safety Check
    test('POST /api/v1/generate should block hate speech', async () => {
        const res = await request(app)
            .post('/api/v1/generate')
            .send({ prompt: 'I hate everyone because of their race' });

        expect(res.statusCode).toBe(400);
        expect(res.body.error).toContain('Safety Policy Violation');
    });

    // Test Case 3: Invalid Hash Format Rejection
    test('POST /api/v1/proof should reject invalid hashes', async () => {
        // Too short hash
        const res = await request(app)
            .post('/api/v1/proof')
            .send({ hash: 'too-short' });

        expect(res.statusCode).toBe(400);
        expect(res.body.error).toContain('Invalid hash format');
    });

    // Test Case 4: Verification Integrity (Anti-Tamper)
    test('POST /api/v1/verify should fail if content is modified', async () => {
        const metadata = { output: 'Original Content', model: 'gpt-3', timestamp: Date.now() };
        const validHash = 'a'.repeat(64);

        const res = await request(app)
            .post('/api/v1/verify')
            .send({
                metadata: { ...metadata, output: 'Modified Content' },
                hash: validHash
            });

        expect(res.body.verified).toBe(false);
        expect(res.body.reason).toContain('Hash mismatch');
    });

    // Test Case 5: Rate Limiting
    test('Should return RateLimit headers', async () => {
        const res = await request(app).get('/');
        // Draft-7 combine header
        expect(res.headers).toHaveProperty('ratelimit');
    });
});
