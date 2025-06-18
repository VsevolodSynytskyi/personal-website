import Image from "next/image";
import cranePic from "../../images/crane.svg";
import { useTranslations } from "next-intl";

const CranePicture = () => {
  const t = useTranslations("imageAlternates");
  return <Image src={cranePic} alt={t("crane")} />;
};

export default CranePicture;
