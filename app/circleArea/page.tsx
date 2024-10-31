"use client";

import React, { useEffect, useRef, useState } from "react";

const CircleAreaPage: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [segments, setSegments] = useState<number>(3); // 초기 조각 개수

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

                // 왼쪽 전체 원 설정
                const leftX = canvas.width * 0.25; // 왼쪽에 위치하도록 설정
                const y = canvas.height / 2;
                const radius = 200;

                // 왼쪽 원의 전체 조각 그리기
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

                // 오른쪽에 부채꼴 조각들 그리기
                const baseX = canvas.width * 0.6; // 첫 부채꼴의 시작 위치 설정
                const yOffset = radius; // 홀수/짝수에 따른 y 간격 설정
                const xOffset = radius * Math.sin(angleStep / 2); // 부채꼴 사이의 거리를 계산
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

                    const currentX = baseX + i * xOffset; // 계산된 xOffset 사용
                    const currentY = i % 2 !== 0 ? y - currentYModifier * yOffset : y + currentYModifier * yOffset;

                    context.beginPath();
                    context.moveTo(currentX, currentY);
                    context.arc(currentX, currentY, radius, startAngle, endAngle);
                    context.closePath();

                    context.fillStyle = "white";
                    context.fill();

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
