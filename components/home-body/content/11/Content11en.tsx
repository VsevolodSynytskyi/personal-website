import CustomLink from "@/components/CustomLink";
import React from "react";
import ContentSection from "../../ContentSection";

const Content11en: React.FC = () => {
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
              <p>
                React, TypeScript, Tailwind, GraphQL, Framer Motion, Hotjar.
              </p>
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
            content: <p>Landing page development on WordPress.</p>,
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
            content: <p>Websites and presentations.</p>,
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
                Coworking Space
              </CustomLink>
            ),
            dates: ["01 2023", "08 2023"],
            content: (
              <p>
                Opened a coworking space during the winter power outages of
                2022.
              </p>
            ),
          },
          {
            title: "Volunteering",
            dates: ["03 2022"],
            content: (
              <p>
                Uber service for volunteers and internally displaced persons
                during curfew in Lviv.
              </p>
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
          },
        ]}
      />
    </>
  );
};

export default Content11en;
