import CustomLink from "@/components/CustomLink";
import ContentSection from "../../ContentSection";

const Content13en: React.FC = () => {
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
                I was responsile for managing a web app. My achievements include
                reducing onboarding from 2 hours to 20 minutes, tripling leads
                with a redesigned landing page, and optimizing user flows and
                issue tracking with Hotjar and Sentry.
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
                  Together with a team of developers, we created corporate
                  websites for the agency's clients.
                </p>
                <ul>
                  <li>WordPress landing pages development</li>
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
            dates: ["04 2021", "05 2021"],
            content: (
              <>
                <ul>
                  <li>Design of the company's corporate website</li>
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
                  When the winter power cuts of 2022 began, I and three other
                  like-minded people opened a coworking space. We rented 44
                  spaces, of which one company took 25 for its employees. We
                  closed in the summer of 2023 due to low profitability.
                </p>
                <p>
                  After that, I took courses in product design and marketing, as
                  well as an asynchronous startup school from YC.
                </p>
              </>
            ),
          },
          {
            title: "Volunteering",
            dates: ["03 2022"],
            content: (
              <>
                <p>
                  After the 2022 invasion, many people arrived at the Lviv train
                  station during curfew, so we created a Telegram bot to
                  coordinate drivers and passengers. I was responsible for
                  coordinating drivers and helping users.
                </p>
                <p>
                  As a result, about 1,500 people were transported to their
                  places of stay.
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
        title="Hobbies"
        contentBlocks={[
          {
            title: "Backpacking",

            content: (
              <>
                <p>
                  Living in the mountains, backpacking became a routine activity
                  for me. I could head to the mountains at any moment, without
                  much planning or preparation.
                </p>
                <p>
                  At first, I thought that after the Carpathians, I wouldn't
                  want to return to the mountains for a long time—I would get
                  bored. But I was wrong. It seems that backpacking will become
                  even more frequent in my life.
                </p>
              </>
            ),
          },
          {
            title: "Running",
            content: (
              <>
                <p>
                  Running has become an important part of my life. It's not so
                  much about enjoying the run itself, but the community around
                  it.
                </p>
                <div>
                  <blockquote className="">
                    Running is bullshit, but runners are not.
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
                  I hope that one day there will be a paragraph here about
                  triathlon.
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
                In this course, I filled in the theoretical gaps in my product
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
                After managing the coworking space, I joined the Berkeley Summer
                program. Experts from Silicon Valley helped me improve my skills
                in product prototyping, business analysis, and presenting ideas.
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
            content: <p>Advanced course on React JS development.</p>,
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

export default Content13en;
