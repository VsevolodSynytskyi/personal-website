import useSearchParamState, { searchParamToIndex } from "./useSearchParamState";

const useReadTimeParam: () => [number, (newValue: number) => void] = () => {
  const [readTimeValue, setReadTimeValue] = useSearchParamState(
    "read_time",
    "0"
  );

  const readTimeIndex = searchParamToIndex(readTimeValue);

  const setReadTimeIndex = (newValue: number) =>
    setReadTimeValue(newValue + "");

  return [readTimeIndex, setReadTimeIndex];
};

export default useReadTimeParam;
