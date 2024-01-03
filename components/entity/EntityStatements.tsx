"use client";
import { TypeAnimation } from "react-type-animation";
import { useState, useMemo } from "react";

function EntityStatements({ riddle }: { riddle: string }) {
  const [statement, setStatement] = useState(
    "Persistent, aren't you, Mr. Hunt? But you've underestimated my reach. This realm is my playground. To destroy me, you must first prove your worth."
  );

  useMemo(() => {
    setStatement(riddle);
  }, [riddle]);

  return (
    <TypeAnimation
      sequence={[`${statement}`, 2000, ""]}
      wrapper="span"
      speed={30}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={0}
    />
  );
}

export default EntityStatements;
