"use client";

import React, { useEffect, useRef } from "react";

const ParticlesPartyPage: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        const updateCanvasSize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', updateCanvasSize);

      updateCanvasSize();
      
        const ctx = canvas.getContext("2d");
        const particles: { x: number; y: number; vx: number; vy: number }[] = [];
        const particleCount = 100;
  
        // Function to create particles
        const createParticles = () => {
          for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * Math.PI * 2; // Random angle in radians
            const speed = Math.random() * 2 + 1; // Random speed
            particles.push({
              x: canvas.width / 2,
              y: canvas.height / 2,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
            });
          }
        };
  
        // Function to update particle positions
        const updateParticles = () => {
          ctx?.clearRect(0, 0, canvas.width, canvas.height);
  
          particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
  
            // Draw the particle
            ctx!.beginPath();
            ctx!.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
            ctx!.fillStyle = "white";
            ctx!.fill();
  
            // If particle goes off the screen, reset it to the center
            if (
              particle.x < 0 ||
              particle.x > canvas.width ||
              particle.y < 0 ||
              particle.y > canvas.height
            ) {
              particles[index] = {
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: Math.cos(Math.random() * Math.PI * 2) * (Math.random() * 2 + 1),
                vy: Math.sin(Math.random() * Math.PI * 2) * (Math.random() * 2 + 1),
              };
            }
          });
        };
  
        // Animation loop
        const animate = () => {
          updateParticles();
          requestAnimationFrame(animate);
        };
  
        // Initialize
        if (ctx) {
          createParticles();
          animate();
        }
        return () => {
          window.removeEventListener('resize', updateCanvasSize);
        }
      }
    }, []);
  
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    );
  };

export default ParticlesPartyPage;
