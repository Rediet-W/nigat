"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import type { AboutTopic } from "../data/about";

interface AboutTopicsProps {
  topics: AboutTopic[];
  /** Server-rendered intro (eyebrow, title, lead) shown above the topics. */
  intro: ReactNode;
  /** Optional closing action under the last topic. */
  footer?: ReactNode;
}

/**
 * Half-screen split: a full-height photo pinned to the left edge that
 * crossfades to the topic currently in the middle of the viewport (desktop),
 * with each topic carrying its own inline photo on smaller screens.
 */
export function AboutTopics({ topics, intro, footer }: AboutTopicsProps) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    itemRefs.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-2">
      {/* Pinned half-screen media (desktop) */}
      <div className="relative hidden lg:block">
        <div className="sticky top-0 h-svh overflow-hidden bg-ink text-paper">
          {topics.map((topic, index) => (
            <Image
              key={topic.image}
              src={topic.image}
              alt={index === active ? topic.imageAlt : ""}
              aria-hidden={index !== active}
              fill
              sizes="50vw"
              className={cn(
                "object-cover transition-[opacity,scale] duration-[1400ms] ease-drive",
                index === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0",
              )}
            />
          ))}
          <div aria-hidden className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/0 to-ink/0" />

          <div aria-hidden className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-(--gutter)">
            <p className="type-nav text-paper">
              <span className="type-number mr-3 text-accent">{formatIndex(active)}</span>
              {topics[active].title}
            </p>
            <div className="flex gap-2">
              {topics.map((topic, index) => (
                <span
                  key={topic.title}
                  className={cn(
                    "h-px transition-all duration-700 ease-drive",
                    index === active ? "w-12 bg-paper" : "w-6 bg-paper/30",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-y px-(--gutter) lg:pr-(--gutter) lg:pl-[clamp(3rem,6vw,8rem)]">
        <div className="max-w-[40rem]">
          {intro}

          <ol className="mt-16 border-t border-line lg:mt-24">
            {topics.map((topic, index) => {
              const isActive = index === active;
              return (
                <li
                  key={topic.title}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  data-index={index}
                  onMouseEnter={() => setActive(index)}
                  className="border-b border-line py-10 lg:flex lg:min-h-[52svh] lg:flex-col lg:justify-center lg:py-16"
                >
                  <figure className="relative mb-8 aspect-[4/3] overflow-hidden bg-bone lg:hidden">
                    <Image src={topic.image} alt={topic.imageAlt} fill sizes="100vw" className="object-cover" />
                  </figure>
                  <span className="type-number block text-sm text-accent">{formatIndex(index)}</span>
                  <h3
                    className={cn(
                      "type-h2 mt-5 transition-colors duration-700 ease-drive",
                      !isActive && "lg:text-ink/20",
                    )}
                  >
                    {topic.title}
                  </h3>
                  <p
                    className={cn(
                      "type-lead mt-5 max-w-[30rem] text-steel transition-opacity duration-700 ease-drive",
                      !isActive && "lg:opacity-30",
                    )}
                  >
                    {topic.description}
                  </p>
                </li>
              );
            })}
          </ol>

          {footer && <div className="mt-12">{footer}</div>}
        </div>
      </div>
    </div>
  );
}
