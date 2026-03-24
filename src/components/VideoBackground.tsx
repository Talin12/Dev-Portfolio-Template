import React from 'react';

interface VideoBackgroundProps {
  src: string;
  opacityClass?: string;
  gradientClass?: string;
}

export default function VideoBackground({ 
  src, 
  opacityClass = "opacity-40 md:opacity-30",
  gradientClass = "bg-gradient-to-b from-black via-transparent to-black md:from-black/80 md:via-transparent md:to-black"
}: VideoBackgroundProps) {
  // Solid black 1x1 pixel base64 for fast FCP
  const posterBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        poster={posterBase64}
        key={src}
        className={`w-full h-full object-cover ${opacityClass}`}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${gradientClass}`}></div>
    </div>
  );
}
