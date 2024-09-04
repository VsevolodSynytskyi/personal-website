import { motion } from "framer-motion";
import ContentBlock, { ContentBlockProps } from "./ContentBlock";

interface ContentSectionProps {
  title?: React.ReactNode;
  contentBlocks?: ContentBlockProps[];
}

const ContentSection: React.FC<ContentSectionProps> = (props) => {
  return (
    <>
      {props.title && (
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="sticky top-0 z-10 bg-background"
        >
          {props.title}
        </motion.h2>
      )}
      {(props.contentBlocks || []).map((contentBlockProps, i) => (
        <ContentBlock key={i} {...contentBlockProps} />
      ))}
    </>
  );
};

export default ContentSection;
