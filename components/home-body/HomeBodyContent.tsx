import { ContentMatrix } from "@/lib/ContentMatrixType";
import useContentTypeParam from "@/lib/useContentTypeParam";
import useReadTimeParam from "@/lib/useReadTimeParam";
import { AnimatePresence, motion } from "framer-motion";
import Content00 from "./content/Content00";
import Content01 from "./content/Content01";
import Content02 from "./content/Content02";
import Content03 from "./content/Content03";
import Content10 from "./content/Content10";
import Content11 from "./content/Content11";
import Content12 from "./content/Content12";
import Content13 from "./content/Content13";
import Content20 from "./content/Content20";
import Content21 from "./content/Content21";
import Content22 from "./content/Content22";
import Content23 from "./content/Content23";
import Content30 from "./content/Content30";
import Content31 from "./content/Content31";
import Content32 from "./content/Content32";
import Content33 from "./content/Content33";

const contentMatrix: ContentMatrix = [
  [<Content00 />, <Content01 />, <Content02 />, <Content03 />],
  [<Content10 />, <Content11 />, <Content12 />, <Content13 />],
  [<Content20 />, <Content21 />, <Content22 />, <Content23 />],
  [<Content30 />, <Content31 />, <Content32 />, <Content33 />],
];

const HomeBodyContent: React.FC = () => {
  const [contentTypeIndex] = useContentTypeParam();
  const [readTimeIndex] = useReadTimeParam();

  const content = contentMatrix[contentTypeIndex][readTimeIndex];

  return (
    <motion.div
      className="relative text-content"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <AnimatePresence>
        <motion.div
          className="top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: "absolute" }}
          key={`${contentTypeIndex}${readTimeIndex}`}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default HomeBodyContent;
