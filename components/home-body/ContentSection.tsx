import ContentBlock, { ContentBlockProps } from "./ContentBlock";

interface ContentSectionProps {
  title: React.ReactNode;
  contentBlocks?: ContentBlockProps[];
}

const ContentSection: React.FC<ContentSectionProps> = (props) => {
  return (
    <>
      <h2 className="sticky top-0 bg-background">{props.title}</h2>
      {(props.contentBlocks || []).map((contentBlockProps) => (
        <ContentBlock {...contentBlockProps} />
      ))}
    </>
  );
};

export default ContentSection;
