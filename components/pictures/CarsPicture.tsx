import Image from "next/image";
import carPic1 from "../../images/car 01.jpg";
import carPic2 from "../../images/car 02.jpg";
import carPic3 from "../../images/car 03.jpg";
import { useTranslations } from "next-intl";

const CarsPicture: React.FC = () => {
  const t = useTranslations("imageAlternates");
  const altText = t("carInMountains");
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {[carPic1, carPic2, carPic3].map((src, index) => (
          <Image key={index} src={src} alt={altText} className="shadow-sm" />
        ))}
      </div>
    </div>
  );
};

export default CarsPicture;
