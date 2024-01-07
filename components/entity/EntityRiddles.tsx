"use client";
import { TypeAnimation } from "react-type-animation";
import { useState, useMemo, useEffect } from "react";
import {
  useRiddleAnswer,
  useCurrentRiddles,
  useRiddle,
  useRiddleNumber,
  useRiddleAnswerStoreActions,
} from "@/store/store";

interface EntityRiddlesProps {
  riddles: { riddle: string; answer: string; crypticMessage: string }[];
}

function EntityRiddles({ riddles }: EntityRiddlesProps) {
  const riddleAnswer = useRiddleAnswer();
  const currentRiddles = useCurrentRiddles();
  const riddle = useRiddle();
  const riddleNumber = useRiddleNumber();

  const { incrementRiddleNumber, setCurrentRiddles, setRiddle } =
    useRiddleAnswerStoreActions();

  useEffect(() => {
    setCurrentRiddles(riddles);
    setRiddle();

    const timeoutId = setTimeout(() => {
      console.log("reached here");
      incrementRiddleNumber();
      setRiddle();
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    // <TypeAnimation
    //   sequence={[`${riddle}`, 3000]}
    //   wrapper="span"
    //   speed={30}
    //   style={{ fontSize: "2em", display: "inline-block" }}
    //   repeat={0}
    // />
    <>{riddle}</>
  );
}

export default EntityRiddles;
