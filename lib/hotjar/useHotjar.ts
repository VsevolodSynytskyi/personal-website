import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import environment from "../environment";

const useHotjar = () => {
  useEffect(() => {
    console.group("Hotjar");
    if (environment !== "production") {
      console.log("environment is not production");
      console.groupEnd();
      return;
    }

    const hjid = process.env.NEXT_PUBLIC_HOTJAR_ID;
    const hjsv = process.env.NEXT_PUBLIC_HOTJAR_SV;
    console.log(`hjid type is ${typeof hjid}`);
    console.log(`hjsv type is ${typeof hjsv}`);
    if (hjid !== undefined && hjsv !== undefined) {
      hotjar.initialize({ id: +hjid, sv: +hjsv });
      console.log("initializing");
    }
    console.groupEnd();
  }, []);

  return null;
};

export default useHotjar;
