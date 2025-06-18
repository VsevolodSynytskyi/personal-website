import carMovingPic from "../../images/car moving.jpg";
import RotatingPicture from "./templates/RotatingPicture";
import { useTranslations } from "next-intl";

const CarMovingPicture: React.FC = () => {
  const t = useTranslations("imageAlternates");
  return (
    <RotatingPicture
      src={carMovingPic}
      alt={t("carInMountains")}
      className="shadow-sm"
    />
  );
};

export default CarMovingPicture;
