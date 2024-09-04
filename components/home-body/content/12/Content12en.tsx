import CustomLink from "@/components/CustomLink";
import React from "react";
import ContentSection from "../../ContentSection";

const Content12en: React.FC = () => {
  return (
    <>
      <ContentSection
        title="About Me"
        contentBlocks={[
          {
            content: (
              <p>
                I grew up in Kyiv but left in 2021. Since then, I've lived in
                Odesa, Lviv, Ivano-Frankivsk, and the Carpathians.
              </p>
            ),
          },
          {
            content: <p>Currently, I live in Lviv.</p>,
          },
          {
            content: <p>I enjoy running, hiking, and I have a dog.</p>,
          },
        ]}
      />
      <ContentSection
        title="Career"
        contentBlocks={[
          {
            title: (
              <>
                Product Designer & Frontend Developer at{" "}
                <CustomLink withPreview href="https://www.siteform.io/">
                  SiteForm
                </CustomLink>
              </>
            ),
            dates: ["01 2022", "03 2024"],
            content: (
              <>
                <li>
                  Design and development of a landing page on Webflow -{" "}
                  <CustomLink withPreview href="https://www.siteform.io/">
                    https://www.siteform.io/
                  </CustomLink>
                </li>
                <li>
                  UI design and development of a web application (React,
                  Typescript, Tailwind, Graphql, Framer Motion)
                </li>
                <li>Behavior analysis of users using Hotjar</li>
              </>
            ),
          },
          {
            title: (
              <>
                Frontend Developer at{" "}
                <CustomLink withPreview href="https://www.ryze-digital.de/">
                  Ryze Digital
                </CustomLink>
              </>
            ),
            dates: ["07 2021", "12 2021"],
            content: (
              <p>
                Worked with a team of developers to create corporate websites on
                Wordpress for agency clients.
              </p>
            ),
          },
          {
            title: (
              <>
                Graphic Designer at{" "}
                <CustomLink withPreview href="https://it-artel.ua/">
                  iT Artel
                </CustomLink>
              </>
            ),
            dates: ["04 2021", "05 2021"],
            content: (
              <p>
                Designed the corporate website for the company and client
                projects.
              </p>
            ),
          },
        ]}
      />
      <ContentSection
        title="Personal Initiatives"
        contentBlocks={[
          {
            title: (
              <CustomLink
                withPreview
                href="https://www.instagram.com/inflow.coworking/"
              >
                Coworking
              </CustomLink>
            ),
            dates: ["01 2023", "08 2023"],
            content: (
              <p>
                Entrepreneurial experience in opening a coworking space during
                the winter outages of 2022.
              </p>
            ),
          },
          {
            title: "Volunteering",
            dates: ["03 2022"],
            content: (
              <>
                <p>
                  After the 2022 invasion, many people arrived at Lviv station
                  during curfew, so we created a Telegram bot for coordinating
                  drivers and passengers. I managed driver coordination and
                  assisted users.
                </p>
                <p>
                  Thanks to the initiative, about 1,500 people were transported
                  to their accommodation.
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Education"
        contentBlocks={[
          {
            title: (
              <CustomLink
                withPreview
                href="https://prjctr.com/certificate/01HGTS85E8SQGM65KTR6TA0RBB"
              >
                Product Marketing at Projector
              </CustomLink>
            ),
            dates: ["12 2023", "03 2024"],
            content: (
              <p>
                Working at a startup, I took on marketing responsibilities and
                decided to deepen my knowledge in this field.
              </p>
            ),
          },
          {
            title: (
              <CustomLink
                withPreview
                href="https://prjctr.com/certificate/01H7Z72TNCJ9E5R1ZTARNC37ZS"
              >
                Product Design at Projector
              </CustomLink>
            ),
            dates: ["06 2023", "10 2023"],
            content: (
              <p>
                The course helped me fill theoretical gaps in product design.
              </p>
            ),
          },
          {
            title: (
              <CustomLink
                withPreview
                href="https://promprylad.ua/en/berkeley-summer-at-promprylad/"
              >
                Berkeley Summer
              </CustomLink>
            ),
            dates: ["07 2023", "09 2023"],
            content: <p>Practiced prototyping and business analysis skills.</p>,
          },
          {
            title: (
              <CustomLink
                withPreview
                href="https://v1.scrimba.com/certificate/ubRLwvfa/greact"
              >
                Advanced React
              </CustomLink>
            ),
            dates: ["07 2020"],
            content: <p>Advanced course for React JS development.</p>,
          },
        ]}
      />
      <ContentSection
        title="Articles"
        contentBlocks={[
          {
            title: <>DEV.TO</>,
            dates: ["10 2022"],
            content: (
              <div>
                <CustomLink
                  withPreview
                  href="https://dev.to/seva/leading-a-ui-design-team-as-a-developer-26ld"
                >
                  «Leading a UI design team as a developer»
                </CustomLink>
              </div>
            ),
          },
          {
            title: <>Telegraph</>,
            dates: ["10 2022"],
            content: (
              <div>
                <CustomLink
                  withPreview
                  href="https://telegraf.design/designer-keruye-rozrobnykamy/"
                >
                  «When a developer manages designers.
                  <br /> How to establish team interaction»
                </CustomLink>
              </div>
            ),
          },
          {
            title: <>DOU</>,
            dates: ["06 2022"],
            content: (
              <div>
                <CustomLink
                  withPreview
                  href="https://dou.ua/forums/topic/38459/"
                >
                  «Talking about my first experience developing a volunteer
                  product during the war»
                </CustomLink>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content12en;
