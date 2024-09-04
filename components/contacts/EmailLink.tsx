import { EMAIL_ADDRESS } from "@/lib/constants";
import { CopyIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";
import { Button } from "../aceternity-ui/button";
import CustomLink from "../CustomLink";

const EmailLink: React.FC = () => {
  const [copiedValue, copyFn] = useCopyToClipboard();
  const t = useTranslations("contacts");

  const onCopyClick = () => {
    copyFn(EMAIL_ADDRESS);
    toast.success("Скопійовано");
  };

  return (
    <div className="flex flex-row items-baseline gap-2">
      <CustomLink
        href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
          t("messageBox.mailSubject")
        )}`}
      >
        {EMAIL_ADDRESS}
      </CustomLink>
      <Button onClick={onCopyClick} variant={"ghost"} size={"icon"}>
        <CopyIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default EmailLink;
