import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-xs tracking-[0.2em] uppercase text-[#6c63ff] bg-[#6c63ff]/10 border border-[#6c63ff]/20 px-3 py-1 rounded-full mb-4",
        className
      )}
    >
      {children}
    </span>
  );
}
