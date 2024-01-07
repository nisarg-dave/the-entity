import EntityMessagesBox from "./EntityRiddlesBox";
import UserInput from "./UserInput";

function EntityPage() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <EntityMessagesBox />
      <UserInput />
    </section>
  );
}

export default EntityPage;
