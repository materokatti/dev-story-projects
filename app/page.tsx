"use client";
import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollToElement = (target: HTMLElement) => {
    
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 5; // 밀리초 단위, 값을 줄이면 더 빠르게 스크롤됩니다.
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const ease = percentage < 0.5 ? 2 * percentage ** 2 : -1 + (4 - 2 * percentage) * percentage; // easeInOutQuad

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleScroll = () => {
    if (heroRef.current && window.scrollY < window.innerHeight / 2) {
      scrollToElement(heroRef.current);
    } else if (projectsRef.current && window.scrollY > window.innerHeight / 2) {
      scrollToElement(projectsRef.current);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(" projectsRef.current", projectsRef);
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Hero ref={heroRef} />
        <Projects ref={projectsRef} />
      </main>
    </>
  );
}
