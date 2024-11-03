"use client";

import React, { useEffect, useRef, useState } from "react";

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

                const baseX = canvas.width * 0.6;
                const yOffset = radius;
                const xOffset = radius * Math.sin(angleStep / 2);
                const MODIFIER_MAP: Record<number, number> = {
                    2: 0.0000000000001,
                    3: 0.25,
                    4: 0.35,
                    5: 0.41,
                    6: 0.43,
                    7: 0.45,
                    8: 0.47,
                    9: 0.48,
                    10: 0.49,
                };
                const currentYModifier = MODIFIER_MAP[segments] || 0.5;

                for (let i = 0; i < segments; i++) {
                    const centralAngle = i % 2 === 0 ? 3 * Math.PI / 2 : Math.PI / 2;
                    const startAngle = centralAngle - angleStep / 2;
                    const endAngle = centralAngle + angleStep / 2;

                    const currentX = baseX + i * xOffset;
                    const currentY = i % 2 !== 0 ? y - currentYModifier * yOffset : y + currentYModifier * yOffset;

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
        if (!isNaN(newSegments) && newSegments > 0) {
            setSegments(newSegments);
        }
    };

    const toggleStrokeColor = () => {
        setStrokeColor(prev => prev === "black" ? "white" : "black");
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black relative">
            <canvas ref={canvasRef} />
            <div className="absolute bottom-10 flex gap-4 items-center">
                <input
                    type="number"
                    placeholder="Enter number of segments"
                    value={segments}
                    onChange={handleInputChange}
                    className="px-4 py-2 rounded-lg border-4 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    min="1"
                />
                <button
                    onClick={toggleStrokeColor}
                    className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-lg border-4 border-black"
                >
                    Toggle Line Color
                </button>
            </div>
        </div>
    );
};

export default CircleAreaPage;