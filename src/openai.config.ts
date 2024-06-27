import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

export const OPENAI_MODEL = "gpt-3.5-turbo";
