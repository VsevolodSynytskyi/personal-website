import { LINKEDIN_URL, TELEGRAM_URL } from "@/lib/constants";
import { LinkedinIcon, SendIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../aceternity-ui/button";
import { Separator } from "../aceternity-ui/separator";
import EmailLink from "./EmailLink";
import MessageBox from "./MessageBox";

const ContactsBody: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <MessageBox />
      <Separator />
      <div className="grid grid-cols-2 gap-4">
        <Button className="flex-1" variant={"secondary"} asChild>
          <Link href={LINKEDIN_URL}>
            <LinkedinIcon className="w-4 h-4 mr-2" /> LinkedIn
          </Link>
        </Button>
        <Button className="flex-1" variant={"secondary"} asChild>
          <Link href={TELEGRAM_URL}>
            <SendIcon className="w-4 h-4 mr-2" /> Telegram
          </Link>
        </Button>
      </div>
      <EmailLink />
    </div>
  );
};

export default ContactsBody;
