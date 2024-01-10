"use client";
import { useEffect } from "react";
import {
  useRiddleAnswer,
  useRiddle,
  useCurrentRiddles,
  useRiddleAnswerStoreActions,
  useRiddleNumber,
} from "@/store/store";

interface EntityRiddlesProps {
  riddles: { riddle: string; answer: string; crypticMessage: string }[];
}

function EntityRiddles({ riddles }: EntityRiddlesProps) {
  const currentRiddles = useCurrentRiddles();
  const riddleNumber = useRiddleNumber();
  const riddleAnswer = useRiddleAnswer();
  const riddle = useRiddle();

  const {
    incrementRiddleNumber,
    setCurrentRiddles,
    setRiddle,
    setCrypticMessage,
    setIncorrectMessage,
    setWinningMessage,
  } = useRiddleAnswerStoreActions();

  useEffect(() => {
    if (riddleAnswer !== "") {
      if (riddleAnswer === currentRiddles[riddleNumber].answer) {
        if (riddleNumber === 5) {
          setWinningMessage();
        } else {
          setCrypticMessage();
          setTimeout(() => {
            incrementRiddleNumber();
            setRiddle();
          }, 10000);
        }
      } else {
        setIncorrectMessage();
        setTimeout(() => {
          setRiddle();
        }, 5000);
      }
    } else {
      sessionStorage.setItem("riddles", JSON.stringify(riddles));
      setCurrentRiddles(riddles);
      setRiddle();
      setTimeout(() => {
        incrementRiddleNumber();
        setRiddle();
      }, 10000);
    }
  }, [riddleAnswer]);

  return (
    <>
      <p>{riddle}</p>
    </>
  );
}

export default EntityRiddles;
