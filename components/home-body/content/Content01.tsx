import CustomLink from "@/components/CustomLink";
import React from "react";
import dayjsExtended, { defaultDayjsFormat } from "../../../lib/dayjsExtended";
import ContentSection from "../ContentSection";

const Content01: React.FC = () => {
  return (
    <>
      <ContentSection
        title="Кар’єра"
        contentBlocks={[
          {
            title: (
              <>
                Product Designer & Frontend Developer at{" "}
                <CustomLink withPreview href="https://www.siteform.io/">
                  SiteForm
                </CustomLink>
              </>
            ),
            dates: [
              dayjsExtended("01 2022", defaultDayjsFormat),
              dayjsExtended("03 2024", defaultDayjsFormat),
            ],
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
                <CustomLink withPreview href="https://www.ryze-digital.de/">
                  Ryze Digital
                </CustomLink>
              </>
            ),
            dates: [
              dayjsExtended("07 2021", defaultDayjsFormat),
              dayjsExtended("12 2021", defaultDayjsFormat),
            ],
            content: <p>Розробка Лендінгів на Wordpress.</p>,
          },
          {
            title: (
              <>
                Graphic Designer at{" "}
                <CustomLink withPreview href="https://it-artel.ua/">
                  iT Artel
                </CustomLink>
              </>
            ),
            dates: [
              dayjsExtended("04 2021", defaultDayjsFormat),
              dayjsExtended("05 2021", defaultDayjsFormat),
            ],
            content: <p>Сайти та презентації.</p>,
          },
        ]}
      />
      <ContentSection
        title="Власні ініціативи"
        contentBlocks={[
          {
            title: (
              <CustomLink
                withPreview
                href="https://www.instagram.com/inflow.coworking/"
              >
                Коворкінг
              </CustomLink>
            ),
            dates: [
              dayjsExtended("01 2023", defaultDayjsFormat),
              dayjsExtended("08 2023", defaultDayjsFormat),
            ],
            content: (
              <p>
                Відкриття коворкінгу під час зимових відключень 2022-го року.
              </p>
            ),
          },
          {
            title: "Волонтерство",
            dates: [dayjsExtended("03 2022", defaultDayjsFormat)],
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
              <CustomLink
                withPreview
                href="https://prjctr.com/certificate/01HGTS85E8SQGM65KTR6TA0RBB"
              >
                Product Marketing at Projector
              </CustomLink>
            ),
            dates: [
              dayjsExtended("12 2023", defaultDayjsFormat),
              dayjsExtended("03 2024", defaultDayjsFormat),
            ],
          },
          {
            title: (
              <CustomLink
                withPreview
                href="https://prjctr.com/certificate/01H7Z72TNCJ9E5R1ZTARNC37ZS"
              >
                Product Design at Projector
              </CustomLink>
            ),
            dates: [
              dayjsExtended("06 2023", defaultDayjsFormat),
              dayjsExtended("10 2023", defaultDayjsFormat),
            ],
          },
          {
            title: (
              <CustomLink
                withPreview
                href="https://promprylad.ua/en/berkeley-summer-at-promprylad/"
              >
                Berkeley Summer
              </CustomLink>
            ),
            dates: [
              dayjsExtended("07 2023", defaultDayjsFormat),
              dayjsExtended("09 2023", defaultDayjsFormat),
            ],
          },
          {
            title: (
              <CustomLink
                withPreview
                href="https://v1.scrimba.com/certificate/ubRLwvfa/greact"
              >
                Advanced React
              </CustomLink>
            ),
            dates: [dayjsExtended("07 2020", defaultDayjsFormat)],
          },
        ]}
      />
      <ContentSection
        title="Статті"
        contentBlocks={[
          {
            title: <>DEV.TO</>,
            dates: [dayjsExtended("10 2022", defaultDayjsFormat)],
            content: (
              <div>
                <CustomLink
                  withPreview
                  href="https://dev.to/seva/leading-a-ui-design-team-as-a-developer-26ld"
                >
                  «Leading a UI design team as a developer»
                </CustomLink>
              </div>
            ),
          },
          {
            title: <>Telegraph</>,
            dates: [dayjsExtended("10 2022", defaultDayjsFormat)],
            content: (
              <div>
                <CustomLink
                  withPreview
                  href="https://telegraf.design/designer-keruye-rozrobnykamy/"
                >
                  «Коли розробник керує дизайнерами.
                  <br /> Як налагодити взаємодію в команді»
                </CustomLink>
              </div>
            ),
          },
          {
            title: <>DOU</>,
            dates: [dayjsExtended("06 2022", defaultDayjsFormat)],
            content: (
              <div>
                <CustomLink
                  withPreview
                  href="https://dou.ua/forums/topic/38459/"
                >
                  «Розповідаю про перший досвід розвитку волонтерського продукту
                  під час війни»
                </CustomLink>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content01;
