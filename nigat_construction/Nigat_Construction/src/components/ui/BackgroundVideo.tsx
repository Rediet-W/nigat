"use client";

import { useEffect, useRef } from "react";

interface BackgroundVideoProps {
  id?: string;
  src: string;
}

/**
 * Muted, looping background video. React does not serialize the `muted`
 * attribute during SSR, so it is enforced on mount before calling play()
 * to keep browser autoplay policies satisfied.
 */
export function BackgroundVideo({ id, src }: BackgroundVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      /* Autoplay can still be refused (e.g. data-saver); the poster frame stays visible. */
    });
  }, []);

  return (
    <video ref={ref} id={id} autoPlay muted loop playsInline>
      <source src={src} type="video/mp4" />
    </video>
  );
}
