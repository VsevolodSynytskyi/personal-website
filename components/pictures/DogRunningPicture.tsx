import dogBackgorundPic from "../../images/dog background.png";
import dogRunningPic from "../../images/dog running.png";
import RunningPicture from "./templates/RunningPicture";

const DogRunningPicture: React.FC = () => {
  return (
    <RunningPicture
      bgImage={{
        src: dogBackgorundPic,
        alt: `Фон природи`,
      }}
      movingImage={{
        src: dogRunningPic,
        alt: `Нора біжить`,
      }}
    />
  );
};

export default DogRunningPicture;
