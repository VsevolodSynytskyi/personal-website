"use client";
import { ContentMatrix } from "@/lib/ContentMatrixType";
import useContentTypeParam from "@/lib/useContentTypeParam";
import useReadTimeParam from "@/lib/useReadTimeParam";
import { AnimatePresence, motion } from "framer-motion";
import { TextGenerateEffect } from "../aceternity-ui/text-generate-effect";

const titleMatrix: ContentMatrix<string> = [
  [
    "Меньше ніж CV",
    "Майже CV",
    "CV",
    "Про Кар'єру, Власні Проекти та Навчання",
  ],
  [
    "Звідки Я і Чим Займаюсь",
    "Карʼєра",
    "Карʼєра",
    "Професійний Шлях та Хоббі",
  ],
  [
    "Звідки Я і Чим Займаюсь",
    "Хоббі та Робота",
    "Хоббі та Кар'єра",
    "Хоббі та Кар'єра",
  ],
  [
    "Коротко Про Мене",
    "Мої Захоплення",
    "Звідки Я, Хоббі та Ідеї",
    "Чим Я Живу",
  ],
];

const HomeBodyTitle: React.FC = () => {
  const [contentType] = useContentTypeParam();
  const [readTime] = useReadTimeParam();

  let titleText = titleMatrix[contentType][readTime];

  return (
    <div className="relative w-full h-28">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={`${readTime}${contentType}`}
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
