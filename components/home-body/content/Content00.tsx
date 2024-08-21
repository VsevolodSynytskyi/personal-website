import { LinkPreview } from "@/components/aceternity-ui/link-preview";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import React from "react";
import ContentSection from "../ContentSection";

const Content00: React.FC = () => {
  return (
    <motion.div
      className="text-content"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <ContentSection
        title="Кар’єра"
        contentBlocks={[
          {
            title: (
              <>
                Product Designer & Frontend Developer at{" "}
                <LinkPreview href="https://www.siteform.io/">
                  SiteForm
                </LinkPreview>
              </>
            ),
            dates: [dayjs("Jan 2022"), dayjs("Mar 2024")],
            content: (
              <>
                <p>
                  React, Typescript, Tailwind, Graphql, Framer Motion, Hotjar
                </p>
              </>
            ),
          },
          {
            title: (
              <>
                Frontend Developer at{" "}
                <LinkPreview href="https://www.ryze-digital.de/">
                  Ryze Digital
                </LinkPreview>
              </>
            ),
            dates: [dayjs("Jul 2021"), dayjs("Dec 2022")],
            content: (
              <>
                <p>Розробка Лендінгів на Wordpress</p>
              </>
            ),
          },
          {
            title: (
              <>
                Graphic Designer at{" "}
                <LinkPreview href="https://it-artel.ua/">iT Artel</LinkPreview>
              </>
            ),
            dates: [dayjs("Apr 2021"), dayjs("May 2021")],
            content: (
              <>
                <p>Сайти і презентації.</p>
              </>
            ),
          },
        ]}
      />
      {/* Add other ContentSections as needed */}
    </motion.div>
  );
};

export default Content00;
