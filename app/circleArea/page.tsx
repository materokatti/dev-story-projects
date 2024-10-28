"use client";

import React, { useEffect, useRef, useState } from "react";

const CircleAreaPage: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [segments, setSegments] = useState<number>(10); // 초기 조각 개수

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext("2d");
            if (context) {
                // 캔버스 크기 설정
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                // 캔버스 초기화
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.fillStyle = "black";
                context.fillRect(0, 0, canvas.width, canvas.height);

                // 원의 중심과 반지름 설정
                const x = canvas.width / 2;
                const y = canvas.height / 2;
                const radius = 200;

                // 각 조각의 중심각 계산
                const angleStep = (2 * Math.PI) / segments;

                // 조각 그리기
                for (let i = 0; i < segments; i++) {
                    const startAngle = i * angleStep;
                    const endAngle = startAngle + angleStep;

                    context.beginPath();
                    context.moveTo(x, y); // 원의 중심에서 시작
                    context.arc(x, y, radius, startAngle, endAngle); // 각 조각 그리기
                    context.closePath();

                    // 조각 색상 설정
                    context.fillStyle = "white";
                    context.fill();

                    // 구분선 색상 설정 및 그리기
                    context.strokeStyle = "black";
                    context.lineWidth = 2;
                    context.stroke();
                }

            }
        }
    }, [segments]); // 조각 개수가 변경될 때마다 원을 다시 그림

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSegments = parseInt(event.target.value);
        if (!isNaN(newSegments) && newSegments > 0) {
            setSegments(newSegments); // 조각 개수 업데이트
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black relative">
            <canvas ref={canvasRef} />
            <input
                type="number"
                placeholder="Enter number of segments"
                value={segments}
                onChange={handleInputChange}
                className="absolute bottom-10 px-4 py-2 rounded-lg border-4 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                min="1"
            />
        </div>
    );
};

export default CircleAreaPage;
