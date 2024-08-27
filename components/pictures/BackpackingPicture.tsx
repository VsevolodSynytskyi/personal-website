import backpadingPic from "../../images/backpacking - 1.jpeg";
import RotatingPicture from "./RotatingPicture";

const BackpackingPicture: React.FC = () => {
  return <RotatingPicture src={backpadingPic} alt={`Походи`} />;
};

export default BackpackingPicture;
