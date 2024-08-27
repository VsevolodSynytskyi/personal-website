import dayjs, { Dayjs } from "dayjs";
import { motion } from "framer-motion";

import "dayjs/locale/uk"; // Import Ukrainian locale

// Set the locale to Ukrainian
dayjs.locale("uk");

export interface ContentBlockProps {
  title?: React.ReactNode;
  dates?: Dayjs[];
  content?: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  return (
    <>
      {!!props.title && <h3>{props.title}</h3>}
      <p className="text-sm italic text-muted-foreground">
        {props.dates
          ?.map((date) => date.locale("uk").format("MMMM YYYY"))
          .join(" - ")}
      </p>
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
