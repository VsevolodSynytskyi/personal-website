import CustomLink from "@/components/CustomLink";
import ContentSection from "@/components/home-body/ContentSection";
import BackpackingPicture from "@/components/pictures/BackpackingPicture";
import CarMovingPicture from "@/components/pictures/CarMovingPicture";
import CarsPicture from "@/components/pictures/CarsPicture";
import ClothesPicture from "@/components/pictures/ClothesPicture";
import DogRunningPicture from "@/components/pictures/DogRunningPicture";
import RunningPersonPicture from "@/components/pictures/RunningPersonPicture";
import SeagullsPicture from "@/components/pictures/SeagullsPicture";
import { YOUTUBE_VIDEO_URL } from "@/lib/constants";

const Content33: React.FC = () => {
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
                <BackpackingPicture />
                <p>
                  Спочатку думав, що після Карпат довго не захочу повертатись у
                  гори — так вони мені набриднуть. Але я помилився. Здається, що
                  походів у моєму житті ставатиме дедалі більше.
                </p>
                <CustomLink withPreview href={YOUTUBE_VIDEO_URL}>
                  відео з походами
                </CustomLink>
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
                  Влітку 2023 я лишив своє Франківське життя і поїхав в Карпати.
                  Наступні вісім місяців я провів у самотній хаті на горі.
                  Найближчий мій сусід був за гірським хребтом, а наступний — в
                  пів години ходьби. Так я і полюбив походи.
                </p>
                <p>
                  Люди часто думають, що я втік від соціуму. Але я не тікав, я
                  шукав тишу та усамітнення. Це різне.
                </p>
                <CarMovingPicture />
              </>
            ),
          },
          {
            title: "Про Прийняття Рішень",
            content: (
              <>
                <p>
                  Люди схильні приймати "оптимальні" рішення в усьому. Але мені
                  це часто невластиво… Я прагну яскравого життя. Тому приймаю
                  відповідні рішення.
                </p>
                <p>
                  Наприклад... Переїзд в Карпати був неоптимальним рішенням, бо
                  я мусив пожертвувати комфортом міського життя. Але це
                  дозволило мені знайти нові пригоди та виклики.
                </p>
                <p>
                  Проблеми з логістикою змусили мене опанувати автомобілі.
                  Приборкавши жигуль місцевої автошколи, я купив 30-річний
                  рамний джип в сусідньому селі. "Неоптимальність" цього рішення
                  була в тому, що цей корч прожерливий, громіздкий і викликав
                  сумніви в безпеці, але він міг завезти свого водія, куди той
                  забажає. А мова йшла про зимові Карпати. Тому другорядні
                  нюанси йому пробачались.
                </p>
                <p>Тепер кожна поїздка в магазин перетворилась на атракціон.</p>
                <CarsPicture />
                <p>
                  Якби я щоразу приймав оптимальні рішення, я не мав би цих
                  викликів і пригод. Тому замість комфорту я обираю авантюризм.
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
            title: `Подорож до Одеси`,
            dates: ["06 2021"],
            content: (
              <>
                <SeagullsPicture />

                <p>Влітку 2021 року я переїхав в Одесу з карʼєрних причин.</p>
                <p>
                  Я мав місячний проміжок між виїздом з орендованої квартири в
                  Києві та заїздом до Одеси. Тобто місяць я був бездомним. І я
                  вирішив присвятити його подорожам. Знімаючи хостели по 150 грн
                  і катаючись блаблакаром, 19-річний я об'їхав 8 обласних
                  центрів протягом червня 2021, щоб врешті осісти в Одесі.
                </p>
                <ClothesPicture />
                <p>
                  Я полюбив Одеські світанки та море, навіть зимове. Одеса
                  навчила мене не поспішати, а насолоджуватися моментом.
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

export default Content33;
