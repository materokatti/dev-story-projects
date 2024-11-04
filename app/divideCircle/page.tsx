"use client";

import React, {useEffect, useRef, useState} from "react";

const DivideCirclePage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [segments, setSegments] = useState<number>(4);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // 캔버스 초기화
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);

        const leftX = canvas.width / 2;
        const y = canvas.height / 2;
        const radius = 2000;

        const angleStep = (2 * Math.PI) / segments;
        for (let i = 0; i < segments; i++) {
          const startAngle = i * angleStep;
          const endAngle = startAngle + angleStep;

          context.beginPath();
          context.moveTo(leftX, y);
          context.arc(leftX, y, radius, startAngle, endAngle);
          context.closePath();

          context.fillStyle = "white";
          context.fill();

          context.strokeStyle = "black";
          context.lineWidth = 2;
          context.stroke();
        }
      }
    }
  }, [segments]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSegments = parseInt(event.target.value);
    if (!isNaN(newSegments) && newSegments > 0) {
      setSegments(newSegments);
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black relative'>
      <canvas ref={canvasRef} />
      <input
        type='number'
        placeholder='Enter number of segments'
        value={segments}
        onChange={handleInputChange}
        className='absolute bottom-10 px-4 py-2 rounded-lg border-4 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
        min='1'
      />
    </div>
  );
};

export default DivideCirclePage;
