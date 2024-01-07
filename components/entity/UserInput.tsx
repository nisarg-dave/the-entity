"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRiddleAnswerStoreActions } from "@/store/store";

function UserInput() {
  const answer = useRef<HTMLInputElement>(null);
  const { setAnswer } = useRiddleAnswerStoreActions();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setAnswer(answer.current?.value!);
  };
  return (
    <div className="flex w-8/12 items-center space-x-2 mt-4">
      <Input
        type="email"
        placeholder="Email"
        className="bg-muted-foreground opacity-40 text-secondary text-sm lg:text-xl"
        ref={answer}
      />
      <Button
        type="submit"
        className="bg-muted-foreground opacity-40 hover:opacity-100 hover:bg-muted-foreground text-sm lg:text-xl"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </div>
  );
}

export default UserInput;
