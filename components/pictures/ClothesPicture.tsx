import Image from "next/image";
import clothesPic from "../../images/clothes.svg";
import { useTranslations } from "next-intl";

const ClothesPicture: React.FC = () => {
  const t = useTranslations("imageAlternates");
  return (
    <div className="">
      <Image src={clothesPic} alt={t("hangingClothes")} className="-my-2" />
    </div>
  );
};

export default ClothesPicture;
