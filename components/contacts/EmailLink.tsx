import { CopyIcon } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";
import { Button } from "../aceternity-ui/button";

const subject = `Вітання з whoisseva.com`;
const email = `vsevolod.synytskyi@gmail.com`;

const EmailLink: React.FC = () => {
  const [copiedValue, copyFn] = useCopyToClipboard();

  const onCopyClick = () => {
    copyFn(email);
    toast.success("Скопійовано");
  };

  return (
    <div className="flex flex-row items-baseline gap-2">
      <Link
        className="underline"
        href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
      >
        {email}
      </Link>
      <Button onClick={onCopyClick} variant={"ghost"} size={"icon"}>
        <CopyIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default EmailLink;
