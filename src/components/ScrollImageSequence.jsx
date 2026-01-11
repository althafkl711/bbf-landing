"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollImageSequence({
    folderPath,
    totalFrames,
    prefix = "ezgif-frame-",
    extension = ".jpg",
    className = "",
}) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // 1. Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray = [];
        const pad = (num) => num.toString().padStart(3, "0");

        // Load first frame immediately
        const firstImg = new Image();
        firstImg.src = `${folderPath}${prefix}001${extension}`;
        firstImg.onload = () => {
            if (canvasRef.current && !isLoaded) {
                const ctx = canvasRef.current.getContext("2d");
                drawFrame(ctx, firstImg, canvasRef.current.width, canvasRef.current.height);
            }
        };

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `${folderPath}${prefix}${pad(i)}${extension}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount >= totalFrames * 0.1) {
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

    // 2. Scroll Logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["center end", "end start"] // Start when 50% is visible
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Map 0-1 to 0-(totalFrames-1)
        const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(latest * totalFrames)
        );

        const img = images[frameIndex];
        if (img && img.complete) {
            drawFrame(ctx, img, canvas.width, canvas.height);
        }
    });

    // Handle Resize
    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
                // Draw first frame or current roughly if possible, defaulting to 0 for simplicity on resize
                if (images.length > 0 && images[0].complete) {
                    drawFrame(ctx, images[0], canvas.width, canvas.height);
                }
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => window.removeEventListener('resize', resizeCanvas);
    }, [images]);

    return (
        <div ref={containerRef} className={`absolute inset-0 w-full h-full ${className}`}>
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover"
            />
        </div>
    );
}
