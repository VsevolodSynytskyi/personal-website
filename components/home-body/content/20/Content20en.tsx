import React from "react";
import ContentSection from "../../ContentSection";

const Content20en: React.FC = () => {
  return (
    <>
      <ContentSection
        title="Where I’m From"
        contentBlocks={[
          {
            content: (
              <p>
                I grew up in Kyiv but left in 2021. Since then, I’ve lived in
                Odesa, Lviv, Ivano-Frankivsk, and the Carpathians.
              </p>
            ),
          },
          {
            content: <p>Currently, I live in Lviv.</p>,
          },
        ]}
      />
      <ContentSection
        title="Work"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  For the past 2+ years, I have been improving the UX of a
                  service for managing construction projects in the USA.
                </p>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content20en;
