import { LinkPreview } from "@/components/aceternity-ui/link-preview";
import dayjs from "dayjs";
import React from "react";
import ContentSection from "../ContentSection";

const Content10: React.FC = () => {
  return (
    <div>
      <ContentSection
        contentBlocks={[
          {
            content: (
              <p>
                Я виріс у Києві, але поїхав звідти у 2021. З тих пір пожив в
                Одесі, Львові, Івано-Франківську і в Карпатах.
              </p>
            ),
          },
          {
            content: <p>Наразі мешкаю у Львові.</p>,
          },
          {
            content: <p>Я займаюсь бігом, ходжу в гори і маю собаку.</p>,
          },
        ]}
      />
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
            content: <p>Сайти і презентації.</p>,
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
    </div>
  );
};

export default Content10;
