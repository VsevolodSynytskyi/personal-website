"use client";
import { CV_URL } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../aceternity-ui/button";

const CvButton: React.FC = () => {
  return (
    <Button className="w-full mt-6" asChild>
      <Link href={CV_URL}>
        <ExternalLink className="w-4 h-4 mr-2" /> CV
      </Link>
    </Button>
  );
};

export default CvButton;
