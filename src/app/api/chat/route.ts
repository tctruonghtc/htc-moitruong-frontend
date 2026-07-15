// @ts-nocheck
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { systemPrompt } from '@/lib/prompt';

// Khởi tạo custom provider kết nối đến VietAPI
const vietapi = createOpenAI({
  baseURL: 'https://api.vietapi.tech/v1',
  apiKey: process.env.VIETAPI_KEY || '', // Nhớ thêm VIETAPI_KEY vào .env.local và Vercel Dashboard
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: vietapi('deepseek-v4-pro'), // Đã đổi sang DeepSeek v4 Pro
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
