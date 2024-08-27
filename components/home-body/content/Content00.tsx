import React from "react";
import ContentSection from "../ContentSection";

const Content00: React.FC = () => {
  return (
    <>
      <ContentSection
        title="Дизайн і Розробка"
        contentBlocks={[
          {
            content: (
              <>
                <p>Я працюю на стику дизайну і розробки.</p>
                <p>
                  Мене захоплює проектування інтерфейсів, які виклиають відчуття
                  "сів і поїхав", а розробка - інструмент втілення творчих
                  задумів.
                </p>
                <p>
                  Основний технічний стек: React JS, Typescript, TailwindCSS,
                  Framer Motion...
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Останній Досвід"
        contentBlocks={[
          {
            content: (
              <p>
                Останні 2+ роки покращував UX сервісу для управління
                будівельними проектами в Штатах. (SaaS, B2B, construction, USA){" "}
              </p>
            ),
          },
          {
            content: (
              <p>
                Руки завжди чешуться створювати власні проекти. Мав коворкінг,
                волонтерський сервіс і пару пет-проектів.
              </p>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content00;
