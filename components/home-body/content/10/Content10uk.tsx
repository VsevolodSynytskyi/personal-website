import React from "react";
import ContentSection from "../../ContentSection";

const Content10uk: React.FC = () => {
  return (
    <>
      <ContentSection
        title={`Звідки Я`}
        contentBlocks={[
          {
            content: <p>Я виріс у Києві, але зараз живу у Львові.</p>,
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

export default Content10uk;
