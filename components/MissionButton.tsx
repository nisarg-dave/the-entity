"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function MissionButton() {
  const router = useRouter();
  return (
    <Button className="text-lg" onClick={() => router.push("/entity")}>
      Begin Mission
    </Button>
  );
}

export default MissionButton;
