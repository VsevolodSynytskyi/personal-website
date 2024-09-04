import { useTranslations } from "next-intl";
import ContactsBody from "./ContactsBody";

const ContactSection: React.FC = () => {
  const t = useTranslations("contacts");
  return (
    <div className="">
      <h2 className="text-2xl font-semibold tracking-tight scroll-m-20">
        {t("title")}
      </h2>
      <ContactsBody />
    </div>
  );
};

export default ContactSection;
