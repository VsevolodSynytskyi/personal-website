import React from "react";
import ContentSection from "../ContentSection";

const Content20: React.FC = () => {
  return (
    <div>
      <ContentSection
        title={"Звідки Я"}
        contentBlocks={[
          {
            content: (
              <p>
                Я виріс у Києві, але поїхав звідти у 2021. Відтоді пожив в
                Одесі, Львові, Івано-Франківську і в Карпатах.
              </p>
            ),
          },
          {
            content: <p>Наразі мешкаю у Львові.</p>,
          },
        ]}
      />
      <ContentSection
        title="Робота"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  Останні 2+ роки покращував UX сервісу для управління
                  будівельними проектами в Штатах.
                </p>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Content20;
