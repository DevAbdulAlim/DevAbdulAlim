"use client";

import { useState, useEffect } from "react";

interface TypeAnimationProps {
  sequence: string[];
  speed: number;
  repeat: number | boolean;
}

export function TypeAnimation({ sequence, speed, repeat }: TypeAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = sequence[currentTextIndex];

    if (!isDeleting && currentText.length < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, speed);
    } else if (isDeleting && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, speed / 2);
    } else if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % sequence.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, sequence, speed]);

  return <span>{currentText || "\u00A0"}</span>;
}
