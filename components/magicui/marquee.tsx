import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
};

export function Marquee({
  children,
  className,
  pauseOnHover = false,
  reverse = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group/marquee relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "flex min-w-full shrink-0 items-center justify-around gap-4 marquee-track",
            reverse && "marquee-reverse",
            pauseOnHover && "group-hover/marquee:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
