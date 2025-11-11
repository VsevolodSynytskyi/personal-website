"use client";

import { ContentMatrix, ContentParamValues } from "@/lib/customTypes";
import { isValidLocale } from "@/lib/i18n/locales";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";

import Professional1Uk from "@/components/home-body/content/professional/1/Professional1Uk.mdx";
import Professional1En from "@/components/home-body/content/professional/1/Professional1En.mdx";

import Professional2Uk from "@/components/home-body/content/professional/2/Professional2Uk.mdx";
import Professional2En from "@/components/home-body/content/professional/2/Professional2En.mdx";

import Professional3Uk from "@/components/home-body/content/professional/3/Professional3Uk.mdx";
import Professional3En from "@/components/home-body/content/professional/3/Professional3En.mdx";

import Professional4Uk from "@/components/home-body/content/professional/4/Professional4Uk.mdx";
import Professional4En from "@/components/home-body/content/professional/4/Professional4En.mdx";

import MoreProfessional1Uk from "./content/more-professional/1/MoreProfessional1Uk.mdx";
import MoreProfessional1En from "./content/more-professional/1/MoreProfessional1En.mdx";

import MoreProfessional2Uk from "./content/more-professional/2/MoreProfessional2Uk.mdx";
import MoreProfessional2En from "./content/more-professional/2/MoreProfessional2En.mdx";

import MoreProfessional3Uk from "./content/more-professional/3/MoreProfessional3Uk.mdx";
import MoreProfessional3En from "./content/more-professional/3/MoreProfessional3En.mdx";

import MoreProfessional4Uk from "./content/more-professional/4/MoreProfessional4Uk.mdx";
import MoreProfessional4En from "./content/more-professional/4/MoreProfessional4En.mdx";

import MorePersonal1Uk from "./content/more-personal/1/MorePersonal1Uk.mdx";
import MorePersonal1En from "./content/more-personal/1/MorePersonal1En.mdx";

import MorePersonal2Uk from "./content/more-personal/2/MorePersonal2Uk.mdx";
import MorePersonal2En from "./content/more-personal/2/MorePersonal2En.mdx";

import MorePersonal3Uk from "./content/more-personal/3/MorePersonal3Uk.mdx";
import MorePersonal3En from "./content/more-personal/3/MorePersonal3En.mdx";

import MorePersonal4Uk from "./content/more-personal/4/MorePersonal4Uk.mdx";
import MorePersonal4En from "./content/more-personal/4/MorePersonal4En.mdx";

import Personal1Uk from "./content/personal/1/Personal1Uk.mdx";
import Personal1En from "./content/personal/1/Personal1En.mdx";

import Personal2Uk from "./content/personal/2/Personal2Uk.mdx";
import Personal2En from "./content/personal/2/Personal2En.mdx";

import Personal3Uk from "./content/personal/3/Personal3Uk.mdx";
import Personal3En from "./content/personal/3/Personal3En.mdx";

import Personal4Uk from "./content/personal/4/Personal4Uk.mdx";
import Personal4En from "./content/personal/4/Personal4En.mdx";

const contentMatrix: ContentMatrix = [
  [
    { en: <Professional1En key={"00"} />, uk: <Professional1Uk key={"00"} /> },
    { en: <Professional2En key={"01"} />, uk: <Professional2Uk key={"01"} /> },
    { en: <Professional3En key={"02"} />, uk: <Professional3Uk key={"02"} /> },
    { en: <Professional4En key={"03"} />, uk: <Professional4Uk key={"03"} /> },
  ],
  [
    {
      en: <MoreProfessional1En key={"10"} />,
      uk: <MoreProfessional1Uk key={"10"} />,
    },
    {
      en: <MoreProfessional2En key={"11"} />,
      uk: <MoreProfessional2Uk key={"11"} />,
    },
    {
      en: <MoreProfessional3En key={"12"} />,
      uk: <MoreProfessional3Uk key={"12"} />,
    },
    {
      en: <MoreProfessional4En key={"13"} />,
      uk: <MoreProfessional4Uk key={"13"} />,
    },
  ],
  [
    { en: <MorePersonal1En key={"20"} />, uk: <MorePersonal1Uk key={"20"} /> },
    { en: <MorePersonal2En key={"21"} />, uk: <MorePersonal2Uk key={"21"} /> },
    { en: <MorePersonal3En key={"22"} />, uk: <MorePersonal3Uk key={"22"} /> },
    { en: <MorePersonal4En key={"23"} />, uk: <MorePersonal4Uk key={"23"} /> },
  ],
  [
    { en: <Personal1En key={"30"} />, uk: <Personal1Uk key={"30"} /> },
    { en: <Personal2En key={"31"} />, uk: <Personal2Uk key={"31"} /> },
    { en: <Personal3En key={"32"} />, uk: <Personal3Uk key={"32"} /> },
    { en: <Personal4En key={"33"} />, uk: <Personal4Uk key={"33"} /> },
  ],
];

interface ContentPageBodyProps extends ContentParamValues {}

const ContentPageBody: React.FC<ContentPageBodyProps> = ({
  contentType,
  readTime,
}) => {
  const locale = useLocale();
  let content = null;
  if (isValidLocale(locale)) {
    content = contentMatrix[contentType][readTime][locale];
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AnimatePresence>
        <motion.div
          className="top-0 left-0 text-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: "absolute" }}
          key={`${contentType}${readTime}`}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ContentPageBody;
