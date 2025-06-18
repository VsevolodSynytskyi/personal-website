import Image from "next/image";
import seagullsPic from "../../images/seagulls.svg";
import { useTranslations } from "next-intl";

const SeagullsPicture: React.FC = () => {
  const t = useTranslations("imageAlternates");
  return (
    <div className="flex flex-row justify-end" style={{ marginTop: "-4rem" }}>
      <Image src={seagullsPic} alt={t("seagulls")} className="w-40" />
    </div>
  );
};

export default SeagullsPicture;
