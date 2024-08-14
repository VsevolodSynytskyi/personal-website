import { XIcon } from "lucide-react";
import React, { forwardRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "usehooks-ts";
import Contacts from "./ContactsBody";

const ContactsModalButtonTrigger: React.FC = forwardRef<HTMLButtonElement>(
  (props, ref) => {
    return (
      <div>
        <button {...props} ref={ref} className="w-auto underline">
          Контакти
        </button>
      </div>
    );
  }
);
ContactsModalButtonTrigger.displayName = "ContactsModalButtonTrigger";

const ContactsModalButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <ContactsModalButtonTrigger />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Контакти</DialogTitle>
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
          <DrawerTitle>Контакти</DrawerTitle>
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
