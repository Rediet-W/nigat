import { cn } from "@/lib/cn";

interface MarqueeProps {
  items: string[];
  label: string;
  className?: string;
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-5 shrink-0 fill-ochre md:size-6">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" />
    </svg>
  );
}

/**
 * Endless ribbon of words. The list is rendered twice for a seamless loop;
 * the copy is hidden from assistive technology. Pauses on hover and stops
 * under reduced motion.
 */
export function Marquee({ items, label, className }: MarqueeProps) {
  const row = (copy: boolean) => (
    <ul
      aria-label={copy ? undefined : label}
      aria-hidden={copy || undefined}
      className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12"
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 md:gap-12">
          <span className="type-marquee">{item}</span>
          <Star />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("marquee overflow-hidden", className)}>
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
