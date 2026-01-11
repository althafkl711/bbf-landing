"use client";

import { useEffect, useRef, useState } from "react";

export default function ImageSequence({
    folderPath,
    totalFrames,
    fps = 30,
    prefix = "ezgif-frame-",
    extension = ".jpg",
    className = "",
}) {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const requestRef = useRef();

    // 1. Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray = [];

        // Helper to format frame number (e.g., 1 -> "001")
        const pad = (num) => num.toString().padStart(3, "0");

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `${folderPath}${prefix}${pad(i)}${extension}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount >= totalFrames * 0.5) { // Start playing when 50% loaded to reduce wait
                    setIsLoaded(true);
                }
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, [folderPath, totalFrames, prefix, extension]);

    // Helper draw function
    const drawFrame = (context, img, cWidth, cHeight) => {
        const imgRatio = img.width / img.height;
        const canvasRatio = cWidth / cHeight;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = cWidth;
            drawHeight = cWidth / imgRatio;
            offsetX = 0;
            offsetY = (cHeight - drawHeight) / 2;
        } else {
            drawHeight = cHeight;
            drawWidth = cHeight * imgRatio;
            offsetX = (cWidth - drawWidth) / 2;
            offsetY = 0;
        }

        context.clearRect(0, 0, cWidth, cHeight);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // 2. Animation Loop via Canvas
    useEffect(() => {
        if (!isLoaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let frameIndex = 0;
        let lastTime = 0;
        const interval = 1000 / fps;

        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
                const img = images[frameIndex % totalFrames];
                if (img && img.complete) {
                    drawFrame(ctx, img, canvas.width, canvas.height);
                }
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const animate = (time) => {
            if (time - lastTime > interval) {
                const img = images[frameIndex];
                if (img && img.complete) {
                    drawFrame(ctx, img, canvas.width, canvas.height);
                    frameIndex = (frameIndex + 1) % totalFrames;
                }
                lastTime = time;
            }
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [isLoaded, images, fps, totalFrames]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full object-cover ${className}`}
        />
    );
}
