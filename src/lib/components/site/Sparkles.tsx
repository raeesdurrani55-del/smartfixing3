import { useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Sparkles({ count = 25 }: { count?: number }) {
  const isMobile = useIsMobile();
  const total = isMobile ? 0 : count;
  const sparks = useMemo(
    () =>
      Array.from({ length: total }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2,
        delay: Math.random() * 6,
        duration: 3 + Math.random() * 3,
      })),
    [total]
  );

  if (total === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-[var(--cyan-glow)] animate-sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            boxShadow: `0 0 ${s.size * 4}px var(--cyan-glow)`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
