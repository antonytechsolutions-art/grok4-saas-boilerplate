// lib/grok.ts
import { createOpenAI } from '@ai-sdk/openai';

const grok = createOpenAI({
  baseURL: 'https://api.x.ai/v1',
  apiKey: process.env.GROK_API_KEY!,
});

export const grok4 = grok('grok-4-latest');  // or 'grok-4' – both work
