"use client";

import {useEffect, useRef} from "react";
import styles from "./PongGame.module.css";

const PongGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleFullScreenChange = () => {
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        window.location.reload();
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);

    const paddleWidth = 10;
    const paddleHeight = 100;
    const ballRadius = 10;

    let playerY = canvas.height / 2 - paddleHeight / 2;
    let computerY = canvas.height / 2 - paddleHeight / 2;
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballSpeedX = 5;
    let ballSpeedY = 5;

    function drawRect(
      x: number,
      y: number,
      width: number,
      height: number,
      color: string
    ) {
      context.fillStyle = color;
      context.fillRect(x, y, width, height);
    }

    function drawCircle(x: number, y: number, radius: number, color: string) {
      context.fillStyle = color;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2, false);
      context.closePath();
      context.fill();
    }

    function drawNet() {
      for (let i = 0; i <= canvas.height; i += 20) {
        drawRect(canvas.width / 2 - 1, i, 2, 10, "#fff");
      }
    }

    function resetBall() {
      ballX = canvas.width / 2;
      ballY = canvas.height / 2;
      ballSpeedX = -ballSpeedX;
    }

    canvas.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      const root = document.documentElement;
      playerY = event.clientY - rect.top - root.scrollTop - paddleHeight / 2;
    });

    function moveComputer() {
      const computerSpeed = 4;
      if (computerY + paddleHeight / 2 < ballY) {
        computerY += computerSpeed;
      } else {
        computerY -= computerSpeed;
      }
    }

    function update() {
      ballX += ballSpeedX;
      ballY += ballSpeedY;

      if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
        ballSpeedY = -ballSpeedY;
      }

      if (ballX - ballRadius < paddleWidth) {
        if (ballY > playerY && ballY < playerY + paddleHeight) {
          ballSpeedX = -ballSpeedX;
        } else {
          resetBall();
        }
      }

      if (ballX + ballRadius > canvas.width - paddleWidth) {
        if (ballY > computerY && ballY < computerY + paddleHeight) {
          ballSpeedX = -ballSpeedX;
        } else {
          resetBall();
        }
      }

      moveComputer();
    }

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawNet();
      drawRect(0, playerY, paddleWidth, paddleHeight, "#fff");
      drawRect(
        canvas.width - paddleWidth,
        computerY,
        paddleWidth,
        paddleHeight,
        "#fff"
      );
      drawCircle(ballX, ballY, ballRadius, "#fff");
    }

    function gameLoop() {
      update();
      render();
      requestAnimationFrame(gameLoop);
    }

    gameLoop();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default PongGame;
