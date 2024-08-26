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
  ["Карʼєра", "Карʼєра і Хоббі", "Карʼєра і Хоббі", "Кар'єра і Хоббі"],
  ["Про Мене", "Хоббі і Кар'єра", "Хоббі і Кар'єра", "Хоббі і Кар'єра"],
  ["Про Мене", "Мої Захоплення", "Хоббі та Ідеї", "Коротка Біографія"],
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
