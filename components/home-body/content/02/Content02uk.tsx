import CustomLink from "@/components/CustomLink";
import React from "react";
import ContentSection from "../../ContentSection";
const Content02uk: React.FC = () => {
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
            dates: ["01 2022", "03 2024"],
            content: (
              <>
                <ul>
                  <li>
                    UX/UI дизайн та розробка веб-додатку (React JS, Typescript,
                    TailwindCSS, GraphQL).
                  </li>
                  <li>Прискорив онбоардінг з 2 годин до 20 хвилин.</li>
                  <li>
                    Зробив редизайн лендінга на Webflow, що втричі збільшило
                    кількість щомісячних лідів.
                  </li>
                  <li>
                    Досліджував цільових користувачів, підтримував VPC та User
                    Flow.
                  </li>
                  <li>
                    Керував прототипуванням, розробкою та оптимізацією фіч.
                  </li>
                  <li>
                    Впровадив трекінг проблем користувачів за допомогою Hotjar,
                    Sentry + Slack.
                  </li>
                </ul>
              </>
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
            dates: ["07 2021", "12 2021"],
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
                <CustomLink withPreview href="https://it-artel.ua/">
                  iT Artel
                </CustomLink>
              </>
            ),
            dates: ["04 2021", "05 2021"],
            content: (
              <p>
                Дизайн корпоративного сайту компанії та проектів замовників.
              </p>
            ),
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
            dates: ["01 2023", "08 2023"],
            content: (
              <p>
                Підприємницький досвід відкриття коворкінгу під час зимових
                відключень 2022-го року.
              </p>
            ),
          },
          {
            title: "Волонтерство",
            dates: ["03 2022"],
            content: (
              <>
                <p>
                  Після вторгнення 2022 багато людей прибувало на Львівський
                  вокзал у комендантську годину, тому ми створили телеграм-бот
                  для координації водіїв і пасажирів. Я займався координацією
                  водіїв та допомагав юзерам.
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
              <CustomLink
                withPreview
                href="https://prjctr.com/certificate/01HGTS85E8SQGM65KTR6TA0RBB"
              >
                Product Marketing at Projector
              </CustomLink>
            ),
            dates: ["12 2023", "03 2024"],
            content: (
              <p>
                Працюючи на стартапі, я брав на себе маркетингові обов`язки і
                вирішив поглибити свої знання в цій сфері.
              </p>
            ),
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
            dates: ["06 2023", "10 2023"],
            content: (
              <p>
                На курсі я усунув теоретичні прогалини в продуктовому дизайні.
              </p>
            ),
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
            dates: ["07 2023", "09 2023"],
            content: (
              <p>Практикував навички прототипування і бізнес-аналізу.</p>
            ),
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
            dates: ["07 2020"],
            content: <p>Поглиблений курс для розробки на React JS.</p>,
          },
        ]}
      />
      <ContentSection
        title="Статті"
        contentBlocks={[
          {
            title: <>DEV.TO</>,
            dates: ["10 2022"],
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
            dates: ["10 2022"],
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
            dates: ["06 2022"],
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

export default Content02uk;
