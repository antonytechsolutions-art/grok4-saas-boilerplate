// app/api/chat/route.ts
import { grok4 } from '@/lib/grok';
import { StreamingTextResponse, streamText } from 'ai';

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: grok4,
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
}
