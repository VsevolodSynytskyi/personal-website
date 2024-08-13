import ContactsModalButton from "./contacts/ContactsModalButton";

const HomeIntro = () => {
  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-16rem)]">
      <ContactsModalButton />
      <div className="flex flex-col justify-end">
        <div>intro text</div>
        <div>Page Content Constructor</div>
      </div>
    </div>
  );
};

export default HomeIntro;
