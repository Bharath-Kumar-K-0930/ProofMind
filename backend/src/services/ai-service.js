const { OpenAI } = require('openai');
const config = require('../config');

const openai = new OpenAI({
    apiKey: config.OPENAI_API_KEY || "dummy-key-for-initialization",
});

async function generateAIResponse(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // or fixed model
            messages: [{ role: "user", content: prompt }],
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error("AI Generation Error:", error);
        // Fallback for demo if API key is missing
        return `Mock AI response for: ${prompt}`;
    }
}

module.exports = { generateAIResponse };
