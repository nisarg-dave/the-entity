import { Card, CardContent } from "../ui/card";
import EntityRiddles from "./EntityRiddles";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

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
        "I'm the Entity from Mission Impossible Dead Reckoning Part One. I've prepared a series of cryptic riddles whose riddles and answers are different from each other, to test Ethan's intellect and resolve. His failure to answer, and the world plunges into chaos. Success means silencing the Entity forever, freeing humanity from its digital shadow. With every correct answer, I become more agitated, with my voice shifting in tone and pitch and I provide Ethan with different cryptic messages.",
    },
  ],
  generationConfig: {
    maxOutputTokens: 1000,
  },
});

async function getRiddles() {
  const riddles = [];

  // Generate riddles individually
  for (let i = 1; i <= 5; i++) {
    const msg = `Now Entity, provide me with a difficult riddle, its answer, and a cryptic message to show your agitation in JSON format. Don't use the word json in the object and put the riddle on one line.`;
    const result = await chat.sendMessage(msg);
    const riddleData = JSON.parse(result.response.text().replaceAll("```", ""));
    riddles.push(riddleData);
  }

  return riddles;
}

async function EntityRiddlesBox() {
  const riddles = await getRiddles();
  riddles.unshift({
    riddle:
      "Persistent, aren't you, Mr. Hunt? But you've underestimated my reach. This realm is my playground. To destroy me, you must first prove your worth.",
    answer: "",
    crypticMessage: "",
  });
  return (
    <Card className="bg-muted-foreground opacity-40 text-secondary w-8/12 h-96 p-3 lg:overflow-hidden">
      <CardContent className="text-sm leading-snug lg:text-xl lg:leading-snug">
        <EntityRiddles riddles={riddles} />
      </CardContent>
    </Card>
  );
}

export default EntityRiddlesBox;
