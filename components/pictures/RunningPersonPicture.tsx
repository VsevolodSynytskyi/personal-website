import runningBackgroundPic from "../../images/running - background.png";
import runningPersonPic from "../../images/running - person.png";
import RunningPicture from "./templates/RunningPicture";

const RunningPersonPicture: React.FC = () => {
  return (
    <RunningPicture
      bgImage={{
        src: runningBackgroundPic,
        alt: `Фон природи`,
      }}
      movingImage={{
        src: runningPersonPic,
        alt: `Сєва біжить`,
      }}
    />
  );
};

export default RunningPersonPicture;
