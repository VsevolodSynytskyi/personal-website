import CustomLink from "@/components/CustomLink";
import ContentSection from "../../ContentSection";

const Content21uk: React.FC = () => {
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
        title={"Хобі"}
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
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Робота"
        contentBlocks={[
          {
            content: (
              <>
                <p>Я працюю на стику дизайну і розробки.</p>
                <p>
                  Мене захоплює проектування інтерфейсів, які викликають
                  відчуття "сів і поїхав", а розробка - інструмент втілення
                  творчих задумів.
                </p>
                <p>
                  Останні 2+ роки покращував UX сервісу для управління
                  будівельними проектами в Штатах. (SaaS, B2B, construction,
                  USA)
                </p>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content21uk;
