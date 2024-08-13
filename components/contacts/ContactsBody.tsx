import { LinkedinIcon, SendIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import EmailLink from "./EmailLink";
import MessageBox from "./MessageBox";

const linkedInUrl =
  "https://www.linkedin.com/in/%D0%B2%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B4-%D1%81%D0%B8%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9-43131022a/";
const telegramUrl = "https://t.me/vsevolod_synytskyi";

const ContactsBody: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col w-full gap-2">
        <MessageBox />

        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <Button className="flex-1" variant={"secondary"} asChild>
            <Link href={linkedInUrl}>
              <LinkedinIcon className="mr-2 w-4 h-4" /> LinkedIn
            </Link>
          </Button>
          <Button className="flex-1" variant={"secondary"} asChild>
            <Link href={telegramUrl}>
              <SendIcon className="mr-2 w-4 h-4" /> Telegram
            </Link>
          </Button>
        </div>
        <EmailLink />
      </div>
    </div>
  );
};

export default ContactsBody;
