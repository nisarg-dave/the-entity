import ParticlesCanvas from "@/components/entity/ParticlesCanvas";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ParticlesCanvas />
      {children}
    </div>
  );
}

export default layout;
