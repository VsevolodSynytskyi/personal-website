import { LinkPreview } from "@/components/aceternity-ui/link-preview";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import React from "react";
import ContentSection from "../ContentSection";

const Content02: React.FC = () => {
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
                  Я займався продуктовим дизайном і фронтенд-розробкою
                  веб-застосунку для будівельного сервісу в США. Працював над
                  дизайном і розробкою лендігу на Webflow.
                </p>
                <ul>
                  <li>
                    Дизайн і розробка лендігу на Webflow -{" "}
                    <LinkPreview
                      href="https://www.siteform.io/"
                      className="font-medium underline text-primary underline-offset-4"
                    >
                      https://www.siteform.io/
                    </LinkPreview>
                  </li>
                </ul>
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
                  З командою розробників, створювали корпоративні сайти для
                  замовників агенції. Комунікував з іноземними дизайнерами і
                  менеджерами.
                </p>
                <ul>
                  <li>Розробка Лендінгів на Wordpress</li>
                </ul>
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
                <ul>
                  <li>Дизайн корпоративного сайту компанії</li>
                  <li>UI-дизайн проектів замовників</li>
                  <li>Презентація проектів</li>
                </ul>
              </>
            ),
          },
        ]}
      />
      {/* Add other ContentSections as needed */}
    </motion.div>
  );
};

export default Content02;
