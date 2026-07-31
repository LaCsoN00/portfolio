import { useState, useEffect } from "react";

interface TypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export const useTypewriter = ({
  words,
  typeSpeed = 80,
  deleteSpeed = 100,
  pauseDuration = 1800,
}: TypewriterOptions) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const currentWord = words[wordIndex % words.length];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    const delay = isDeleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, text.length + 1);
        setText(nextText);
        if (nextText === currentWord) setIsPaused(true);
      } else {
        const nextText = text.slice(0, text.length - 1);
        setText(nextText);
        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, isPaused, words, typeSpeed, deleteSpeed, pauseDuration]);

  return { text, isDeleting };
};
