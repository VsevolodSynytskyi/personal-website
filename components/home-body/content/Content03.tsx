import { LinkPreview } from "@/components/aceternity-ui/link-preview";
import dayjs from "dayjs";
import ContentSection from "../ContentSection";

const Content03: React.FC = () => {
  return (
    <>
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
                  веб-застосунку для будівельного сервісу в США. Основні
                  обов`язки включали дизайн інтерфейсу і розробку застосунку, а
                  також створення лендігу на Webflow.
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
            dates: [dayjs("Jul 2021"), dayjs("Dec 2021")],
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
                  однодумців відкрили коворкінг. Це була авантюра недосвідчених
                  непідприємців, досвід якої ціную більше, ніж втрачені кошти. В
                  піковий час у нас було 44 заброньованих місця, з яких одна
                  айті компанія орендувала одразу 25 місць для своїх
                  співробітників. Влітку 2022 ми закрились через низьку
                  рентабельність.
                </p>
                <p>
                  Пізніше, рефлексуючи над цим досвідом, я пройшов курси
                  Прожектора з продуктового дизайну і маркетингу, а також
                  асинхронну стартап-школу від YC.
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
            content: (
              <>
                <p>
                  Після вторгнення 2022 багато людей прибувало на Львівський
                  вокзал у комендантську годину, тому ми створили телеграм-бот
                  для координації водіїв і пасажирів. Я займався координацією
                  водіїв: отримував дозволи на їзду в комендантську годину,
                  допомагав користувачам з вирішенням нетипових проблем, а також
                  поширював бота серед волонтерів. Волонтери зустрічали людей з
                  потягу і допомагали їм викликати водія.
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
        title="Професійні Цінності"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  Я насолоджуюсь роботою в команді, люблю гаражно-стартапську
                  атмосферу. Мені важливо бачити, як люди користуються
                  продуктом, над яким я працюю. Моя робота — плацдарм для
                  творчості, а творчість не має сенсу без споглядача.{" "}
                </p>
                <p>
                  Мені потрібен інтелектуальний виклик. Якщо я не відчуваю
                  розвитку, я поступово вигораю.
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
                Працюючи на стартапі, я часто брав на себе додаткові обов`язки,
                включаючи маркетинг. Це спонукало мене поглибити свої знання в
                цій сфері.
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
    </>
  );
};

export default Content03;
