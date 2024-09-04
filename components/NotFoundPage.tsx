import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "./aceternity-ui/button";

const NotFoundPage: React.FC = () => {
  const t = useTranslations("notFoundPage");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-content">
      <h1>404</h1>
      <p>{t("title")}</p>
      <Button className="mt-6" asChild>
        <Link href={"/"}>{t("home")}</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
