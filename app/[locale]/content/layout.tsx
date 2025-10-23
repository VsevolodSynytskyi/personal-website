import { Separator } from "@/components/aceternity-ui/separator";
import ContactSection from "@/components/contacts/ContactsSection";
import AdditionalFooterLinks from "@/components/footer/AdditionalFooterLinks";
import HomeIntro from "@/components/intro/HomeIntro";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import ScreenReaderLanguageSwitcher from "@/components/intro/ScreenReaderLanguageSwitcher";
import React from "react";
import ContentPagePaperSection from "@/components/home-body/ContentPagePaperSection";
import { PageParamLocale } from "@/lib/customTypes";

export default async function ContentLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<PageParamLocale>;
}) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const t = await getTranslations({
    locale: locale,
    namespace: "intro",
  });

  return (
    <div className="flex flex-col items-center p-8 sm:pb-24">
      <div className="flex flex-col w-full max-w-sm gap-16">
        <header>
          <h1 className={`sr-only`}>{t("fullName")}</h1>
          <HomeIntro />
        </header>
        <ScreenReaderLanguageSwitcher />
        <ContentPagePaperSection>{children}</ContentPagePaperSection>
        <div className="relative flex flex-col items-center">
          <Separator className="w-[calc(100vw-1rem)] my-10" />
        </div>
        <footer>
          <ContactSection />
          <AdditionalFooterLinks />
        </footer>
      </div>
    </div>
  );
}
