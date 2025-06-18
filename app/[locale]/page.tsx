import { Separator } from "@/components/aceternity-ui/separator";
import ContactSection from "@/components/contacts/ContactsSection";
import AdditionalFooterLinks from "@/components/footer/AdditionalFooterLinks";
import HomeBody from "@/components/home-body/HomeBody";
import HomeIntro from "@/components/intro/HomeIntro";
import { PageParamLocale } from "@/lib/customTypes";
import { NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

const Home: NextPage<{
  params: PageParamLocale;
}> = (props) => {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations(`intro`);
  return (
    <div className="flex flex-col items-center p-8 sm:pb-24">
      <div className="flex flex-col w-full max-w-sm gap-16">
        <header>
          <h1 className={`sr-only`}>{t("fullName")}</h1>
          <HomeIntro />
        </header>
        <HomeBody />
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
};

export default Home;
