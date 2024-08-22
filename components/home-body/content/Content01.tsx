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
              <p>
                З командою розробників, створювали корпоративні сайти на
                Wordpress для замовників агенції.
              </p>
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
              <p>Дизайн корпоративного сайту компанії і проектів замовників.</p>
            ),
          },
        ]}
      />
      <ContentSection
        title="Власні ініціативи"
        contentBlocks={[
          {
            title: (
              <LinkPreview href="https://www.instagram.com/inflow.coworking/">
                Коворкінг
              </LinkPreview>
            ),
            dates: [dayjs("Jan 2023"), dayjs("Aug 2023")],
            content: (
              <p>
                Підприємницький досвід відкриття коворкінгу під час зимових
                відключень 2022-го року.
              </p>
            ),
          },
          {
            title: "Волонтерство",
            dates: [dayjs("Mar 2022")],
            content: (
              <>
                <p>
                  В березні 2022, коли багато людей прибувало на Львівський
                  вокзал у комендантську годину, ми створили телеграм-бота для
                  координації водіїв і пасажирів. Я займався координацією водіїв
                  та допомагав юзерам.
                </p>
                <p>
                  Завдяки ініціативі близько 1,500 людей було розвезено до місця
                  ночівлі.
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Навчання"
        contentBlocks={[
          {
            title: (
              <LinkPreview href="https://prjctr.com/certificate/01HGTS85E8SQGM65KTR6TA0RBB">
                Product Marketing at Projector
              </LinkPreview>
            ),
            dates: [dayjs("Dec 2023"), dayjs("Mar 2024")],
            content: (
              <p>
                Працюючи на стартапі, я брав на себе маркетингові обов`язки і
                вирішив поглибити свої знання в цій сфері.
              </p>
            ),
          },
          {
            title: (
              <LinkPreview href="https://prjctr.com/certificate/01H7Z72TNCJ9E5R1ZTARNC37ZS">
                Product Design at Projector
              </LinkPreview>
            ),
            dates: [dayjs("Jun 2023"), dayjs("Oct 2023")],
            content: (
              <p>
                На курсі я усунув теоретичні прогалини в продуктовому дизайні.
              </p>
            ),
          },
          {
            title: (
              <LinkPreview href="https://promprylad.ua/en/berkeley-summer-at-promprylad/">
                Berkeley Summer
              </LinkPreview>
            ),
            dates: [dayjs("Jul 2023"), dayjs("Sep 2023")],
            content: (
              <p>Практикував навички прототипування і бізнес-аналізу.</p>
            ),
          },
          {
            title: (
              <LinkPreview href="https://v1.scrimba.com/certificate/ubRLwvfa/greact">
                Advanced React
              </LinkPreview>
            ),
            dates: [dayjs("Jul 2020")],
            content: <p>Поглиблений курс для розробки на React JS.</p>,
          },
        ]}
      />
      <ContentSection
        title="Статті"
        contentBlocks={[
          {
            title: <>DEV.TO</>,
            dates: [dayjs("Oct 2022")],
            content: (
              <p>
                <LinkPreview href="https://dev.to/seva/leading-a-ui-design-team-as-a-developer-26ld">
                  «Leading a UI design team as a developer»
                </LinkPreview>
              </p>
            ),
          },
          {
            title: <>Telegraph</>,
            dates: [dayjs("Oct 2022")],
            content: (
              <p>
                <LinkPreview href="https://telegraf.design/designer-keruye-rozrobnykamy/">
                  «Коли розробник керує дизайнерами.
                  <br /> Як налагодити взаємодію в команді»
                </LinkPreview>
              </p>
            ),
          },
          {
            title: <>DOU</>,
            dates: [dayjs("June 2022")],
            content: (
              <p>
                <LinkPreview href="https://dou.ua/forums/topic/38459/">
                  «Розповідаю про перший досвід розвитку волонтерського продукту
                  під час війни»
                </LinkPreview>
              </p>
            ),
          },
        ]}
      />
    </motion.div>
  );
};

export default Content01;
