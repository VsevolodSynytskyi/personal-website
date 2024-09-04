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
                <p>I work at the intersection of design and development.</p>
                <p>
                  I’m passionate about designing interfaces that give a feeling
                  of "just hop in and go," while development is the tool to
                  bring creative ideas to life.
                </p>
                <p>
                  For the past 2+ years, I have been improving the UX of a
                  service for managing construction projects in the USA. (SaaS,
                  B2B, construction, USA)
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
