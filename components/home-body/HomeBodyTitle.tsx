"use client";
import useSearchParamState from "@/lib/useSearchParamState";
import { AnimatePresence, motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

const HomeBodyTitle: React.FC = () => {
  const [contentType] = useSearchParamState("content_type");
  const [readTime] = useSearchParamState("read_time");

  let titleText = `Хто я`;

  switch (readTime) {
    case "0":
      titleText = "Моє CV";
      break;
    case "1":
      titleText = "Мої Проекти";
      break;
    case "2":
      titleText = "Мій Професійний Досвід";
      break;
    case "3":
      titleText = "Про Кар'єру, Власні Проекти і Навчання";
      break;
    default:
      titleText = "Про мене";
  }

  /*
  Лак-1. Проф

одрразу CV

текст “Моє CV:”

Лак-10. Проф

детальний опис всіх проектів

“Мої проекти і професійний досвід”

Лак-1. Особ.

Моя коротка біографія і хоббі (звідки я і чим цікавлюсь, пара фоток)

Моя філософія

“Про мене”

Лак-10. Особ.

Моя біографія розбита по главам життя

Моя особиста філософія

“Моя біографія за 10хв.”
  */

  return (
    <div className="relative w-full h-28">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={titleText}
        >
          <p className="absolute top-0 text-xl font-semibold tracking-tight scroll-m-20 lg:text-xl">
            <TextGenerateEffect words={titleText} />
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomeBodyTitle;
