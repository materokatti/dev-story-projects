import Image from "next/image";
import ParticlesPartyPage from "./particlesParty/page";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
    <div className="absolute -z-10 ">
        <ParticlesPartyPage />
      </div>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <Hero />
      <Projects />
    </main>
    </>
  );
}
