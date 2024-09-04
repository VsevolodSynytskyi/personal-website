import CustomLink from "@/components/CustomLink";
import React from "react";
import ContentSection from "../../ContentSection";

const Content02en: React.FC = () => {
  return (
    <>
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
                <ul>
                  <li>
                    Web app UX/UI design & development (React JS, Typescript,
                    TailwindCSS, GraphQL).
                  </li>
                  <li>Streamlined onboarding from 2 hours to 20 minutes.</li>
                  <li>
                    Improved UX with Hotjar and reduced JTBD completion time.
                  </li>
                  <li>
                    Redesigned landing page with Webflow, tripling monthly
                    leads.
                  </li>
                  <li>
                    Conducted customer research, created VPCs, and optimized
                    user flows.
                  </li>
                  <li>
                    Led feature prototyping, implementation, and optimization.
                  </li>
                  <li>
                    Implemented user issue tracking with Hotjar, Sentry, and
                    Slack.
                  </li>
                </ul>
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
                Worked with a team of developers to create WordPress websites
                for agency clients.
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
              <p>UX/UI design of the corporate website and client projects.</p>
            ),
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
                Entrepreneurial experience in opening a coworking space during
                the winter power cuts of 2022.
              </p>
            ),
          },
          {
            title: "Volunteering",
            dates: ["03 2022"],
            content: (
              <>
                <p>
                  After the invasion in 2022, many people arrived at Lviv
                  station during curfew hours, so we created a Telegram bot to
                  coordinate drivers and passengers. I was responsible for
                  coordinating drivers and user support.
                </p>
                <p>
                  Thanks to this initiative, about 1,500 people were transported
                  to their places.
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
                While working at a startup, I took on marketing responsibilities
                and decided to deepen my knowledge in this field.
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
                During this course, I addressed theoretical gaps in product
                design.
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
            content: (
              <p>Practiced skills in prototyping and business analysis.</p>
            ),
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
                  «Коли розробник керує дизайнерами.
                  <br /> Як налагодити взаємодію в команді»
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
                  «Розповідаю про перший досвід розвитку волонтерського продукту
                  під час війни»
                </CustomLink>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content02en;
