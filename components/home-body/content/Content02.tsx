import { LinkPreview } from "@/components/aceternity-ui/link-preview";
import dayjs from "dayjs";
import React from "react";
import ContentSection from "../ContentSection";
const Content02: React.FC = () => {
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
              <>
                <p>
                  Коли почались зимові відключення 2022-го року, я і ще троє
                  однодумців відкрили коворкінг. Ми орендували 44 місця, з яких
                  одна компанія взяла 25 для своїх співробітників. Влітку 2022
                  закрилися через низьку рентабельність.
                </p>
                <p>
                  Після цього я пройшов курси з продуктового дизайну і
                  маркетингу, а також асинхронну стартап-школу від YC.
                </p>
              </>
            ),
          },
          {
            title: "Волонтерство",
            dates: [dayjs("Mar 2022")],
            content: (
              <>
                <p>
                  В березні 2022 я був у Львові під час комендантської години,
                  коли багато людей ночували на залізничному вокзалі після
                  довгих поїздок. Ми створили телеграм-бота для зв`язку
                  водіїв-волонтерів і пасажирів. Я відповідав за координацію
                  водіїв і допомогу користувачам.
                </p>
                <p>
                  В результаті близько 1,500 людей були розвезені до місця
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
                На цьому курсі я закрив теоретичні прогалини у своєму досвіді
                продуктового дизайну.
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
              <p>
                Після управління коворкінгом, я долучився до програми Berkeley
                Summer. Експерти з Кремнієвої долини допомогли мені вдосконалити
                навички у прототипуванні продуктів, бізнес-аналізі та
                презентуванні ідей.
              </p>
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
    </div>
  );
};

export default Content02;
