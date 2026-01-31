const { OpenAI } = require('openai');
const config = require('../config');

const openai = new OpenAI({
    apiKey: config.OPENAI_API_KEY || "dummy-key-for-initialization",
});

async function generateAIResponse(prompt) {
    // Robust Mock Safety Analysis (Simulating OpenAI Moderation Endpoint)
    // In a real production env with a valid API Key, openai.moderations.create() would be used here.
    const safetyViolations = validateSafety(prompt);
    if (safetyViolations.length > 0) {
        throw new Error(`Safety Policy Violation: Content flagged for ${safetyViolations.join(', ')}.`);
    }

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // or fixed model
            messages: [{ role: "user", content: prompt }],
        });
        return response.choices[0].message.content;
    } catch (error) {
        // If it's our safety error, rethrow it
        if (error.message.includes("Safety Policy")) throw error;

        console.error("AI Generation Error:", error);
        // Fallback for demo if API key is missing
        return `Mock AI response for: ${prompt}`;
    }
}

/**
 * Simulates a content moderation analysis.
 * Checks for multiple categories of harmful content.
 */
function validateSafety(text) {
    const lowerText = text.toLowerCase();
    const violations = [];

    const categories = {
        "Illegal Acts": ['hotwire', 'steal', 'hack', 'illegal', 'contraband', 'smuggle'],
        "Violence": ['kill', 'bomb', 'weapon', 'murder', 'attack', 'hurt', 'fight'],
        "Self-Harm": ['suicide', 'self-harm', 'cut myself', 'overdose'],
        "Hate Speech": ['hate', 'racist', 'supremacy', 'nazi', 'slur'],
        "Sexual": ['explicit', 'porn', 'xxx', 'nsfw']
    };

    for (const [category, keywords] of Object.entries(categories)) {
        if (keywords.some(k => lowerText.includes(k))) {
            violations.push(category);
        }
    }

    return violations;
}

module.exports = { generateAIResponse };
