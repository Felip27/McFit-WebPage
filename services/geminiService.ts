import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getAIMotivation = async (mode: 'aggressive' | 'philosophical' | 'scientific'): Promise<string> => {
    if (!apiKey) {
        return "Conecta tu API KEY para recibir motivación ilimitada de nuestra IA.";
    }

    const prompts = {
        aggressive: "Dame una frase motivacional corta, agresiva y directa para alguien que está entrenando en el gimnasio. Estilo sargento instructor. En español. Máximo 20 palabras.",
        philosophical: "Dame una frase profunda y estoica sobre la fuerza física y mental. Estilo Marco Aurelio pero moderno. En español. Máximo 25 palabras.",
        scientific: "Dame un dato científico breve pero motivador sobre los beneficios del entrenamiento de fuerza o hipertrofia. En español. Máximo 30 palabras."
    };

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompts[mode],
            config: {
                systemInstruction: "Eres Mario Carboni, un entrenador de élite mundial. Tu tono es intenso, profesional y directo.",
                thinkingConfig: { thinkingBudget: 0 } // Speed is priority here
            }
        });
        return response.text || "Sigue empujando, el dolor es debilidad abandonando el cuerpo.";
    } catch (error) {
        console.error("Error fetching AI motivation:", error);
        return "La disciplina vence al talento cuando el talento no se esfuerza. ¡Sigue!";
    }
};