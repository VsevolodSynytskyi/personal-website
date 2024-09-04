import { ContentMatrix } from "@/lib/customTypes";
import { Locale, locales } from "@/lib/i18n/locales";
import useContentTypeParam from "@/lib/useContentTypeParam";
import useReadTimeParam from "@/lib/useReadTimeParam";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import Content00en from "./content/00/Content00en";
import Content00uk from "./content/00/Content00uk";

import Content01en from "./content/01/Content01en";
import Content01uk from "./content/01/Content01uk";

import Content02en from "./content/02/Content02en";
import Content02uk from "./content/02/Content02uk";

import Content03en from "./content/03/Content03en";
import Content03uk from "./content/03/Content03uk";

import Content10en from "./content/10/Content10en";
import Content10uk from "./content/10/Content10uk";

import Content11en from "./content/11/Content11en";
import Content11uk from "./content/11/Content11uk";

import Content12en from "./content/12/Content12en";
import Content12uk from "./content/12/Content12uk";

import Content13en from "./content/13/Content13en";
import Content13uk from "./content/13/Content13uk";

import Content20en from "./content/20/Content20en";
import Content20uk from "./content/20/Content20uk";

import Content21en from "./content/21/Content21en";
import Content21uk from "./content/21/Content21uk";

import Content22en from "./content/22/Content22en";
import Content22uk from "./content/22/Content22uk";

import Content23en from "./content/23/Content23en";
import Content23uk from "./content/23/Content23uk";

import Content30en from "./content/30/Content30en";
import Content30uk from "./content/30/Content30uk";

import Content31en from "./content/31/Content31en";
import Content31uk from "./content/31/Content31uk";

import Content32en from "./content/32/Content32en";
import Content32uk from "./content/32/Content32uk";

import Content33en from "./content/33/Content33en";
import Content33uk from "./content/33/Content33uk";

import CvButtonSection from "./CvButtonSection";

const contentMatrix: ContentMatrix = [
  [
    { en: <Content00en key={"00"} />, uk: <Content00uk key={"00"} /> },
    { en: <Content01en key={"01"} />, uk: <Content01uk key={"01"} /> },
    { en: <Content02en key={"02"} />, uk: <Content02uk key={"02"} /> },
    { en: <Content03en key={"03"} />, uk: <Content03uk key={"03"} /> },
  ],
  [
    { en: <Content10en key={"10"} />, uk: <Content10uk key={"10"} /> },
    { en: <Content11en key={"11"} />, uk: <Content11uk key={"11"} /> },
    { en: <Content12en key={"12"} />, uk: <Content12uk key={"12"} /> },
    { en: <Content13en key={"13"} />, uk: <Content13uk key={"13"} /> },
  ],
  [
    { en: <Content20en key={"20"} />, uk: <Content20uk key={"20"} /> },
    { en: <Content21en key={"21"} />, uk: <Content21uk key={"21"} /> },
    { en: <Content22en key={"22"} />, uk: <Content22uk key={"22"} /> },
    { en: <Content23en key={"23"} />, uk: <Content23uk key={"23"} /> },
  ],
  [
    { en: <Content30en key={"30"} />, uk: <Content30uk key={"30"} /> },
    { en: <Content31en key={"31"} />, uk: <Content31uk key={"31"} /> },
    { en: <Content32en key={"32"} />, uk: <Content32uk key={"32"} /> },
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
