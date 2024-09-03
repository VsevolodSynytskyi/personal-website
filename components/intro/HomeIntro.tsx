import { locales } from "@/lib/i18n/locales";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Suspense } from "react";
import ContactsModalButton from "../contacts/ContactsModalButton";
import CustomLink from "../CustomLink";
import PageContentConstructor from "./PageContentConstructor";

const introText = `Привіт!
Я Сєва (або Всеволод)
Тут ви можете ближче познайомитись зі мною.`;

const HomeIntro = () => {
  const t = useTranslations(`HomePage`);

  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-18rem)] md:min-h-[calc(100vh-12rem)]">
      <ContactsModalButton />
      <div className="flex flex-col justify-center flex-1">
        <div className="flex flex-col gap-16">
          {/* TODO: Remove code ... */}
          <div>
            <p>testing translations</p>
            <p>{t("title")}</p>
            <p>{t("about")}</p>
            <div className="space-x-4">
              {locales.map((locale) => (
                <CustomLink key={locale} locale={locale} href={"/"}>
                  {locale}
                </CustomLink>
              ))}
            </div>
            <div>
              <Link locale="uk" className="underline" href="/">
                Switch to Ukrainian
              </Link>{" "}
            </div>
          </div>
          {/* ... until here */}
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
