"use client";
import { ContentMatrix } from "@/lib/ContentMatrixType";
import useContentTypeParam from "@/lib/useContentTypeParam";
import useReadTimeParam from "@/lib/useReadTimeParam";
import { AnimatePresence, motion } from "framer-motion";
import { TextGenerateEffect } from "../aceternity-ui/text-generate-effect";

const titleMatrix: ContentMatrix<string> = [
  [
    "Моє CV",
    "Мої Проекти",
    "Мій Професійний Досвід",
    "Про Кар'єру, Власні Проекти і Навчання",
  ],
  ["10", "11", "12", "13"],
  ["20", "21", "22", "23"],
  ["Про Мене", "31", "32", "Коротка Біографія"],
];

const HomeBodyTitle: React.FC = () => {
  const [contentType] = useContentTypeParam();
  const [readTime] = useReadTimeParam();

  let titleText = titleMatrix[contentType][readTime];
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
          key={titleText?.toString()}
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
