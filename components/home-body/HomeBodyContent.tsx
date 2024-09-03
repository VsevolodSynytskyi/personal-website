import { ContentMatrix } from "@/lib/ContentMatrixType";
import useContentTypeParam from "@/lib/useContentTypeParam";
import useReadTimeParam from "@/lib/useReadTimeParam";
import { AnimatePresence, motion } from "framer-motion";
import Content00 from "./content/00/Content00";
import Content01 from "./content/01/Content01";
import Content02 from "./content/02/Content02";
import Content03 from "./content/03/Content03";
import Content10 from "./content/10/Content10";
import Content11 from "./content/11/Content11";
import Content12 from "./content/12/Content12";
import Content13 from "./content/13/Content13";
import Content20 from "./content/20/Content20";
import Content21 from "./content/21/Content21";
import Content22 from "./content/22/Content22";
import Content23 from "./content/23/Content23";
import Content30 from "./content/30/Content30";
import Content31 from "./content/31/Content31";
import Content32 from "./content/32/Content32";
import Content33 from "./content/33/Content33";
import CvButtonSection from "./CvButtonSection";

const contentMatrix: ContentMatrix = [
  [
    <Content00 key={"00"} />,
    <Content01 key={"01"} />,
    <Content02 key={"02"} />,
    <Content03 key={"03"} />,
  ],
  [
    <Content10 key={"10"} />,
    <Content11 key={"11"} />,
    <Content12 key={"12"} />,
    <Content13 key={"13"} />,
  ],
  [
    <Content20 key={"20"} />,
    <Content21 key={"21"} />,
    <Content22 key={"22"} />,
    <Content23 key={"23"} />,
  ],
  [
    <Content30 key={"30"} />,
    <Content31 key={"31"} />,
    <Content32 key={"32"} />,
    <Content33 key={"33"} />,
  ],
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
          {contentTypeIndex === 0 && <CvButtonSection />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default HomeBodyContent;
