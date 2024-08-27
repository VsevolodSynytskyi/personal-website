import { LinkPreview } from "@/components/aceternity-ui/link-preview";
import ContentSection from "../ContentSection";

const Content31: React.FC = () => {
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
        title={"Хоббі"}
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
                  — Бігова Спільнота{" "}
                  <LinkPreview href="https://www.instagram.com/chumaky.way/">
                    "Чумаки"
                  </LinkPreview>
                  .
                </div>
              </>
            ),
          },
        ]}
      />

      <ContentSection
        title={"Нора"}
        contentBlocks={[
          {
            content: (
              <p>Я маю собаку, яка розділяє мої захоплення бігом і походами.</p>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content31;
