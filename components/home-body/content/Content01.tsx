import { LinkPreview } from "@/components/aceternity-ui/link-preview";
import dayjs from "dayjs";
import React from "react";
import ContentSection from "../ContentSection";

const Content01: React.FC = () => {
  return (
    <div>
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
              <p>
                React, Typescript, Tailwind, Graphql, Framer Motion, Hotjar.
              </p>
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
            content: <p>Розробка Лендінгів на Wordpress.</p>,
          },
          {
            title: (
              <>
                Graphic Designer at{" "}
                <LinkPreview href="https://it-artel.ua/">iT Artel</LinkPreview>
              </>
            ),
            dates: [dayjs("Apr 2021"), dayjs("May 2021")],
            content: <p>Сайти та презентації.</p>,
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
                Відкриття коворкінгу під час зимових відключень 2022-го року.
              </p>
            ),
          },
          {
            title: "Волонтерство",
            dates: [dayjs("Mar 2022")],
            content: (
              <p>Убер для волонтерів і ВПО в комендантську годину у Львові.</p>
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
          },
          {
            title: (
              <LinkPreview href="https://prjctr.com/certificate/01H7Z72TNCJ9E5R1ZTARNC37ZS">
                Product Design at Projector
              </LinkPreview>
            ),
            dates: [dayjs("Jun 2023"), dayjs("Oct 2023")],
          },
          {
            title: (
              <LinkPreview href="https://promprylad.ua/en/berkeley-summer-at-promprylad/">
                Berkeley Summer
              </LinkPreview>
            ),
            dates: [dayjs("Jul 2023"), dayjs("Sep 2023")],
          },
          {
            title: (
              <LinkPreview href="https://v1.scrimba.com/certificate/ubRLwvfa/greact">
                Advanced React
              </LinkPreview>
            ),
            dates: [dayjs("Jul 2020")],
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
              <div>
                <LinkPreview href="https://dev.to/seva/leading-a-ui-design-team-as-a-developer-26ld">
                  «Leading a UI design team as a developer»
                </LinkPreview>
              </div>
            ),
          },
          {
            title: <>Telegraph</>,
            dates: [dayjs("Oct 2022")],
            content: (
              <div>
                <LinkPreview href="https://telegraf.design/designer-keruye-rozrobnykamy/">
                  «Коли розробник керує дизайнерами.
                  <br /> Як налагодити взаємодію в команді»
                </LinkPreview>
              </div>
            ),
          },
          {
            title: <>DOU</>,
            dates: [dayjs("June 2022")],
            content: (
              <div>
                <LinkPreview href="https://dou.ua/forums/topic/38459/">
                  «Розповідаю про перший досвід розвитку волонтерського продукту
                  під час війни»
                </LinkPreview>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Content01;
