import CustomLink from "@/components/CustomLink";
import dayjs from "dayjs";
import ContentSection from "../ContentSection";

const Content13: React.FC = () => {
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
                    <CustomLink
                      withPreview
                      href="https://www.siteform.io/"
                      className="font-medium underline text-primary underline-offset-4"
                    >
                      https://www.siteform.io/
                    </CustomLink>
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
                <CustomLink withPreview href="https://it-artel.ua/">
                  iT Artel
                </CustomLink>
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
              <CustomLink
                withPreview
                href="https://www.instagram.com/inflow.coworking/"
              >
                Коворкінг
              </CustomLink>
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
                  Після вторгнення 2022 багато людей прибувало на Львівський
                  вокзал у комендантську годину, тому ми створили телеграм-бот
                  для координації водіїв і пасажирів. Я займався координацією
                  водіїв та допомагав юзерам.
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
        title="Хобі"
        contentBlocks={[
          {
            title: "Походи",

            content: (
              <>
                <p>
                  За час проживання в Карпатах, походи стали для мене буденною
                  справою. Я міг будь-якої миті вирушити у гори, без особливих
                  планів чи підготовки.
                </p>
                <p>
                  Спочатку думав, що після Карпат довго не захочу повертатись у
                  гори — так вони мені набриднуть. Але я помилився. Здається, що
                  походів у моєму житті ставатиме дедалі більше.
                </p>
              </>
            ),
          },
          {
            title: "Біг",
            content: (
              <>
                <p>
                  Біг став важливою частиною мого життя. Не так я кайфую від
                  бігу, як від спільноти навколо нього.{" "}
                </p>
                <div>
                  <blockquote className="">Біг - хуйня, бігуни - ні</blockquote>
                  — Бігова спільнота{" "}
                  <CustomLink
                    withPreview
                    href="https://www.instagram.com/chumaky.way/"
                  >
                    chumaky
                  </CustomLink>
                  .
                </div>
                <p>Сподіваюсь, що колись тут буде абзац про тріатлон.</p>
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
              <CustomLink
                withPreview
                href="https://prjctr.com/certificate/01H7Z72TNCJ9E5R1ZTARNC37ZS"
              >
                Product Design at Projector
              </CustomLink>
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
              <CustomLink
                withPreview
                href="https://promprylad.ua/en/berkeley-summer-at-promprylad/"
              >
                Berkeley Summer
              </CustomLink>
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
              <CustomLink
                withPreview
                href="https://v1.scrimba.com/certificate/ubRLwvfa/greact"
              >
                Advanced React
              </CustomLink>
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
            dates: [dayjs("Oct 2022")],
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
            dates: [dayjs("June 2022")],
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

export default Content13;
