import React from "react";
import ContentSection from "../../ContentSection";

const Content10en: React.FC = () => {
  return (
    <>
      <ContentSection
        title="Where I’m From"
        contentBlocks={[
          {
            content: <p>I grew up in Kyiv, but now I live in Lviv.</p>,
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
                  I'm a product designer, specializing in creating intuitive,
                  user-friendly interfaces and bringing them to life with my
                  frontend development skills.
                </p>
                <p>
                  For the past 2+ years, I have been improving the UX of a
                  construction management product. (SaaS, B2B, construction,
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

export default Content10en;
