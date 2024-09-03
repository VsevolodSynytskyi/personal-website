import { useTranslations } from "next-intl";
import { Suspense } from "react";
import ContactsModalButton from "../contacts/ContactsModalButton";
import LanguageSwitcher from "./LanguageSwitcher";
import PageContentConstructor from "./PageContentConstructor";

const introText = `Привіт!
Я Сєва (або Всеволод)
Тут ви можете ближче познайомитись зі мною.`;

const HomeIntro = () => {
  const t = useTranslations(`HomePage`);

  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-18rem)] md:min-h-[calc(100vh-12rem)]">
      <div className="flex flex-row justify-between">
        <ContactsModalButton />

        <LanguageSwitcher />
      </div>
      <div className="flex flex-col justify-center flex-1">
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
