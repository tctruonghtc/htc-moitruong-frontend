// @ts-nocheck
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { systemPrompt } from "@/lib/prompt";

// Provider VietAPI (OpenAI-compatible)
const vietapi = createOpenAI({
  baseURL: "https://api.vietapi.tech/v1",
  apiKey: process.env.VIETAPI_KEY || "",
});

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: vietapi("deepseek-v4-pro"),
      system: systemPrompt,
      messages,
    });

    // @ts-ignore — API stream v3
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to process chat request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
