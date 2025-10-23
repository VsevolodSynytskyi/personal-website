"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TextGenerateEffect } from "../aceternity-ui/text-generate-effect";
import { useParams } from "next/navigation";

const ContentPageTitle: React.FC = () => {
  const t = useTranslations("mainContent");

  const params = useParams();
  const contentType = params.contentType;
  const readTime = params.readTime;
  if (!contentType || !readTime) {
    // TODO handle this better
    return null;
  }

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

export default ContentPageTitle;
