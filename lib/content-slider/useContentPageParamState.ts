"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import { isValidLocale } from "@/lib/i18n/locales";

const contentPageParams = ["contentType", "readTime"] as const;
export type ContentPageParam = (typeof contentPageParams)[number];

type ContentPageParams = Record<ContentPageParam, number>;

// url example: `/[locale]/content/2/1`;
//  2 is content type index, 1 is read time index

const useContentPageParamState: (
  paramName: ContentPageParam
) => [number, (newValue: number) => void] = (paramName) => {
  // set up
  const router = useRouter();
  const pathName = usePathname();
  const params = useParams();
  const locale = params.locale;
  const urlPrefix = `/${locale}/content/`;

  // url validation
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  if (!pathName.startsWith(urlPrefix)) {
    throw new Error(`Invalid url: ${pathName}`);
  }

  // 1. extract contentType and readTime from url

  const pathNameWithoutPrefix = pathName.replace(urlPrefix, "");
  const contentParamsArray = pathNameWithoutPrefix.split("/");
  if (contentParamsArray.length !== 2) {
    throw new Error(`Invalid url: ${pathName}`);
  }
  const [contentType, readTime] = contentParamsArray;
  const contentTypeValue = Number(contentType);
  const readTimeValue = Number(readTime);

  const contentParams: ContentPageParams = {
    contentType: contentTypeValue,
    readTime: readTimeValue,
  };

  if (isNaN(contentTypeValue) || isNaN(readTimeValue)) {
    throw new Error(`Invalid url: ${pathName}`);
  }

  const setParam = (newValue: number) => {
    const pathSegments = [urlPrefix, newValue, newValue];
    const newPathName = pathSegments.join("/");
    router.replace(newPathName, { scroll: false });
  };

  return [contentParams[paramName], setParam];
};

export default useContentPageParamState;
