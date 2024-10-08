import CustomLink from "@/components/CustomLink";
import ContentSection from "../../ContentSection";

const Content03uk: React.FC = () => {
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
                <p>
                  Я займався продуктовим дизайном і фронтенд-розробкою
                  веб-застосунку для будівельного сервісу в США. Основні
                  обов`язки включали дизайн інтерфейсу і розробку застосунку, а
                  також створення лендігу на Webflow.
                </p>

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
            dates: ["04 2021", "06 2021"],
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
            dates: ["01 2023", "08 2023"],
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
                  Пізніше, рефлексуючи над цим досвідом, я пройшов курси{" "}
                  <CustomLink href={`https://prjctr.com/`}>
                    Прожектора
                  </CustomLink>{" "}
                  з продуктового дизайну і маркетингу, а також асинхронну
                  стартап-школу від YC.
                </p>
                <ul>
                  <li>Операційна діяльність коворкінгу</li>
                  <li>
                    <CustomLink
                      withPreview
                      href="https://inflow-coworking-website-hhde-vsevolod111s-projects.vercel.app/"
                    >
                      Розробка сайту
                    </CustomLink>
                  </li>
                </ul>
              </>
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
              <CustomLink
                withPreview
                href="https://prjctr.com/certificate/01HGTS85E8SQGM65KTR6TA0RBB"
              >
                Product Marketing at Projector
              </CustomLink>
            ),
            dates: ["12 2023", "03 2024"],
            content: (
              <>
                <p>
                  Працюючи на стартапі, я часто брав на себе додаткові
                  обов`язки, включаючи маркетинг. Це спонукало мене поглибити
                  свої знання в цій сфері.
                </p>
                <p>
                  Я навчився розробляти Go-to-Market стратегії і запускати
                  продукти на нові ринки.
                </p>
              </>
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
            dates: ["07 2023", "09 2023"],
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

export default Content03uk;
