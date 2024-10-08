import CustomLink from "@/components/CustomLink";
import ContentSection from "../../ContentSection";

const Content22en: React.FC = () => {
  return (
    <>
      <ContentSection
        title="Where I'm From"
        contentBlocks={[
          {
            content: <p>I grew up in Kyiv but left in 2021.</p>,
          },
          {
            content: (
              <p>
                Since then, I’ve lived in various cities across Ukraine: Odesa,
                Lviv, Ivano-Frankivsk, and also in the Carpathians.
              </p>
            ),
          },
        ]}
      />
      <ContentSection
        title="Backpacking"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  During my time in the mountains, backpacking became a routine
                  part of my life. I could head to the mountains at any moment,
                  without much planning or preparation.
                </p>
                <p>
                  Initially, I thought I wouldn't want to return to the
                  mountains after the Carpathians—thinking they would become
                  tiresome. But I was wrong. It seems that backpacking will only
                  become a bigger part of my life.
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Running"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  Running has become an important part of my life. It’s not so
                  much the running itself that I enjoy, but the community around
                  it.
                </p>
                <div>
                  <blockquote className="">
                    Running is tough, but runners aren’t.
                  </blockquote>
                  — Running community{" "}
                  <CustomLink
                    withPreview
                    href="https://www.instagram.com/chumaky.way/"
                  >
                    chumaky
                  </CustomLink>
                  .
                </div>
                <p>
                  I hope that one day this will also include a paragraph about
                  triathlons.
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Nora the Dog"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  Nora came into my life in the winter of 2022-2023. I bring her
                  with me when I do backpacking or trail running.
                </p>
              </>
            ),
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
                React, Typescript, Tailwind, Graphql, Framer Motion, Hotjar.
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
            content: <p>WordPress landing pages development.</p>,
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
        title="Initiatives"
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
                Co-founded a coworking space during the winter power cuts of
                2022.
              </p>
            ),
          },
          {
            title: "Volunteering",
            dates: ["03 2022"],
            content: (
              <p>
                Uber-like service for volunteers and internally displaced
                persons for night drives during the curfew in Lviv, Ukraine.
              </p>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content22en;
