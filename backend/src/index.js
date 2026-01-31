const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { rateLimit } = require('express-rate-limit');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Security: Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window`
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});
app.use(limiter);

const PORT = process.env.PORT || 5000;

// Routes
const generateRoute = require('./routes/generate-route');
const verifyRoute = require('./routes/verify-route');
const proofRoute = require('./routes/proof-route');

app.use('/api/v1/generate', generateRoute);
app.use('/api/v1/verify', verifyRoute);
app.use('/api/v1/proof', proofRoute);

app.get('/', (req, res) => {
    res.send('ProofMind Backend API is operational');
});

app.listen(PORT, () => {
    // Server started
});
