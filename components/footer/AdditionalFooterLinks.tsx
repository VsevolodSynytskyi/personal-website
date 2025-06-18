"use client";

import { CV_URL, GITHUB_REPO_URL, INSTAGRAM_URL } from "@/lib/constants";
import CustomLink from "../CustomLink";
import React from "react";

const AdditionalFooterLinks: React.FC = () => {
  const links: {
    href: string;
    label: React.ReactNode;
  }[] = [
    { href: CV_URL, label: "CV" },
    { href: GITHUB_REPO_URL, label: "GitHub Repo" },
    { href: INSTAGRAM_URL, label: "Instagram" },
  ];

  return (
    <div>
      {links.map((link, index) => (
        <React.Fragment key={link.href}>
          {!!index && ", "}
          <CustomLink href={link.href}>{link.label}</CustomLink>
        </React.Fragment>
      ))}
    </div>
  );
};

export default AdditionalFooterLinks;
