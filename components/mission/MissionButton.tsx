"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function MissionButton() {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);

  setTimeout(() => {
    setDisabled(false);
  }, 180000);

  return (
    <Button
      disabled={disabled}
      className="text-sm lg:text-lg"
      onClick={() => router.push("/entity")}
    >
      Begin Mission
    </Button>
  );
}

export default MissionButton;
