import { ContentMatrix } from "@/lib/customTypes";
import { Locale, locales } from "@/lib/i18n/locales";
import useContentTypeParam from "@/lib/useContentTypeParam";
import useReadTimeParam from "@/lib/useReadTimeParam";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import Content00en from "./content/00/Content00en";
import Content00uk from "./content/00/Content00uk";
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
import Content33en from "./content/33/Content33en";
import Content33uk from "./content/33/Content33uk";
import CvButtonSection from "./CvButtonSection";

const contentMatrix: ContentMatrix = [
  [
    {
      en: <Content00en key={"00"} />,
      uk: <Content00uk key={"00"} />,
    },
    {
      en: <Content01 key={"01"} />,
      uk: <Content01 key={"01"} />,
    },
    {
      en: <Content02 key={"02"} />,
      uk: <Content02 key={"02"} />,
    },
    {
      en: <Content03 key={"03"} />,
      uk: <Content03 key={"03"} />,
    },
  ],
  [
    {
      en: <Content10 key={"10"} />,
      uk: <Content10 key={"10"} />,
    },
    {
      en: <Content11 key={"11"} />,
      uk: <Content11 key={"11"} />,
    },
    {
      en: <Content12 key={"12"} />,
      uk: <Content12 key={"12"} />,
    },
    {
      en: <Content13 key={"13"} />,
      uk: <Content13 key={"13"} />,
    },
  ],
  [
    {
      en: <Content20 key={"20"} />,
      uk: <Content20 key={"20"} />,
    },
    {
      en: <Content21 key={"21"} />,
      uk: <Content21 key={"21"} />,
    },
    { en: <Content22 key={"22"} />, uk: <Content22 key={"22"} /> },
    { en: <Content23 key={"23"} />, uk: <Content23 key={"23"} /> },
  ],
  [
    { en: <Content30 key={"30"} />, uk: <Content30 key={"30"} /> },
    { en: <Content31 key={"31"} />, uk: <Content31 key={"31"} /> },
    { en: <Content32 key={"32"} />, uk: <Content32 key={"32"} /> },
    { en: <Content33en key={"33"} />, uk: <Content33uk key={"33"} /> },
  ],
];

const HomeBodyContent: React.FC = () => {
  const [contentTypeIndex] = useContentTypeParam();
  const [readTimeIndex] = useReadTimeParam();
  const locale = useLocale();
  let content = null;
  if (locales.includes(locale)) {
    content = locale
      ? contentMatrix[contentTypeIndex][readTimeIndex][locale as Locale]
      : null;
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <AnimatePresence>
        <motion.div
          className="top-0 left-0 text-content"
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
