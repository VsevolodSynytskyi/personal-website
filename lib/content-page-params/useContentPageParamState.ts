"use client";
import { useParams, usePathname, useRouter } from "next/navigation";

const contentPageParams = ["contentType", "readTime"] as const;
export type ContentPageParam = (typeof contentPageParams)[number];

type ContentPageParams = Record<ContentPageParam, string | undefined>;

const useContentPageParamState: (
  paramName: ContentPageParam
) => [number, (newValue: number) => void] = (paramName) => {
  const params = useParams<ContentPageParams>();
  if (!params.contentType || !params.readTime) {
    throw new Error("contentType and readTime are required");
  }
  const router = useRouter();
  const pathName = usePathname();

  const setParam = (newValue: number) => {
    // change params in url `/[locale]/content/[contentType]/[readTime]` to new value

    const pathSegments = pathName.split("/");
    switch (paramName) {
      case "contentType":
        pathSegments[3] = String(newValue);
        break;
      case "readTime":
        pathSegments[4] = String(newValue);
        break;
    }

    const newPathName = pathSegments.join("/");
    console.log(newPathName);
    router.replace(newPathName, { scroll: false });
  };

  const param = params[paramName];
  if (!param) {
    throw new Error(`${paramName} is required`);
  }
  const paramValue = Number(param);

  console.log(`${paramName}: ${paramValue}`);

  return [paramValue, setParam];
};

export default useContentPageParamState;
