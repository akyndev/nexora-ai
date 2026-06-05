import { cn } from "@/lib/utils";

type AnimatedGridPatternProps = {
  className?: string;
};

export function AnimatedGridPattern({ className }: AnimatedGridPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.09)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_0%,black_34%,transparent_72%)]" />
      <div className="nexora-scanline absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-300/24 via-emerald-200/10 to-transparent blur-sm" />
      <div className="nexora-glow-trail absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20" />
    </div>
  );
}
