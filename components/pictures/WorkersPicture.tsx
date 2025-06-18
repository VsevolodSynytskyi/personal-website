import Image from "next/image";
import workersPic from "../../images/workers.svg";
import { useTranslations } from "next-intl";

const WorkersPicture: React.FC = () => {
  const t = useTranslations("imageAlternates");
  return (
    <div className="flex flex-row items-center justify-center">
      <Image
        src={workersPic}
        alt={t("constructionWorkers")}
        className="max-w-64"
      />
    </div>
  );
};

export default WorkersPicture;
