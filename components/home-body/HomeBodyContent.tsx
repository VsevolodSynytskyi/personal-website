import dayjs from "dayjs";
import { LinkPreview } from "../ui/link-preview";
import ContentSection from "./ContentSection";

const HomeBodyContent: React.FC = () => {
  return (
    <div className="text-content">
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
            children: (
              <>
                <p>
                  SiteForm — це сервіс для управління будівельними проектами для
                  американських забудовників. Команда маленька, і часто кожен
                  відповідав за все. Найбільше я займався продуктовим дизайном і
                  фронтенд-розробкою веб-застосунку.
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
                  <li>
                    Дизайн інтерфейсу і розробка веб-застосунку (React,
                    Typescript, Tailwind, Graphql, Framer Motion)
                  </li>
                  <li>Аналіз поведінки юзерів через Hotjar</li>
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
            children: (
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
            children: (
              <>
                <p>
                  Дизайн корпоративного сайту компанії і проектів замовників.
                </p>
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
            children: (
              <>
                <p>
                  Коли почались зимові відключення 2022-го року, я і ще троє
                  однодумців відкрили коворкінг. Це була авантюра недосвідчених
                  непідприємців, досвід якої ціную більше, ніж втрачені кошти. В
                  піковий час у нас було 44 заброньованих місця. Одна айті
                  компанія орендувала одразу 25 місць для своїх співробітників.
                  Влітку 2022 ми закрились через низьку рентабельність.
                </p>
                <p>
                  Пізніше, рефлексуючи над цим досвідом, я пройшов курси
                  Прожектора з продуктового дизайну і маркетингу, і асинхронну
                  стартап-школу від YC.
                </p>
                <ul>
                  <li>Операційна діяльність коворкінгу</li>
                  <li>
                    <LinkPreview href="https://inflow-coworking-website-hhde-vsevolod111s-projects.vercel.app/">
                      Розробка сайту
                    </LinkPreview>
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Волонтерство",
            dates: [dayjs("Mar 2022")],
            children: (
              <>
                <p>
                  В березні 2022 я опинився у Львові. Багато ВПО прибувало на
                  Львівський залізничний вокзал у комендантську годину. Люди, що
                  їхали потягом 20 годин, мусили ночувати на вокзалі. Щоб
                  вирішити цю проблему, ми створили телеграм-бота, який
                  зв'язував водіїв-волонтерів і потенційних пасажирів. Я
                  займався координацією водіїв: отримував дозволи на їзду в
                  комендантську годину, допомагав юзерам з вирішенням нетипових
                  проблем, поширював бота серед волонтерів. Волонтери зустрічали
                  людей з потягу і допомагали їм викликати водія.
                </p>
                <p>
                  Завдяки нашій ініціативі близько 1,500 людей було розвезено до
                  місця ночівлі.
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
            children: (
              <p>
                Працюючи на стартапі, мені часто доводилось брати на себе
                додаткові обов`язки, наприклад маркетингові. Тоді я і вирішив
                поглибити свої знання в цій сфері.
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
            children: (
              <p>
                На цьому курсі я закрив теоретичні прогалини в своєму досвіді
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
            children: (
              <p>
                Після досвіду управління коворкінгу, я долучився до програми
                Berkeley Summer at Promprylad. Експерти із Кремнієвої долини
                допомогли мені покращити навички у прототипуванні продуктів,
                бізнес-аналізі та презентуванні ідей.
              </p>
            ),
          },
          {
            title: (
              <LinkPreview href="https://v1.scrimba.com/certificate/ubRLwvfa/greact">
                Advanced React
              </LinkPreview>
            ),
            children: <p>Поглиблений курс для розробки на React JS.</p>,
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
            children: (
              <p>
                <LinkPreview href="https://dev.to/seva/leading-a-ui-design-team-as-a-developer-26ld">
                  "Leading a UI design team as a developer"
                </LinkPreview>
              </p>
            ),
          },
          {
            title: <>Telegraph</>,
            dates: [dayjs("Oct 2022")],
            children: (
              <p>
                <LinkPreview href="https://telegraf.design/designer-keruye-rozrobnykamy/">
                  Коли розробник керує дизайнерами.
                  <br /> Як налагодити взаємодію в команді
                </LinkPreview>
              </p>
            ),
          },
          {
            title: <>DOU</>,
            dates: [dayjs("June 2022")],
            children: (
              <p>
                <LinkPreview href="https://dou.ua/forums/topic/38459/">
                  Розповідаю про перший досвід розвитку волонтерського продукту
                  під час війни
                </LinkPreview>
              </p>
            ),
          },
        ]}
      />
    </div>
  );
};

export default HomeBodyContent;
