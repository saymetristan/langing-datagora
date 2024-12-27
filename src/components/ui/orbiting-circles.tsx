import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeWidth="1"
          />
        </svg>
      )}

      <div
        style={{
          '--radius': `${radius}px`,
          '--duration': `${duration}s`,
        } as React.CSSProperties}
        className={cn(
          "absolute flex items-center justify-center rounded-full animate-orbit",
          { '[animation-direction:reverse]': reverse },
          className
        )}
      >
        {children}
      </div>
    </>
  );
}
