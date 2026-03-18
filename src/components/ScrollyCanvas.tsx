"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 75; // frame_00 to frame_74

const ScrollyCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);

  // Map scroll progress (0 to 1) to frame index (0 to 74)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to be 2 digits e.g. 00, 01 ... 74
      const indexStr = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${indexStr}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0 || !images[index]) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement?.getBoundingClientRect();
    
    if (rect) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const img = images[index];
      
      // object-fit: cover logic
      const hRatio = rect.width / img.width;
      const vRatio = rect.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (rect.width - img.width * ratio) / 2;
      const centerShift_y = (rect.height - img.height * ratio) / 2;
      
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isLoaded) {
      drawImage(Math.round(latest));
    }
  });

  // Handle initial draw and resize
  useEffect(() => {
    if (isLoaded) {
      drawImage(Math.round(frameIndex.get()));
      
      const handleResize = () => {
        drawImage(Math.round(frameIndex.get()));
      };
      
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isLoaded]);

  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-[#121212] overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block scale-[1.20] origin-center" />
    </div>
  );
};

export default ScrollyCanvas;
