// @ts-nocheck
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { systemPrompt } from '@/lib/prompt';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: systemPrompt,
      messages,
    });

    // @ts-ignore
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to process chat request" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
