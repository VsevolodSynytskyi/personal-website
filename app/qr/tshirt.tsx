// pages/qr-networking.js

import { useRouter } from "next/router";
import { useEffect } from "react";

const QrTshirt: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage or any other page
    router.push("/");
  }, [router]);

  return <div>Redirecting...</div>;
};

export default QrTshirt;
