import useSearchParamState, { searchParamToIndex } from "./useSearchParamState";

const useContentTypeParam: () => [number, (newValue: number) => void] = () => {
  const [contentTypeValue, setContentTypeValue] = useSearchParamState(
    "content_type",
    "0"
  );

  const contentTypeIndex = searchParamToIndex(contentTypeValue);

  const setContentTypeIndex = (newValue: number) =>
    setContentTypeValue(newValue + "");

  return [contentTypeIndex, setContentTypeIndex];
};

export default useContentTypeParam;
