"use client";

import { CV_URL, GITHUB_REPO_URL } from "@/lib/constants";
import CustomLink from "../CustomLink";

const Footer: React.FC = () => {
  return (
    <div className="">
      <CustomLink href={CV_URL}>CV</CustomLink>,{" "}
      <CustomLink href={GITHUB_REPO_URL}>GitHub Repo</CustomLink>
    </div>
  );
};

export default Footer;
