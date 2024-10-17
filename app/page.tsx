import Image from "next/image";
import ParticlesPartyPage from "./particlesParty/page";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col text-white">
      <Hero />
      <Projects />
    </main>
    </>
  );
}
