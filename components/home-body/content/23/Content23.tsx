import CustomLink from "@/components/CustomLink";
import BackpackingPicture from "@/components/pictures/BackpackingPicture";
import CarMovingPicture from "@/components/pictures/CarMovingPicture";
import ClothesPicture from "@/components/pictures/ClothesPicture";
import CoworkingPicture from "@/components/pictures/CoworkingPicture";
import CranePicture from "@/components/pictures/CranePicture";
import DogRunningPicture from "@/components/pictures/DogRunningPicture";
import RunningPersonPicture from "@/components/pictures/RunningPersonPicture";
import SeagullsPicture from "@/components/pictures/SeagullsPicture";
import PictureTrainStation from "@/components/pictures/TrainStationPicture";
import WorkersPicture from "@/components/pictures/WorkersPicture";
import ContentSection from "../../ContentSection";

const Content33: React.FC = () => {
  return (
    <>
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
                <BackpackingPicture />
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
                  — Бігова спільнота{" "}
                  <CustomLink
                    withPreview
                    href="https://www.instagram.com/chumaky.way/"
                  >
                    chumaky
                  </CustomLink>
                  .
                </div>
                <RunningPersonPicture />
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
                <DogRunningPicture />
              </>
            ),
          },
        ]}
      />

      <ContentSection
        title="Життя в Карпатах"
        contentBlocks={[
          {
            dates: ["08 2023", "03 2024"],
            content: (
              <>
                <p>
                  Влітку 2023 року ми закрили коворкінг, я лишив своє
                  Франківське життя і поїхав жити на гору в Карпатах. Вісім
                  місяців я провів у самотній хаті на горі. Найближчий мій сусід
                  був за гірським хребтом, а наступний — в пів години ходьби.
                  Так я і полюбив походи.
                </p>
                <p>
                  Люди часто думають, що я втік від соціуму. Але я не тікав, я
                  шукав тишу та усамітнення. Це різне.
                </p>
                <CarMovingPicture />
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Робота в SiteForm"
        contentBlocks={[
          {
            dates: ["01 2022", "03 2024"],
            content: (
              <>
                <div className="relative pt-20 pb-8">
                  <div className="absolute top-0 right-0 w-48 -mt-8">
                    <CranePicture />
                  </div>
                  <p className="w-[17rem]">
                    В кінці 2021 року я виконав фріланс-замовлення для компанії
                    Ендрю і згодом він запросив мене в штат.
                  </p>
                </div>
                <p>
                  Відтоді я працював у SiteForm до весни 2024. SiteForm — це
                  сервіс для управління будівельними проектами для американських
                  забудовників. Команда маленька, і часто кожен відповідав за
                  все. Найбільше я займався продуктовим дизайном і
                  фронтенд-розробкою веб-застосунку.
                </p>
                <WorkersPicture />
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
                  непідприємців.
                </p>
                <CoworkingPicture />
                <p>
                  З цього проекта я найбільше ціную нові знайомства з класними
                  людьми та підприємницький досвід.
                </p>
              </>
            ),
          },
          {
            dates: ["03 2022"],
            title: "Волонтерський Проект",
            content: (
              <>
                <p>
                  Після вторгнення 2022 багато людей прибувало на Львівський
                  вокзал у комендантську годину, тому ми створили телеграм-бот
                  для координації водіїв і пасажирів. Я займався координацією
                  водіїв та допомагав юзерам.
                </p>
                <PictureTrainStation />
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
            dates: ["07 2021", "12 2021"],
            content: (
              <>
                <p>
                  Влітку 2021 року я влаштувався до німецької агенції в Одеський
                  офіс як фронтенд-розробник. Пів року працював в команді
                  розробників над лендінгами до переходу в SiteForm.
                </p>
              </>
            ),
          },
          {
            title: `Подорож до Одеси`,
            dates: ["06 2021"],
            content: (
              <>
                <SeagullsPicture />

                <p>
                  Я мав місячний проміжок між виїздом з орендованої квартири в
                  Києві та заїздом до Одеси. Тобто місяць я був бездомним. І я
                  вирішив присвятити його подорожам. Знімаючи хостели по 150 грн
                  і катаючись блаблакаром, 19-річний я об'їхав 8 обласних
                  центрів протягом червня 2021, щоб врешті осісти в Одесі.
                </p>
                <ClothesPicture />
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
                  нове й адаптовуватися до нього.
                </p>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content33;
