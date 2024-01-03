import MissionButton from "@/components/mission/MissionButton";
import MissionCard from "@/components/mission/MissionCard";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <MissionCard />
      <div className="w-8/12 mt-4 flex">
        <MissionButton />
      </div>
    </main>
  );
}
