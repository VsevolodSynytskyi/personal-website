"use client";

import { Button } from "@/components/aceternity-ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errorPage");
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-content">
      <p>{t("title")}</p>
      <div className="flex flex-col items-center gap-4 mt-4">
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          {t("tryAgain")}
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => {
            router.push("/");
            reset();
          }}
        >
          {t("home")}
        </Button>
      </div>
    </div>
  );
}
