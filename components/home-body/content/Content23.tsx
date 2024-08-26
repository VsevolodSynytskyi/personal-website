import { LinkPreview } from "@/components/aceternity-ui/link-preview";
import dayjs from "dayjs";
import ContentSection from "../ContentSection";

const Content33: React.FC = () => {
  return (
    <div>
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
                <p>
                  <blockquote className="">Біг - хуйня, бігуни - ні</blockquote>
                  — Бігова Спільнота{" "}
                  <LinkPreview href="https://www.instagram.com/chumaky.way/">
                    "Чумаки"
                  </LinkPreview>
                  .
                </p>
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
        title="Життя в Карпатах"
        contentBlocks={[
          {
            dates: [dayjs("Aug 2023"), dayjs("Mar 2024")],
            content: (
              <>
                <p>
                  Влітку 2023 року ми закрили коворкінг, я лишив своє
                  Франківське життя і поїхав жити на гору в Карпатах. Вісім
                  місяців я провів у самотній хаті на горі. Найближчий мій сусід
                  був за гірським хребтом, а наступний — в півгодини ходьби. Так
                  я і полюбив походи.
                </p>
                <p>
                  Люди часто думають, що я втік від соціуму. Але я не тікав, я
                  шукав тишу і усамітнення. Це різне.
                </p>
              </>
            ),
          },
          // {
          //   title: "Прийняття рішень",
          //   content: (
          //     <>
          //       <p>
          //         Люди схильні приймати "оптимальні" рішення в усьому. Але мені
          //         це часто невластиво… Я прагну яскравого життя. Тому приймаю
          //         відповідні рішення.
          //       </p>
          //       <p>
          //         Переїзд в Карпати був неоптимальним рішенням, бо я мусив
          //         пожертвувати комфортом міського життя. Але це дозволило мені
          //         знайти нові пригоди і виклики.
          //       </p>
          //       <p>
          //         Проблеми з логістикою змусили мене опанувати автомобілі.
          //         Приборкавши жигуля місцевої автошколи, я купив 30-річний
          //         рамний джип в сусідньому селі. "Неоптимальність" цього рішення
          //         була в тому, що цей корч прожорливий, громіздкий і викликав
          //         сумніви в безпеці, але він міг завезти свого водія, куди той
          //         забажає. А мова йшла про зимові Карпати. Тому другорядні
          //         нюанси йому пробачались.
          //       </p>
          //       <p>Тепер кожна поїздка в магазин перетворилась на атракціон.</p>
          //       <p>
          //         Якби я щоразу приймав оптимальні рішення, я не мав би цих
          //         викликів і пригод. Тому замість комфорту я обираю авантюризм.
          //       </p>
          //     </>
          //   ),
          // },
        ]}
      />
      <ContentSection
        title="Робота в SiteForm"
        contentBlocks={[
          {
            dates: [dayjs("Jan 2022"), dayjs("Mar 2024")],
            content: (
              <>
                <p>
                  В кінці 2021 року я виконав фріланс-замовлення для компанії
                  Ендрю і згодом він запросив мене в штат.
                </p>
                <p>
                  Відтоді я працював у SiteForm до весни 2024. SiteForm — це
                  сервіс для управління будівельними проектами для американських
                  забудовників. Команда маленька, і часто кожен відповідав за
                  все. Найбільше я займався продуктовим дизайном і
                  фронтенд-розробкою веб-застосунку.
                </p>
                <p>
                  Найцікавішим завданням була розробка орієнтації для
                  будівельників на проект. У США, забудовник мусить провести
                  онбоардінг (орієнтацію) кожного будівельника на проект. Раніше
                  цей процес тривав години через людський фактор. Ми
                  оптимізували його до 20 хвилин. Я займався дослідженням,
                  дизайном і розробкою з іншими девелоперами.
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Власні Ініціативи"
        contentBlocks={[
          {
            title: "Коворкінг",
            dates: [dayjs("Jan 2023"), dayjs("Aug 2023")],
            content: (
              <>
                <p>
                  Коли почались зимові відключення 2022-го року, я і ще троє
                  однодумців відкрили коворкінг. Це була авантюра недосвідчених
                  непідприємців.
                </p>
                <p>
                  З цього проекта я найбільше ціную нові знайомства з класними
                  людьми і підприємницький досвід.
                </p>
              </>
            ),
          },
          {
            dates: [dayjs("Mar 2022")],
            title: "Волонтерський Проект",
            content: (
              <>
                <p>
                  В березні 2022, коли багато людей прибувало на Львівський
                  вокзал у комендантську годину, ми створили телеграм-бота для
                  координації водіїв і пасажирів. Я займався координацією водіїв
                  та допомагав юзерам.
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
        title="Одеситство"
        contentBlocks={[
          {
            title: "Rize Digital",
            dates: [dayjs("Jul 2021"), dayjs("Dec 2021")],
            content: (
              <>
                <p>
                  Влітку 2021 року я влаштувався до німецької агенції в Одеський
                  офіс як фронтенд-розробник. Півроку працював в команді
                  розробників над лендінгами до переходу в SiteForm.
                </p>
              </>
            ),
          },
          {
            title: `Подорож до Одеси`,
            dates: [dayjs("Jun 2021")],
            content: (
              <>
                <p>
                  Я мав місячний проміжок між виїздом з орендованої квартири в
                  Києві і заїздом до Одеси. Тобто місяць я був бездомним. І я
                  вирішив присвятити його подорожам. Знімаючи хостели по 150 грн
                  і катаючись блаблакаром, 19-річний я об'їхав 8 обласних
                  центрів протягом червня 2021, щоб врешті осісти в Одесі.
                </p>
              </>
            ),
          },
          {
            title: "Ідея Приборкання Місцевості",
            content: (
              <>
                <p>
                  Я часто переїжджаю. Мені подобається адаптуватися до стилю
                  життя нового міста, знаходити його унікальну романтику. Кожне
                  нове місце має свої особливості, які можна пізнати, частково
                  відмовившись від попередніх звичок і норм. Так я вчуся любити
                  нове і адаптовуватися до нього.
                </p>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Content33;
