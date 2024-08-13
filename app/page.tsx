"use client";

import ContactSection from "../components/contacts/ContactsSection";
import HomeBody from "../components/HomeBody";
import HomeIntro from "../components/HomeIntro";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col w-full max-w-sm gap-16">
        <HomeIntro />
        <HomeBody />
        <ContactSection />
      </div>
    </div>
  );
}
