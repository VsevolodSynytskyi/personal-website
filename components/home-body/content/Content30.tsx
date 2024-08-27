import ContentSection from "../ContentSection";

const Content30: React.FC = () => {
  return (
    <>
      <ContentSection
        contentBlocks={[
          {
            content: (
              <p>
                Я виріс у Києві, але поїхав звідти у 2021. Відтоді пожив в
                Одесі, Львові, Івано-Франківську і в Карпатах.
              </p>
            ),
          },
          {
            content: <p>Наразі мешкаю у Львові.</p>,
          },
          {
            content: <p>Я займаюсь бігом, ходжу в гори та маю собаку.</p>,
          },
        ]}
      />
    </>
  );
};

export default Content30;
