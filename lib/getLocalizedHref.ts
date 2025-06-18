import { usePathname, useSearchParams } from "next/navigation";

const useGetLocalizedHref = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getLocalizedHref: (locale: string) => string = (locale) => {
    // Extract current path segments
    const pathSegments = pathname.split("/");

    // Replace the language segment with the new language
    pathSegments[1] = locale;

    // Reconstruct the path with the new language
    const newPathname = pathSegments.join("/");

    // Construct the new path while preserving query parameters
    return `${newPathname}?${searchParams.toString()}`;
  };

  return getLocalizedHref;
};

export default useGetLocalizedHref;
