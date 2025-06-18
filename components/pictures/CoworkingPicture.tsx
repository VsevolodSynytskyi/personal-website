import Image from "next/image";
import coworkingPic1 from "../../images/coworking 01.jpg";
import coworkingPic2 from "../../images/coworking 02.jpg";
import { useTranslations } from "next-intl";

const CoworkingPicture: React.FC = () => {
  const t = useTranslations("imageAlternates");
  const imageAlt = t("coworking");
  return (
    <div className="grid grid-cols-2 gap-4">
      {[coworkingPic1, coworkingPic2].map((src, index) => (
        <Image key={index} src={src} alt={imageAlt} className="shadow-sm" />
      ))}
    </div>
  );
};

export default CoworkingPicture;
