import CustomLink from "@/components/CustomLink";
import ContentSection from "../../ContentSection";

const Content21en: React.FC = () => {
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
                Since then, I have lived in various cities in Ukraine: Odesa,
                Lviv, Ivano-Frankivsk, and also in the Carpathians.
              </p>
            ),
          },
        ]}
      />
      <ContentSection
        title="Hobbies"
        contentBlocks={[
          {
            title: "Hiking",
            content: (
              <>
                <p>
                  During my time in the Carpathians, hiking became a routine
                  activity for me. I could head to the mountains at any moment,
                  without any special plans or preparations.
                </p>
                <p>
                  At first, I thought that after the Carpathians, I wouldn’t
                  want to return to the mountains for a long time—thinking I’d
                  get bored. But I was mistaken. It seems that there will be
                  more and more hikes in my life.
                </p>
              </>
            ),
          },
          {
            title: "Running",
            content: (
              <>
                <p>
                  Running has become an important part of my life. It’s not so
                  much the running itself that I enjoy, but the community around
                  it.
                </p>
                <div>
                  <blockquote className="">
                    Running is pointless, but runners are not
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
              </>
            ),
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
                  I am passionate about designing interfaces that give the
                  feeling of "sitting down and going," and development is a tool
                  to bring creative ideas to life.
                </p>
                <p>
                  For the past 2+ years, I have been improving the UX of a
                  construction project management service in the USA. (SaaS,
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

export default Content21en;
