"use client";

import React, { useEffect, useRef } from "react";

const CircleAreaPage: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext("2d");
            if (context) {
                // 캔버스 크기 설정
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                // 원의 속성
                const radius = 200;
                const x = canvas.width / 2;
                const y = canvas.height / 2;

                // 배경 색상 및 원 그리기
                context.fillStyle = "black";
                context.fillRect(0, 0, canvas.width, canvas.height);

                context.beginPath();
                context.arc(x, y, radius, 0, 2 * Math.PI);
                context.fillStyle = "white";
                context.fill();
            }
        }
    }, []);

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default CircleAreaPage;
