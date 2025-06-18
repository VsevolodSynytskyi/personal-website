import Image from "next/image";
import familyPic from "../../images/family.svg";
import trainStationPic from "../../images/trainstation.jpg";
import { useTranslations } from "next-intl";

const TrainStationPicture: React.FC = () => {
  const t = useTranslations("imageAlternates");

  return (
    <div className="relative">
      <Image src={trainStationPic} alt={t("trainStation")} className="w-1/2" />
      <Image
        src={familyPic}
        alt={t("family")}
        className="absolute bottom-0 right-0 w-1/2"
      />
    </div>
  );
};

export default TrainStationPicture;
