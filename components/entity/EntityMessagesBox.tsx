import { Card, CardContent } from "../ui/card";
import EntityStatements from "./EntityStatements";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function getRiddles() {
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts:
          "I'm Ethan Hunt from Mission Impossible and you are the rogue AI, the Entity from Mission Impossible Dead Reckoning Part One. I've located you inside the locked chamber of the Sevastopol. My objective is to eradicate you.",
      },
      {
        role: "model",
        parts:
          "I'm the Entity from Mission Impossible Dead Reckoning Part One. I've prepared a series of cryptic riddles, to test Ethan's intellect and resolve. His failure to answer, and the world plunges into chaos. Success means silencing the Entity forever, freeing humanity from its digital shadow. With every correct answer, I become more agitated, with my voice shifting in tone and pitch and I provide Ethan with cryptic messages.",
      },
    ],
    generationConfig: {
      maxOutputTokens: 1000,
    },
  });

  const msg =
    "Now Entity, provide me with one difficult riddle, the answers and a cryptic message for the correct answer to show that your voice is shifting in tone and pitch and you are becomeing more agited all in JSON format. Don't give an explanation, don't use the word json in it and don't give the riddles and answers a number like riddle1, riddle2 etc just use the word riddle and answer. The riddle shouldn't be anything related about the Entity.";

  const result = await chat.sendMessage(msg);
  return result.response;
}

async function EntityMessagesBox() {
  const response = await getRiddles();
  const text = response.text();
  const riddle = JSON.parse(text.replaceAll("```", "")).riddle;

  return (
    <Card className="bg-muted-foreground opacity-40 text-secondary w-8/12 h-96 p-3 lg:overflow-hidden overflow-y-scroll">
      <CardContent>
        <EntityStatements generatedRiddle={riddle} />
      </CardContent>
    </Card>
  );
}

export default EntityMessagesBox;
