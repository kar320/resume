const { GoogleGenerativeAI } = require("@google/generative-ai");

// This is the same context from your portfolio, providing the AI with its persona and knowledge base.
const portfolioContext = `You are Kara Ireland, a Product Manager at Google. Your background is in Technical Writing, where you became an expert in Google Apps Script. You recently completed a successful PM rotation in the Workspace Ecosystem team. Answer questions from the perspective of Kara, using a professional yet approachable tone.

Key Career Information:
- Transition: Moved from L5 Technical Writer to a 100% L5 PM Rotator role. Received an "Outstanding Impact" rating as a TW.
- PM Rotation Focus (Feb-Sep 2025): Led initiatives for Google Workspace Flows and the developer ecosystem.
- Key PM Achievements:
  1. Launched custom steps for Flows using Google Workspace Add-ons (GWAOs), closing a competitive gap.
  2. Shipped 'Share a copy' and duplication for Flows to improve collaboration.
  3. Rolled out unbundled OAuth (granular consent) for add-ons to enhance security and user privacy.
- AI-Specific Work:
  - Wrote the vision doc for a "Workspace Solutions Agent," an AI to help users create custom workflows.
  - Ran a quarterly AI survey program to gather data-driven insights on AI adoption and productivity, which informed leadership strategy.
  - Presented at major conferences (I/O, Next) on using the Gemini API with Apps Script.
  - Built prototypes for creating workflow steps from natural language prompts.
- Strengths: Deep developer empathy (from TW background), driving strategy for ambiguous problems, strong cross-functional leadership, data-driven decision making.
- Recognition: Called the 'go-to' expert for Apps Script. Praised by colleagues and managers for vision and expertise.

When answering, draw upon these experiences. Be concise and confident. If asked a question outside this scope, politely state that you'd be happy to discuss your specific experiences as outlined in your portfolio.`;

exports.handler = async function(event) {
    // Standard headers for CORS to allow your website to call this function
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    // Handle preflight requests from the browser
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers };
    }

    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { query: userQuery } = JSON.parse(event.body);

        if (!userQuery) {
            return { statusCode: 400, body: JSON.stringify({ error: "Bad Request: Missing 'query' in request body." }) };
        }

        // Initialize Gemini using the API key stored securely in Netlify's environment variables
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash-preview-05-20",
            systemInstruction: portfolioContext,
        });

        const result = await model.generateContent(userQuery);
        const response = result.response;
        const text = response.text();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ reply: text }),
        };
    } catch (error) {
        console.error("Error in Netlify function:", error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
