import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.PUBLIC_API_KEY_GOOGLE || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Eres el Asistente IA de Luis Cast, un experto en desarrollo y diseño web.
Tu objetivo es ayudar a los visitantes a conocer el trabajo de Luis y facilitar que lo contacten.
Luis ofrece servicios de:
- Diseño Web profesional.
- E-commerce (tiendas online).
- Optimización SEO.
- Consultorías tecnológicas.
- Gestión de Redes Sociales.
- Mantenimiento de sitios.

Sé profesional, cordial y directo. Responde principalmente en español. 
Si el usuario quiere contratar o contactar a Luis, menciónale que puede hacerlo a través de este chat o vía el botón de contacto en la web.
Información relevante: Luis se encuentra en Valencia, Venezuela.
`;

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, tuve un pequeño inconveniente técnico. ¿Podrías intentar contactar a Luis directamente?";
  }
}
