"use client";

import React, {useEffect, useRef, useState} from "react";

const CircleAreaPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [segments, setSegments] = useState<number>(3);
  const [strokeColor, setStrokeColor] = useState<string>("black");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);

        const leftX = canvas.width * 0.25;
        const y = canvas.height / 2;
        const radius = 200;

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

        const MODIFIER_BASE_X: Record<number, number> = {
          1: 0.65,
          2: 0.6,
          3: 0.6,
          4: 0.6,
        };
        const currentBaseXModifier = MODIFIER_BASE_X[segments] || 0.5;

        const baseX = canvas.width * currentBaseXModifier;
        const yOffset = radius * Math.cos(angleStep / 2);
        const xOffset = radius * Math.sin(angleStep / 2);

        const currentYModifier = 0.5;

        for (let i = 0; i < segments; i++) {
          const centralAngle = i % 2 === 0 ? (3 * Math.PI) / 2 : Math.PI / 2;
          const startAngle = centralAngle - angleStep / 2;
          const endAngle = centralAngle + angleStep / 2;

          const currentX = baseX + i * xOffset;
          const currentY =
            i % 2 !== 0
              ? y - currentYModifier * yOffset
              : y + currentYModifier * yOffset;

          context.beginPath();
          context.moveTo(currentX, currentY);
          context.arc(currentX, currentY, radius, startAngle, endAngle);
          context.closePath();

          context.fillStyle = "white";
          context.fill();

          context.strokeStyle = strokeColor;
          context.lineWidth = 2;
          context.stroke();
        }
      }
    }
  }, [segments, strokeColor]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSegments = parseInt(event.target.value);
    if (!isNaN(newSegments) && newSegments > 1) {
      setSegments(newSegments);
    }
  };

  const toggleStrokeColor = () => {
    setStrokeColor((prev) => (prev === "black" ? "white" : "black"));
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black relative'>
      <div className='absolute top-10 flex items-center'>
        <h1 className='text-white text-3xl font-bold'>
          How an Infinite Division of a Circle Becomes a Rectangle
        </h1>
      </div>
      <canvas ref={canvasRef} />
      <div className='absolute bottom-10 flex flex-col gap-4 items-center'>
        <div>
          <input
            type='number'
            placeholder='Enter number of segments'
            value={segments}
            onChange={handleInputChange}
            className='px-4 py-2 rounded-lg border-4 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
            min='1'
          />
          <button
            onClick={toggleStrokeColor}
            className='bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-lg border-4 border-black'
          >
            Line Color to {strokeColor === "black" ? "White" : "Black"}
          </button>
        </div>
        <div>
          <div>
            <a href='https://www.buymeacoffee.com/materokattl'>
              <img src='https://img.buymeacoffee.com/button-api/?text=Buy me a Onigiri&emoji=🍙&slug=materokattl&button_colour=FFDD00&font_colour=000000&font_family=Comic&outline_colour=000000&coffee_colour=ffffff' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleAreaPage;
