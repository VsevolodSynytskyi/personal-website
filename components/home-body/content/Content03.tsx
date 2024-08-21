import { LinkPreview } from "@/components/aceternity-ui/link-preview";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import ContentSection from "../ContentSection";

const Content03: React.FC = () => {
  return (
    <motion.div
      className="text-content"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
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
              <>
                <p>
                  Я займався продуктовим дизайном і фронтенд-розробкою
                  веб-застосунку для будівельного сервісу в США. Основні
                  обов`язки включали дизайн інтерфейсу і розробку застосунку, а
                  також створення лендігу на Webflow.
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
                  <li>
                    Дизайн інтерфейсу і розробка веб-застосунку (React,
                    Typescript, Tailwind, Graphql, Framer Motion)
                  </li>
                  <li>Аналіз поведінки юзерів через Hotjar</li>
                </ul>
              </>
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
            dates: [dayjs("Jul 2021"), dayjs("Dec 2021")],
            content: (
              <>
                <p>
                  В березні 2022 я був у Львові під час комендантської години,
                  коли багато людей ночували на залізничному вокзалі після
                  довгих поїздок. Ми створили телеграм-бота для зв`язку
                  водіїв-волонтерів і пасажирів. Я відповідав за координацію
                  водіїв і допомогу користувачам.
                </p>
                <p>
                  Також, з командою розробників, створювали корпоративні сайти
                  для замовників агенції. Комунікував з іноземними дизайнерами і
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
                <LinkPreview href="https://it-artel.ua/">iT Artel</LinkPreview>
              </>
            ),
            dates: [dayjs("Apr 2021"), dayjs("May 2021")],
            content: (
              <>
                <p>
                  Відповідав за UI-дизайн проектів для замовників і презентацію
                  проектів. Також займався дизайном корпоративного сайту
                  компанії.
                </p>
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
    </motion.div>
  );
};

export default Content03;
