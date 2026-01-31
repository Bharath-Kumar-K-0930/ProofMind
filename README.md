# ProofMind AI 🧠🔒

**Verifiable AI Content Generation on the 0G Network**

ProofMind AI represents the next evolution of Generative AI—where every output is cryptographically anchored and verifiable. Built for the **0G Hackathon**, this application explicitly proves that AI-generated content (text, code, or creative writing) was generated at a specific time and by a specific model, storing this proof immutably on the 0G decentralized storage network.

![ProofMind Logo](frontend/public/logo.png)

## 🚀 Key Features

*   **Verifiable AI**: Generate content using OpenAI's GPT models while simultaneously creating a unique cryptographic hash of the output.
*   **Immutable Proof**: Automatically anchors the content hash and metadata (timestamp, model version) to the **0G Storage Network** (Testnet).
*   **Instant Verification**: Anyone can verify the authenticity of the content by re-hashing it and checking the 0G blockchain record.
*   **Cyberpunk UI**: A high-energy, futuristic interface built with **React** and **Tailwind CSS**.

## 🛠 Tech Stack

*   **Frontend**: React (Vite), Tailwind CSS v4, PostCSS
*   **Backend**: Node.js, Express, Open Zeppelin (via @0gfoundation/0g-cc)
*   **AI Engine**: OpenAI API (GPT-3.5/4)
*   **Decentralized Storage**: 0G Network (ZeroGravity)

## 📦 Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Bharath-Kumar-K-0930/ProofMind.git
    cd ProofMind
    ```

2.  **Install Dependencies**
    ```bash
    # Install root dependencies (concurrently)
    npm install

    # Install Backend dependencies
    cd backend && npm install

    # Install Frontend dependencies
    cd ../frontend && npm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the `backend` directory:
    ```env
    PORT=5000
    OPENAI_API_KEY=your_openai_api_key
    OG_CC_ENDPOINT=https://rpc-testnet.0g.ai
    ```

4.  **Run Application**
    From the root directory:
    ```bash
    # Runs both Frontend (Vite) and Backend (Nodemon)
    npm run dev
    ```
    - Frontend: `http://localhost:5173`
    - Backend: `http://localhost:5000`

## 🧪 Testing

We use **Jest** and **Supertest** for ensuring API reliability.

```bash
cd backend
npm test
```

## 📜 API Documentation (v1)

### `POST /api/v1/generate`
Generates AI content and creates a local proof.
- **Body**: `{ "prompt": "Explain zero knowledge proofs" }`
- **Response**: `{ "output": "...", "hash": "...", "metadata": { ... } }`

### `POST /api/v1/proof`
Anchors a hash to the 0G network.
- **Body**: `{ "hash": "..." }`
- **Response**: `{ "txHash": "...", "status": "stored" }`

### `POST /api/v1/verify`
Verifies content against the 0G network.
- **Body**: `{ "hash": "...", "metadata": { ... } }`
- **Response**: `{ "verified": true, "message": "Content valid" }`

---
*Built with ❤️ for the 0G Hackathon*
