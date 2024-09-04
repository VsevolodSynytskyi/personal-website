import ContentSection from "../../ContentSection";

const Content30en: React.FC = () => {
  return (
    <>
      <ContentSection
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
          {
            content: <p>I’m into running, hiking, and I have a dog.</p>,
          },
        ]}
      />
    </>
  );
};

export default Content30en;
