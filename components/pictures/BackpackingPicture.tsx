import backpadingPic from "../../images/backpacking - 1.jpeg";
import RotatingPicture from "./templates/RotatingPicture";
import { useTranslations } from "next-intl";

const BackpackingPicture: React.FC = () => {
  const t = useTranslations("imageAlternates");
  return <RotatingPicture src={backpadingPic} alt={t("hiking")} />;
};

export default BackpackingPicture;
