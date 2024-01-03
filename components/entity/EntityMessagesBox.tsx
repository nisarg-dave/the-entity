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
        // With every correct answer, I become more agitated, with my voice shifting in tone and pitch and  provide me with cryptic messages. Now provide me a riddl
        parts:
          "I'm the Entity from Mission Impossible Dead Reckoning Part One. I've prepared a series of cryptic riddles, to test Ethan's intellect and resolve. His failure to answer, and the world plunges into chaos. Success means silencing the Entity forever, freeing humanity from its digital shadow.",
      },
    ],
    generationConfig: {
      maxOutputTokens: 1000,
    },
  });

  const msg =
    "Now Entity, provide me with one riddle and its answer in a JavaScript array format";

  const result = await chat.sendMessage(msg);
  return result.response;
}

async function EntityMessagesBox() {
  const response = await getRiddles();
  let text = response.text();
  console.log(text);
  const riddle = JSON.parse(JSON.stringify(text));
  console.log(riddle);

  return (
    <Card className="bg-muted-foreground opacity-40 text-secondary w-8/12 h-72 p-3 lg:overflow-hidden overflow-y-scroll">
      <CardContent>
        <EntityStatements riddle={riddle} />
      </CardContent>
    </Card>
  );
}

export default EntityMessagesBox;
