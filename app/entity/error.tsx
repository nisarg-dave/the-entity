"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h1 className="text-background text-sm lg:text-3xl">
        Something went wrong!
      </h1>
      <Button
        onClick={() => reset()}
        className="bg-muted-foreground opacity-70 hover:opacity-100 hover:bg-background hover:text-foreground text-sm lg:text-xl mt-4"
      >
        Try again
      </Button>
    </div>
  );
}
