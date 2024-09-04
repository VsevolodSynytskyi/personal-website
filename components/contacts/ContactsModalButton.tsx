import { XIcon } from "lucide-react";
import React, { forwardRef } from "react";

import { Button } from "@/components/aceternity-ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/aceternity-ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/aceternity-ui/drawer";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "usehooks-ts";
import Contacts from "./ContactsBody";

const ContactsModalButtonTrigger: React.FC = forwardRef<HTMLButtonElement>(
  (props, ref) => {
    const t = useTranslations("contacts");
    return (
      <div>
        <button {...props} ref={ref} className="w-auto underline">
          {t("title")}
        </button>
      </div>
    );
  }
);
ContactsModalButtonTrigger.displayName = "ContactsModalButtonTrigger";

const ContactsModalButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const t = useTranslations("contacts");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <ContactsModalButtonTrigger />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t("title")}</DialogTitle>
          </DialogHeader>
          <Contacts />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <ContactsModalButtonTrigger />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{t("title")}</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <Contacts />
          <DrawerClose asChild>
            <Button variant="ghost">
              <XIcon />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ContactsModalButton;
