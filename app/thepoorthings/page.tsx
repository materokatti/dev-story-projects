"use client";

import React, { useEffect, useRef } from "react";

const ThePoorThingsPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Draw background gradient (to represent the moody sky)
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#243b55"); // dark blue
        gradient.addColorStop(1, "#141E30"); // darker shade
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw figure silhouette
        ctx.fillStyle = "#000044"; // dark blue color for the figure
        ctx.beginPath();
        ctx.moveTo(400, 250); // head
        ctx.arc(400, 250, 50, 0, Math.PI * 2); // head

        ctx.moveTo(400, 300); // neck
        ctx.lineTo(380, 400); // left shoulder
        ctx.lineTo(420, 400); // right shoulder
        ctx.lineTo(400, 300); // back to neck

        // Draw the torso and dress outline (rough shape)
        ctx.lineTo(350, 600); // left side of dress
        ctx.lineTo(450, 600); // right side of dress
        ctx.lineTo(420, 400); // close at shoulder

        ctx.fill();
      }
    }
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <canvas ref={canvasRef} width={800} height={600} />
    </div>
  );
};

export default ThePoorThingsPage;
