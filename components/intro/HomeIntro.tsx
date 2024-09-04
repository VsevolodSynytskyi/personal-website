import revealAnimation from "@/lib/animations/blurRevealAnimation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ContactsModalButton from "../contacts/ContactsModalButton";
import LanguageSwitcher from "./LanguageSwitcher";
import PageContentConstructor from "./PageContentConstructor";

const HomeIntro = () => {
  const t = useTranslations(`intro`);

  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-18rem)] md:min-h-[calc(100vh-12rem)]">
      <motion.div
        initial={revealAnimation.initial}
        animate={revealAnimation.animate}
        className="flex flex-row justify-between"
      >
        <ContactsModalButton />
        <LanguageSwitcher />
      </motion.div>
      <div className="flex flex-col justify-center flex-1">
        <div className="flex flex-col gap-16">
          <motion.div
            initial={revealAnimation.initial}
            animate={revealAnimation.animate}
            className="whitespace-pre-line"
          >
            {t("intro")}
          </motion.div>
          <PageContentConstructor />
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
