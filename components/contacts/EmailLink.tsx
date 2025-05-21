import {DOMAIN_NAME, EMAIL_ADDRESS} from "@/lib/constants";
import { CopyIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";
import { Button } from "../aceternity-ui/button";
import CustomLink from "../CustomLink";

const EmailLink: React.FC = () => {
  const [_, copyFn] = useCopyToClipboard();
  const t = useTranslations("contacts");

  const onCopyClick = async() => {
    try{
    await copyFn(EMAIL_ADDRESS);
      toast.success(t("copyFunction.success"));
    } catch (e){
      toast.error(t("copyFunction.error"));
    }
  };

  return (
    <div className="flex flex-row items-baseline gap-2">
      <CustomLink
        href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
          t("messageBox.mailSubject", ({domainName:DOMAIN_NAME}))
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
