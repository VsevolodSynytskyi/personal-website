import CustomLink from "@/components/CustomLink";
import ContentSection from "../../ContentSection";

const Content32en: React.FC = () => {
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
        title="Hobbies"
        contentBlocks={[
          {
            title: "Hiking",
            content: (
              <>
                <p>
                  While living in the Carpathians, hiking became a regular part
                  of my life. I could head to the mountains at any moment,
                  without much planning or preparation.
                </p>
                <p>
                  At first, I thought that after the Carpathians, I wouldn’t
                  want to return to the mountains for a long time—they’d become
                  tiresome. But I was wrong. It seems that hiking will become an
                  even bigger part of my life.
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
        title="Nora"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  Nora came into my life in the winter of 2022-2023. People
                  often ask how I got her accustomed to traveling. It's just her
                  breed—Frankivsk Tourist.
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="The Idea of Taming Locality"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  I move often. I enjoy adapting to the lifestyle of a new city,
                  discovering its unique charm. Every new place has its own
                  characteristics that you can only understand by partially
                  letting go of previous habits and norms. This is how I learn
                  to love and adapt to the new.
                </p>
                <p>
                  Odesa taught an anxious Kyivan to take leisurely walks on
                  weekday mornings.
                  <br /> Frankivsk taught me to plan with phrases like “We’ll
                  see” and “It’ll be clear later.”
                  <br /> And a Carpathian winter hardened a city kid so that a
                  long-haired boy with a tote bag grew to love old jeeps and
                  Americano from a machine.
                </p>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content32en;
