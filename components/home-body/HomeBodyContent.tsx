import dayjs from "dayjs";
import { LinkPreview } from "../ui/link-preview";
import ContentSection from "./ContentSection";

const HomeBodyContent: React.FC = () => {
  return (
    <div className="text-content">
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
            dates: [dayjs("Jan 2021"), dayjs(`Mar 2024`)],
            children: (
              <>
                <p>Jan 2022 - Mar 2024</p>
                <p>
                  SiteForm — це сервіс для управління будівельними проектами для
                  американських забудовників...
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
                  <li>Дизайн інтерфейсу і розробка веб-застосунку...</li>
                  <li>Аналіз поведінки юзерів через Hotjar</li>
                </ul>
              </>
            ),
          },
          {
            title: (
              <LinkPreview href="https://www.ryze-digital.de/">
                Ryze Digital
              </LinkPreview>
            ),
            children: (
              <>
                <p>Jul 2021 - Dec 2022</p>
                <p>
                  З командою розробників, створювали корпоративні сайти для
                  замовників агенції...
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
            children: (
              <>
                <p>Apr 2021 - May 2021</p>
                <p>
                  Дизайн корпоративного сайту компанії і проектів замовників.
                </p>
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
            children: (
              <>
                <p>Jan 2023 - Aug 2023</p>
                <p>Коли почались зимові відключення 2022-го року...</p>
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
            children: (
              <>
                <p>Mar 2022</p>
                <p>В березні 2022 я опинився у Львові...</p>
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
        title="Навчання"
        contentBlocks={[
          { title: "Product Marketing at Projector", children: null },
          { title: "Product Design at Projector", children: null },
          { title: "Berkeley Summer", children: null },
          { title: "Advanced React", children: null },
        ]}
      />

      <ContentSection
        title="Статті"
        contentBlocks={[
          { title: "dev.to", children: null },
          { title: "telegraph", children: null },
          { title: "dou", children: null },
        ]}
      />
    </div>
  );
};

export default HomeBodyContent;
