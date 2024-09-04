import ContentSection from "@/components/home-body/ContentSection";
import React from "react";

const Content00en: React.FC = () => {
  return (
    <>
      <ContentSection
        title="Design and Development"
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
                  Main tech stack: React JS, TypeScript, TailwindCSS, Framer
                  Motion...
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Recent Experience"
        contentBlocks={[
          {
            content: (
              <p>
                For the past 2+ years, I have been improving the UX of a service
                for managing construction projects in the USA. (SaaS, B2B,
                construction, USA)
              </p>
            ),
          },
          {
            content: (
              <p>
                I’m always eager to create my own projects: I had a coworking
                space, a volunteer service, and a few pet projects.
              </p>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content00en;
