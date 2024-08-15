import { Suspense } from "react";
import ContactsModalButton from "../contacts/ContactsModalButton";
import PageContentConstructor from "./PageContentConstructor";

const introText = `Привіт!
Я Сєва (або Всеволод)
Тут ви можете детальніше познайомитись зі мною.`;

const HomeIntro = () => {
  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-12rem)]">
      <ContactsModalButton />
      <div className="flex flex-col justify-end">
        <div className="flex flex-col gap-16">
          <div className="whitespace-pre-line">{introText}</div>
          <Suspense>
            <PageContentConstructor />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
