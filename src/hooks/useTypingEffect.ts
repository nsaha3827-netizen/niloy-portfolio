"use client";
import { useState, useEffect, useCallback } from "react";

export function useTypingEffect(
  texts: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = texts[currentIndex];
    if (isDeleting) {
      setDisplayText((prev) => prev.slice(0, -1));
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      setDisplayText(current.slice(0, displayText.length + 1));
      if (displayText === current) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    }
  }, [texts, currentIndex, isDeleting, displayText, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return displayText;
}
