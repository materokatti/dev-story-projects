"use client";
import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Projects />
      </main>
    </>
  );
}
