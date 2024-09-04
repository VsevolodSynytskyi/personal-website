import CustomLink from "@/components/CustomLink";
import ContentSection from "../../ContentSection";

const Content03en: React.FC = () => {
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
                <p>
                  I worked on product design and frontend development for a
                  construction service web application in the USA. My main
                  responsibilities included interface design and application
                  development, as well as creating a landing page on Webflow.
                </p>
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
              <>
                <p>
                  Worked with a team of developers to create corporate websites
                  for agency clients. Communicated with foreign designers and
                  managers.
                </p>
                <ul>
                  <li>Landing page development on WordPress</li>
                </ul>
              </>
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
            dates: ["04 2021", "06 2021"],
            content: (
              <>
                <ul>
                  <li>Design of the company’s corporate website</li>
                  <li>UI design for client projects</li>
                  <li>Project presentations</li>
                </ul>
              </>
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
                Coworking Space
              </CustomLink>
            ),
            dates: ["01 2023", "08 2023"],
            content: (
              <>
                <p>
                  When the winter blackouts began in 2022, I and three other
                  like-minded people opened a coworking space. It was a venture
                  by inexperienced entrepreneurs, and I value the experience
                  more than the lost funds. At its peak, we had 44 booked seats,
                  with one IT company renting 25 seats for their employees. We
                  closed in the summer of 2022 due to low profitability.
                </p>
                <p>
                  Later, reflecting on this experience, I took courses at{" "}
                  <CustomLink href={`https://prjctr.com/`}>
                    Projector
                  </CustomLink>{" "}
                  on product design and marketing, as well as an asynchronous
                  startup school from YC.
                </p>
                <ul>
                  <li>Operational management of the coworking space</li>
                  <li>
                    <CustomLink
                      withPreview
                      href="https://inflow-coworking-website-hhde-vsevolod111s-projects.vercel.app/"
                    >
                      Website development
                    </CustomLink>
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Volunteering",
            dates: ["03 2022"],
            content: (
              <>
                <p>
                  After the 2022 invasion, many people arrived at the Lviv
                  railway station during curfew, so we created a Telegram bot to
                  coordinate drivers and passengers. I coordinated drivers:
                  obtaining permits for driving during curfew, helping users
                  solve unusual problems, and spreading the bot among
                  volunteers. Volunteers met people from the train and helped
                  them get a ride.
                </p>
                <p>
                  Thanks to our initiative, about 1,500 people were transported
                  to their places of stay.
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Professional Values"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  I thrive in a team environment and am energized by the startup
                  atmosphere. Seeing people use the product I’ve worked on is
                  crucial to me; my work is a platform for creativity, and that
                  creativity needs an audience to have meaning.
                </p>
                <p>
                  I also need intellectual challenges to stay engaged. If I
                  don’t feel like I’m growing, I start to burn out.
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
              <>
                <p>
                  While working at a startup, I often took on additional
                  responsibilities, including marketing. This prompted me to
                  deepen my knowledge in this area.
                </p>
                <p>
                  I learned how to develop Go-to-Market strategies and launch
                  products in new markets.
                </p>
              </>
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
                In this course, I filled the theoretical gaps in my product
                design experience.
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
              <p>
                After managing a coworking space, I joined the Berkeley Summer
                program. Experts from Silicon Valley helped me improve my skills
                in product prototyping, business analysis, and pitching ideas.
              </p>
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
            content: <p>Advanced course in React JS development.</p>,
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

export default Content03en;
