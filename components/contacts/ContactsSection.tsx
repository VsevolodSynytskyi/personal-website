import ContactsBody from "./ContactsBody";
import { getTranslations } from "next-intl/server";

const ContactSection: React.FC = async () => {
  const t = await getTranslations("contacts");
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
