"use client";
import { useEffect, useRef, useState } from 'react';

const StandardDeviationGraph = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [sd, setSd] = useState<number>(1.0);

    // 정규분포 함수
    const normalDistribution = (x: number, mean: number, sd: number): number => {
        return (1 / (sd * Math.sqrt(2 * Math.PI))) *
            Math.exp(-((x - mean) ** 2) / (2 * sd ** 2));
    };

    // 그래프 그리기 함수
    const drawGraph = (ctx: CanvasRenderingContext2D | null, sd: number): void => {
        if (!ctx) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        // 그래프의 실제 크기 설정
        const graphWidth = 700;
        const graphHeight = 400;

        // 중앙 좌표 계산
        const centerX = width / 2;
        const centerY = height / 2;

        // 시작점 계산
        const startX = centerX - (graphWidth / 2);
        const startY = centerY - (graphHeight / 2);

        // 캔버스 초기화 및 배경 설정
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);

        // 축 그리기
        ctx.beginPath();
        ctx.moveTo(startX, startY + 350);
        ctx.lineTo(startX + 550, startY + 350);
        ctx.moveTo(startX + 300, startY + 50);
        ctx.lineTo(startX + 300, startY + 350);
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();

        // 그래프 그리기
        ctx.beginPath();
        ctx.moveTo(startX + 50, startY + 350);

        for (let x = -4; x <= 4; x += 0.1) {
            const y = normalDistribution(x, 0, sd);
            const canvasX = startX + 300 + (x * 50);
            const canvasY = startY + 350 - (y * 800);

            if (x === -4) {
                ctx.moveTo(canvasX, canvasY);
            } else {
                ctx.lineTo(canvasX, canvasY);
            }
        }

        ctx.strokeStyle = '#2196F3';
        ctx.lineWidth = 2;
        ctx.stroke();

        // 표준편차 영역 표시
        const region = new Path2D();
        for (let x = -sd; x <= sd; x += 0.1) {
            const y = normalDistribution(x, 0, sd);
            const canvasX = startX + 300 + (x * 50);
            const canvasY = startY + 350 - (y * 800);

            if (x === -sd) {
                region.moveTo(canvasX, startY + 350);
                region.lineTo(canvasX, canvasY);
            } else {
                region.lineTo(canvasX, canvasY);
            }
        }
        region.lineTo(startX + 300 + (sd * 50), startY + 350);
        region.closePath();

        ctx.fillStyle = 'rgba(33, 150, 243, 0.2)';
        ctx.fill(region);

        // 레이블 추가
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Arial';
        ctx.fillText('μ', startX + 290, startY + 370);
        ctx.fillText('-σ', startX + 300 - (sd * 50) - 10, startY + 370);
        ctx.fillText('+σ', startX + 300 + (sd * 50) - 10, startY + 370);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const ctx = canvas.getContext('2d');
            drawGraph(ctx, sd);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [sd]);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSd(parseFloat(e.target.value));
    };

    return (
        <div className='relative w-screen h-screen bg-black'>
            <canvas
                ref={canvasRef}
                className='absolute top-0 left-0 w-full h-full'
            />
            <div className="absolute w-full max-w-md space-y-2 bottom-10 left-1/2 -translate-x-1/2">
                <input
                    type="range"
                    min="0.1"
                    max="3"
                    step="0.1"
                    value={sd}
                    onChange={handleSliderChange}
                    className="w-full"
                />
                <div className="text-center text-sm text-white">
                    Normal Distribution : {sd.toFixed(1)}
                </div>
            </div>
        </div>
    );
};

export default StandardDeviationGraph;