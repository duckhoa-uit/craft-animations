"use client";

import { useEffect, useRef } from "react";
import "./style.css";

export function ScrollSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // number of images to be sequenced
    const frameCount = 147;

    // Function to generate the filename of the image based on the current index
    const currentFrame = (index: number) => {
      return `https://cdn.shopify.com/s/files/1/0634/7833/3657/files/15_CLP_Desktop_${index
        .toString()
        .padStart(4, "0")}.png`;
    };
    // https://cdn.shopify.com/s/files/1/0634/7833/3657/files/15_CLP_Desktop_0001.png
    // Drawing the initial images on the canvas
    const img = new Image();
    img.src = currentFrame(1);
    img.onload = () => {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    //preloading images
    const preloadImages = () => {
      Array.from({ length: frameCount }, (_, i) => {
        const img = new Image();
        img.src = currentFrame(i);
      });
    };

    //update images
    const updateImage = (index: number) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // Tracking the user scroll position
    window.addEventListener("scroll", () => {
      const html = document.documentElement;
      const wrap = document.querySelector(".png__sequence");
      if (!wrap) return;

      const scrollTop = html.scrollTop;
      const maxScrollTop = wrap.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount),
      );
      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });
    preloadImages();
  }, []);
  return (
    <div className="png__sequence">
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        className="png__sequence__canvas"
        id="canvas"
      />
    </div>
  );
}
