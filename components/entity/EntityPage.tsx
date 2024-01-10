import { Suspense } from "react";
import EntityMessagesBox from "./EntityRiddlesBox";
import UserInput from "./UserInput";

function EntityPage() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <Suspense
        fallback={
          <p className="text-background text-sm lg:text-3xl">
            Loading the Entity....
          </p>
        }
      >
        <EntityMessagesBox />
        <UserInput />
      </Suspense>
    </section>
  );
}

export default EntityPage;
