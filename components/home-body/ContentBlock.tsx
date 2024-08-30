import { Dayjs } from "dayjs";

import { motion } from "framer-motion";

export interface ContentBlockProps {
  title?: React.ReactNode;
  dates?: Dayjs[];
  content?: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  let dayStrings: string[] = [];
  props.dates?.forEach((date) => {
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
