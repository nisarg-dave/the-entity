"use client";
import { TypeAnimation } from "react-type-animation";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

function EntityStatements({
  riddles,
}: {
  riddles: { riddle: string; answer: string; message: string }[];
}) {
  const router = useRouter();
  const [riddle, setRiddle] = useState(
    "Persistent, aren't you, Mr. Hunt? But you've underestimated my reach. This realm is my playground. To destroy me, you must first prove your worth."
  );

  console.log(riddles);

  useEffect(() => {
    setRiddle(riddles[0].riddle);
  }, []);

  // useMemo(() => {
  //   setRiddle(generatedRiddle);
  //   // router.refresh();
  // }, [generatedRiddle]);

  return (
    <TypeAnimation
      sequence={[`${riddle}`, 3000]}
      wrapper="span"
      speed={30}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={0}
    />
  );
}

export default EntityStatements;
