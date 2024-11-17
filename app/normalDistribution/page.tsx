"use client";
import { useEffect, useRef, useState } from 'react';

const StandardDeviationGraph = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [sd, setSd] = useState<number>(2.0);

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
        const graphHeight = 500;

        // 중앙 좌표 계산
        const centerX = width / 2;
        const centerY = height / 2;

        // 시작점 계산 (그래프의 왼쪽 끝)
        const startX = centerX - (graphWidth / 2);
        const startY = centerY - (graphHeight / 2);

        // 그래프의 중심점 (실제 그래프가 그려질 중심)
        const graphCenterX = startX + (graphWidth / 2);

        // 캔버스 초기화 및 배경 설정
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);

        // 축 그리기
        ctx.beginPath();
        ctx.moveTo(startX, startY + 350);
        ctx.lineTo(startX + graphWidth, startY + 350);  // 가로축 길이를 graphWidth로 수정
        ctx.moveTo(graphCenterX, startY + 50);          // 중심점 사용
        ctx.lineTo(graphCenterX, startY + 350);         // 중심점 사용
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();

        // 그래프 그리기
        ctx.beginPath();

        for (let x = -4; x <= 4; x += 0.1) {
            const y = normalDistribution(x, 0, sd);
            const canvasX = graphCenterX + (x * 50);    // 중심점 기준으로 x좌표 계산
            const canvasY = startY + 350 - (y * 800);

            if (x === -4) {
                ctx.moveTo(canvasX, canvasY);
            } else {
                ctx.lineTo(canvasX, canvasY);
            }
        }

        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // 표준편차 영역 표시
        const region = new Path2D();
        for (let x = -sd; x <= sd; x += 0.1) {
            const y = normalDistribution(x, 0, sd);
            const canvasX = graphCenterX + (x * 50);    // 중심점 기준으로 x좌표 계산
            const canvasY = startY + 350 - (y * 800);

            if (x === -sd) {
                region.moveTo(canvasX, startY + 350);
                region.lineTo(canvasX, canvasY);
            } else {
                region.lineTo(canvasX, canvasY);
            }
        }
        region.lineTo(graphCenterX + (sd * 50), startY + 350);
        region.closePath();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill(region);

        // 레이블 추가
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Arial';
        ctx.fillText('μ', graphCenterX - 10, startY + 370);            // 중심점 기준으로 조정
        ctx.fillText('-σ', graphCenterX - (sd * 50) - 10, startY + 370); // 중심점 기준으로 조정
        ctx.fillText('+σ', graphCenterX + (sd * 50) - 10, startY + 370); // 중심점 기준으로 조정
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
                    min="1"
                    max="4"
                    step="0.00001"
                    value={sd}
                    onChange={handleSliderChange}
                    className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                    style={{
                        WebkitAppearance: 'none',
                        background: 'transparent'
                    }}
                />
                <div className="text-center text-sm text-white">
                    Normal Distribution : {sd.toFixed(1)}
                </div>
            </div>
        </div>
    );
};

export default StandardDeviationGraph;