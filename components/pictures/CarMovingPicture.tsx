import carMovingPic from "../../images/car moving.jpg";
import RotatingPicture from "./RotatingPicture";

const CarMovingPicture: React.FC = () => {
  return (
    <RotatingPicture
      src={carMovingPic}
      alt={"Машина на фоні гір взимку"}
      className="shadow-sm"
    />
  );
};

export default CarMovingPicture;
