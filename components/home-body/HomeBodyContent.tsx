import useSearchParamState, {
  searchParamToNumber,
} from "@/lib/useSearchParamState";
import { AnimatePresence, motion } from "framer-motion";
import Content00 from "./content/Content00";
import Content01 from "./content/Content01";
import Content02 from "./content/Content02";
import Content03 from "./content/Content03";

// Content Matrix:
// [i][j] - each element represents entire component content
// where:
// i - value of content_type (proffessional vs personal)
// j - value of read_time (short vs descriptive)

const contentMatrix: React.ReactNode[][] = [
  [<Content00 />, <Content01 />, <Content02 />, <Content03 />],
  [, , ,],
  [, , ,],
  [, , ,],
];

const searchParamToIndex: (searchParam: null | string) => number = (
  searchParam
) =>
  typeof searchParam === "string" ? searchParamToNumber(searchParam) || 0 : 0;

const HomeBodyContent: React.FC = () => {
  const [readTimeValue] = useSearchParamState("read_time", "0");
  const [contentTypeValue] = useSearchParamState("content_type", "0");

  const readTimeIndex = searchParamToIndex(readTimeValue);
  const contentTypeIndex = searchParamToIndex(contentTypeValue);

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
          <div>{`contentMatrix[${contentTypeIndex}][${readTimeIndex}]`}</div>
          {contentMatrix[contentTypeIndex][readTimeIndex]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default HomeBodyContent;
