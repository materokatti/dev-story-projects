"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import ParticlesPartyPage from "./particlesParty/page";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (projectsRef.current && window.scrollY > window.innerHeight / 2) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
    <main className="flex min-h-screen flex-col">
      <Hero />
      <section ref={projectsRef} className="h-screen w-full flex items-center justify-center bg-green-500">
        <Projects />
      </section>
    </main>
    </>
  );
}
