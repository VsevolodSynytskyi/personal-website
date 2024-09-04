import CustomLink from "@/components/CustomLink";
import ContentSection from "../../ContentSection";

const Content31en: React.FC = () => {
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
                  activity for me. I could set off into the mountains at any
                  moment, without much planning or preparation.
                </p>
                <p>
                  Initially, I thought that after the Carpathians, I wouldn't
                  want to return to the mountains for a long time — that I would
                  get bored of them. But I was wrong. It seems that hiking will
                  become more and more frequent in my life.
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
                  much the running itself that I enjoy, but the community around
                  it.
                </p>
                <div>
                  <blockquote className="">
                    Running is rubbish, but runners are not
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
        title="Nora"
        contentBlocks={[
          {
            content: (
              <p>I have a dog who shares my passion for running and hiking.</p>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content31en;
