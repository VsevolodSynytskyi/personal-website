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
                <p>
                  I'm a product designer, specializing in creating intuitive,
                  user-friendly interfaces and bringing them to life with my
                  frontend development skills.
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
                For the past 2+ years, I have been improving the UX of a
                construction management product. (SaaS, B2B, construction, USA)
              </p>
            ),
          },
          {
            content: (
              <p>
                I’m always proactive in solving problems I encounter: I had a
                coworking space, a volunteer service, and a few pet projects.
              </p>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content00en;
