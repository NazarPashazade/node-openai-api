import { blue, red, yellow } from "colors";
import { question } from "readline-sync";
import { OPENAI_MODEL, openai } from "../openai.config";

interface HistoryItem {
  role: string;
  content: string;
}

const history: HistoryItem[] = [];

export async function askToChatGPT() {
  console.log(yellow("Welcome to the chat!"));
  console.log(yellow("You can start chatting with the AI now!"));
  console.log(yellow("Type 'exit' to stop the chat."));

  while (true) {
    const userInput: string = question(yellow("You: "));

    // history.push({ role: "user", content: userInput });

    const stream = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [{ role: "user", content: userInput }],
      stream: true,
    });

    console.log(blue(`Asistant:`));

    for await (const chunk of stream) {
      process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }

    console.log()

    // history.push({ role: "assistant", content: choices[0].message.content });

    if (userInput.toLowerCase() === "exit") {
      console.log(red(`Goodbye! Command: ${userInput}`));
      return;
    }

    // console.log({history});
  }
}
