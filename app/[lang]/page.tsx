"use client";

import { Separator } from "@/components/aceternity-ui/separator";
import ContactSection from "@/components/contacts/ContactsSection";
import Footer from "@/components/footer/Footer";
import HomeBody from "@/components/home-body/HomeBody";
import HomeIntro from "@/components/intro/HomeIntro";
import { NextPage } from "next";

const Home: NextPage<{
  params: {
    lang: string;
  };
}> = ({ params }) => {
  const lang = params.lang;
  return (
    <div className="flex flex-col items-center p-8 sm:pb-24">
      <div className="flex flex-col w-full max-w-sm gap-16">
        <HomeIntro />
        <HomeBody />
        <div className="relative flex flex-col items-center">
          <Separator className="w-[calc(100vw-1rem)] my-10" />
        </div>
        <div>
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
