import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import environment from "../environment";

const useHotjar = () => {
  useEffect(() => {
    if (environment !== "production") {
      return;
    }
    const hjid = process.env.NEXT_PUBLIC_HOTJAR_ID;
    const hjsv = process.env.NEXT_PUBLIC_HOTJAR_SV;
    if (hjid !== undefined && hjsv !== undefined) {
      hotjar.initialize({ id: +hjid, sv: +hjsv });
    }
  }, []);

  return null;
};

export default useHotjar;
