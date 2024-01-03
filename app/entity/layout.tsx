import ParticlesCanvas from "@/components/ParticlesCanvas";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ParticlesCanvas />
      {children}
    </div>
  );
}

export default layout;
