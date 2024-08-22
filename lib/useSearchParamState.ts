import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const searchParamToNumber = (searchParam: string) => {
  return typeof searchParam === "string" ? parseInt(searchParam) : null;
};

export const searchParamToIndex: (searchParam: null | string) => number = (
  searchParam
) =>
  typeof searchParam === "string" ? searchParamToNumber(searchParam) || 0 : 0;

const useSearchParamState = (
  searchParamName: string,
  defaultValue?: string
): [string | null, (searcParamsValue: string) => void] => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchParamState = searchParams.get(searchParamName);

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const setSearchParam = (searchParamValue: string) => {
    router.push(
      `${pathname}?${createQueryString(
        searchParamName,
        searchParamValue.toString()
      )}`,
      { scroll: false }
    );
  };

  if (defaultValue !== undefined) {
    if (searchParamState === null) {
      setSearchParam(defaultValue);
    }
  }

  return [searchParamState, setSearchParam];
};

export default useSearchParamState;
