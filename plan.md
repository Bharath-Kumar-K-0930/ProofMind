# ProofMind-AI: Master Implementation Plan

This document follows the Vibe Coding / BMAD framework to build a verifiable AI content platform using the 0G Network.

## Architecture Overview
- **Frontend**: React (Vite) for Content Generation and Verification UI.
- **Backend**: Node/Express serving as the orchestrator between AI, Hashing, and 0G CC.
- **0G CC**: Used as the Decentralized Proof Storage layer.

## Security Considerations (Global)
- **Rate Limiting**: Prevent API abuse (OpenAI can be expensive).
- **Input Sanitization**: Ensure prompts and verification hashes are clean.
- **Secret Management**: All keys (OpenAI, 0G endpoints) in `.env`.

---

## Phase 2: Canonicalization
- **Goal**: Normalize AI text (trim, space normalization).
- **Security**: Prevent ReDoS (Regular Expression Denial of Service) by using simple, safe regex.
- **Checklist**:
  - [ ] Implement `canonicalize.js` in `utils/`.
  - [ ] Add unit test for spacing/newlines.

## Phase 3: Hash Generation
- **Goal**: Create a unique SHA-256 fingerprint of the AI output + metadata.
- **Security**: Use a salt (optional) or structured JSON to prevent collision/pre-image attacks.
- **Checklist**:
  - [ ] Implement `createHash` in `hash.service.js`.
  - [ ] Define the `Metadata` structure (prompt, output, model, timestamp).

## Phase 4: 0G CC Integration
- **Goal**: Connect to the 0G Storage/CC network.
- **Security**: Validation of the `hash` format before submission.
- **Checklist**:
  - [ ] Configure `CCClient` with environment variables.
  - [ ] Implement `storeProof` and `verifyProof`.

## Phase 5: Proof Orchestration
- **Goal**: Link AI generation -> Hashing -> 0G Storage.
- **Checklist**:
  - [ ] Implement `orchestrateProof` in `proof.service.js`.

## Phase 6: Backend API Routes
- **Goal**: Expose `/generate`, `/proof`, and `/verify` endpoints.
- **Security**: Add `express-rate-limit`. Validate `body` using basic checks.
- **Checklist**:
  - [ ] `/api/generate` (POST)
  - [ ] `/api/proof` (POST)
  - [ ] `/api/verify` (POST)

## Phase 7: Frontend Flow
- **Goal**: Build the UI for generating and verifying.
- **Checklist**:
  - [ ] Update `Generate.jsx` and `Verify.jsx`.
  - [ ] Connect `api.js` to backend.

## Phase 8: Demo & Verification
- **Goal**: End-to-end testing and visual feedback.
- **Checklist**:
  - [ ] Verify original content ✅.
  - [ ] Verify modified content ❌.
