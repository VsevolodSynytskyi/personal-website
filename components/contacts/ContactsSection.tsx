import ContactsBody from "./ContactsBody";

const ContactSection: React.FC = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold tracking-tight scroll-m-20">
        Контакти
      </h2>
      <ContactsBody />
    </div>
  );
};

export default ContactSection;
