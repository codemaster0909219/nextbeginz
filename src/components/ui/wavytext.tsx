"use client";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

interface WavyTextProps {
  text?: string;
  className?: string;
}

export const WavyText: React.FC<WavyTextProps> = ({
  text = "",
  className = "",
}) => {
  const variants = {
    hidden: { y: 10 },
    visible: { y: -10 },
  };

  return (
    <div className={clsx("text-center leading-snug", className)}>
      <AnimatePresence>
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-4">
            {word.split("").map((char, i) => (
              <motion.span
                key={`${wordIndex}-${i}`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{
                  yoyo: Infinity,
                  duration: 0.5,
                  delay: (wordIndex * 5 + i) * 0.07,
                }}
                className={clsx(
                  "inline-block font-display font-bold drop-shadow-sm",
                  "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
                  "tracking-[-0.02em]",
                  "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
                )}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </AnimatePresence>
    </div>
  );
};
