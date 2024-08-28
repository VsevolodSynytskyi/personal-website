import { CV_URL, GITHUB_REPO_URL } from "@/lib/constants";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="">
      <Link className="underline" href={CV_URL}>
        CV
      </Link>
      ,{" "}
      <Link className="underline" href={GITHUB_REPO_URL}>
        GitHub Repo
      </Link>
    </div>
  );
};

export default Footer;
