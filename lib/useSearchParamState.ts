import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useSearchParamState: (
  searchParamsName: string
) => [string | null, (searcParamsValue: string) => void] = (
  searchParamName
) => {
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
      `${pathname}?${createQueryString(searchParamName, searchParamValue)}`,
      { scroll: false }
    );
  };

  return [searchParamState, setSearchParam];
};

export default useSearchParamState;
