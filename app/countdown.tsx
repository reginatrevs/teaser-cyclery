"use client";

import { Fragment, useEffect, useState } from "react";

// Launch: June 4, 2026 at 6:00 PM Eastern
const LAUNCH = new Date("2026-06-04T18:00:00-04:00").getTime();

function getRemaining() {
  const diff = Math.max(0, LAUNCH - Date.now());
  return {
    hours: Math.floor(diff / 3600000),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  };
}

const units: { key: "hours" | "minutes" | "seconds"; label: string }[] = [
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown() {
  const [time, setTime] = useState(getRemaining);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time.done) {
    return (
      <p className="text-center font-bold tracking-[-0.05em] text-[#ff138c] leading-none text-[clamp(3rem,16vw,12rem)]">
        We&apos;re live.
      </p>
    );
  }

  return (
    <div
      className="flex w-full items-start justify-between"
      suppressHydrationWarning
    >
      {units.map((unit, i) => (
        <Fragment key={unit.key}>
          <div className="text-center">
            <p className="font-bold tracking-[-0.05em] tabular-nums text-[#ff138c] leading-none text-[clamp(3rem,16vw,12rem)]">
              {mounted ? String(time[unit.key]).padStart(2, "0") : "--"}
            </p>
            <p className="mt-3 md:mt-5 text-[2.5vw] md:text-sm font-semibold uppercase tracking-[0.1em] text-[#ff138c]">
              {unit.label}
            </p>
          </div>
          {i < units.length - 1 && (
            <span className="font-bold tracking-[-0.05em] text-[#ff138c] leading-none text-[clamp(3rem,16vw,12rem)]">
              :
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
