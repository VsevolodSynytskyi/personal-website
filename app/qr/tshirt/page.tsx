"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const QrTshirtPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {}, [router.push("/")]);

  return null;
};

export default QrTshirtPage;
