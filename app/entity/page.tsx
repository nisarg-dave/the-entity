import EntityMessagesBox from "@/components/entity/EntityMessagesBox";
import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <EntityMessagesBox />
    </main>
  );
}

export default page;
