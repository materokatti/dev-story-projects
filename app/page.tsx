"use client";
import {useEffect, useState} from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  const [data, setData] = useState(null);

  const consoleStyle = `
    font-size: 20px;
    font-weight: bold;
    font-family: 'DM Sans', sans-serif;
    background-color: #F8C44C;
    // background: linear-gradient(135deg, #F8C44C, #fff);
    color: #000;
    // text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border-radius: 12px;
    border: 2px solid #000;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  `;

  console.log("%c DevStory Projects rendered", consoleStyle);

  return (
    <>
      <main className='flex min-h-screen flex-col'>
        <Hero />
        <Projects />
      </main>
    </>
  );
}
