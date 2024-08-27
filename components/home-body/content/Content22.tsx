import { LinkPreview } from "@/components/aceternity-ui/link-preview";
import dayjs from "dayjs";
import ContentSection from "../ContentSection";

const Content22: React.FC = () => {
  return (
    <>
      <ContentSection
        title={"Звідки Я"}
        contentBlocks={[
          {
            content: <p>Я виріс в Києві, але поїхав звідти у 2021 році.</p>,
          },
          {
            content: (
              <p>
                Відтоді жив у різних містах України: Одеса, Львів,
                Івано-Франківськ, а також в Карпатах.
              </p>
            ),
          },
        ]}
      />
      <ContentSection
        title="Походи"
        contentBlocks={[
          {
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
        ]}
      />
      <ContentSection
        title="Біг"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  Біг став важливою частиною мого життя. Не так я кайфую від
                  бігу, як від спільноти навколо нього.{" "}
                </p>
                <div>
                  <blockquote className="">Біг - хуйня, бігуни - ні</blockquote>
                  — Бігова Спільнота{" "}
                  <LinkPreview href="https://www.instagram.com/chumaky.way/">
                    "Чумаки"
                  </LinkPreview>
                  .
                </div>
                <p>Сподіваюсь, що колись тут буде абзац про тріатлон.</p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Нора"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  Нора з'явилась у моєму житті взимку 2022-2023. Часто питають,
                  як я привчив її до мандрівок. Така в неї порода - Франківська
                  Туристична.
                </p>
              </>
            ),
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
    </>
  );
};

export default Content22;
