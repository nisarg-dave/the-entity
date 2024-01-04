"use client";
import { TypeAnimation } from "react-type-animation";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

function EntityStatements({ generatedRiddle }: { generatedRiddle: string }) {
  const router = useRouter();
  const [riddle, setRiddle] = useState("");

  useMemo(() => {
    setRiddle(generatedRiddle);
    // router.refresh();
  }, [generatedRiddle]);

  return (
    <TypeAnimation
      sequence={[
        "Persistent, aren't you, Mr. Hunt? But you've underestimated my reach. This realm is my playground. To destroy me, you must first prove your worth.",
        3000,
        `${riddle}`,
        3000,
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={0}
    />
  );
}

export default EntityStatements;
