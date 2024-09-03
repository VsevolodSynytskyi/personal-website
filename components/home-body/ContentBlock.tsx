import dayjsExtended, { defaultDayjsFormat } from "@/lib/dayjsExtended";
import { useLocale } from "next-intl";

import { motion } from "framer-motion";

export interface ContentBlockProps {
  title?: React.ReactNode;
  dates?: string[];
  content?: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const locale = useLocale();
  dayjsExtended.locale(locale);

  let dayStrings: string[] = [];
  props.dates?.forEach((dateStr) => {
    const date = dayjsExtended(dateStr, defaultDayjsFormat);
    if (date.isValid()) {
      dayStrings.push(date.format("MMM YYYY"));
    }
  });

  const daysText = dayStrings.join(" - ");

  return (
    <>
      {!!props.title && <h3>{props.title}</h3>}
      {!!daysText && (
        <p className="text-sm italic text-muted-foreground">{daysText}</p>
      )}
      {!!props.content && (
        <motion.div
          className="mt-6 text-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {props.content}
        </motion.div>
      )}
    </>
  );
};

export default ContentBlock;
