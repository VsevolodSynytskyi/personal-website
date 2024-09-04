"use client";
import useContentTypeParam from "@/lib/useContentTypeParam";
import useReadTimeParam from "@/lib/useReadTimeParam";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TextGenerateEffect } from "../aceternity-ui/text-generate-effect";

const HomeBodyTitle: React.FC = () => {
  const [contentType] = useContentTypeParam();
  const [readTime] = useReadTimeParam();

  const t = useTranslations("mainContent");

  let titleText = t(`titles.${[contentType]}.${[readTime]}`);

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
