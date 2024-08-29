import CustomLink from "@/components/CustomLink";
import ContentSection from "../ContentSection";

const Content32: React.FC = () => {
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
        title="Ідея Приборкання Місцевості"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  Я часто переїжджаю. Мені подобається адаптуватися до стилю
                  життя нового міста, знаходити його унікальну романтику. Кожне
                  нове місце має свої особливості, які можна пізнати, частково
                  відмовившись від попередніх звичок і норм. Так я вчуся любити
                  нове й адаптовуватися до нього.
                </p>
                <p>
                  Тривожного киянина Одеса навчила неспішно прогулюватись
                  будніми ранками.
                  <br /> Франківськ плануванню фразами “Не будем загадувать”,
                  “Буде видно” і “Ну то побачим”.
                  <br />А Карпатська зима загартувала дитину асфальту, щоб
                  патлатий хлопчик з шопером полюбив старі джипи та американо з
                  автомата.
                </p>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content32;
