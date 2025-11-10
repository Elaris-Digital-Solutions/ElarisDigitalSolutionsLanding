"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingConsoleProps {
  phrases: string[];
  loop?: boolean;
  prefix?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
  className?: string;
  cursorClassName?: string;
  hideCursor?: boolean;
}

const TypingConsole = ({
  phrases,
  loop = true,
  prefix = "$",
  typingSpeed = 60,
  deletingSpeed = 40,
  pauseDelay = 1000,
  className,
  cursorClassName,
  hideCursor = false,
}: TypingConsoleProps) => {
  const phrasesKey = useMemo(() => JSON.stringify(phrases ?? []), [phrases]);
  const sanitizedPhrases = useMemo(() => {
    try {
      const parsed = JSON.parse(phrasesKey) as string[];
      return parsed
        .map((phrase) => (typeof phrase === "string" ? phrase.trim() : ""))
        .filter((phrase) => phrase.length > 0);
    } catch (error) {
      return [] as string[];
    }
  }, [phrasesKey]);

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setIsDeleting(false);
    setCurrentPhraseIndex(0);
  }, [phrasesKey]);

  useEffect(() => {
    if (!sanitizedPhrases.length) return;

    const currentPhrase = sanitizedPhrases[currentPhraseIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!isDeleting && displayText === currentPhrase) {
      if (!loop && currentPhraseIndex === sanitizedPhrases.length - 1) {
        return;
      }

      timeout = setTimeout(() => setIsDeleting(true), pauseDelay);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= sanitizedPhrases.length) {
            return loop ? 0 : prevIndex;
          }
          return nextIndex;
        });
      }, pauseDelay / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, Math.max(prev.length - 1, 0))
            : currentPhrase.slice(0, prev.length + 1),
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [
    currentPhraseIndex,
    deletingSpeed,
    displayText,
    isDeleting,
    loop,
    pauseDelay,
    sanitizedPhrases,
    typingSpeed,
  ]);

  if (!sanitizedPhrases.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "px-3 sm:px-4 py-3 font-mono text-sm sm:text-[15px] text-slate-900",
        className,
      )}
    >
      <div className="flex items-center min-h-[24px]">
        <span className="mr-2 flex-shrink-0 text-[#2F64FF]">{prefix}</span>
        <span className="break-words overflow-hidden">{displayText}</span>
        {!hideCursor && (
          <span
            className={cn(
              "ml-0.5 inline-block h-4 w-2.5 flex-shrink-0 animate-pulse bg-[#2F64FF]",
              cursorClassName,
            )}
          />
        )}
      </div>
    </div>
  );
};

export default TypingConsole;
export type { TypingConsoleProps };
