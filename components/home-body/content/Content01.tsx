import { LinkPreview } from "@/components/aceternity-ui/link-preview";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import React from "react";
import ContentSection from "../ContentSection";

const Content01: React.FC = () => {
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
                <li>
                  Дизайн і розробка лендігу на Webflow -{" "}
                  <LinkPreview
                    href="https://www.siteform.io/"
                    className="font-medium underline text-primary underline-offset-4"
                  >
                    https://www.siteform.io/
                  </LinkPreview>
                </li>
                <li>
                  Дизайн інтерфейсу і розробка веб-застосунку (React,
                  Typescript, Tailwind, Graphql, Framer Motion)
                </li>
                <li>Аналіз поведінки юзерів через Hotjar</li>
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
                <p>
                  З командою розробників, створювали корпоративні сайти на
                  Wordpress для замовників агенції.
                </p>
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
                <p>
                  Дизайн корпоративного сайту компанії і проектів замовників.
                </p>
              </>
            ),
          },
        ]}
      />
      {/* Add other ContentSections as needed */}
    </motion.div>
  );
};

export default Content01;
