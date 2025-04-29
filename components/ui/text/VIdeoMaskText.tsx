"use client";

import React, { useEffect, useRef, useState } from "react";

interface VideoTextMaskProps {
    src: string;
    text: string;
    className?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    preload?: "auto" | "metadata" | "none";
    fontSize?: string | number;
    fontWeight?: string | number;
    textAnchor?: "start" | "middle" | "end";
    dominantBaseline?:
        | "auto"
        | "middle"
        | "central"
        | "hanging"
        | "mathematical";
    fontFamily?: string;
}

const VideoTextMask: React.FC<VideoTextMaskProps> = ({
    src,
    text,
    className = "",
    autoPlay = true,
    muted = true,
    loop = true,
    preload = "auto",
    fontSize = 20,
    fontWeight = "bold",
    textAnchor = "middle",
    dominantBaseline = "middle",
    fontFamily = "sans-serif",
}) => {
    const [dataUrlMask, setDataUrlMask] = useState("");

    const updateSvgMask = () => {
        const responsiveFontSize =
            typeof fontSize === "number" ? `${fontSize}vw` : fontSize;
        const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
        <text x='50%' y='50%' font-size='${responsiveFontSize}' font-weight='${fontWeight}' 
          text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' 
          font-family='${fontFamily}'>${text}</text>
      </svg>`;
        setDataUrlMask(`url("data:image/svg+xml,${encodeURIComponent(svg)}")`);
    };

    useEffect(() => {
        updateSvgMask();
        window.addEventListener("resize", updateSvgMask);
        return () => window.removeEventListener("resize", updateSvgMask);
    }, [text, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily]);

    return (
        <div className={`relative w-full h-full ${className}`}>
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    maskImage: dataUrlMask,
                    WebkitMaskImage: dataUrlMask,
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                }}
            >
                <video
                    className="w-full h-full object-cover"
                    autoPlay={autoPlay}
                    muted={muted}
                    loop={loop}
                    preload={preload}
                >
                    <source src={src} />
                    Your browser does not support the video tag.
                </video>
            </div>
            <span className="sr-only">{text}</span>
        </div>
    );
};

export default VideoTextMask;
