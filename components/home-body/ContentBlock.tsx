import useSearchParamState from "@/lib/useSearchParamState";
import dayjs, { Dayjs } from "dayjs";

import "dayjs/locale/uk"; // Import Ukrainian locale

// Set the locale to Ukrainian
dayjs.locale("uk");

export interface ContentBlockProps {
  title: React.ReactNode;
  dates?: Dayjs[];

  // The first element of array is the shortest content option.
  // The last element of the array is the longest content option
  contentByLength: React.ReactNode[];
}

const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const [readTimeValue] = useSearchParamState("read_time");
  const readTime =
    typeof readTimeValue === "string" ? parseInt(readTimeValue) : null;

  let content: React.ReactNode = null;

  // Validation
  if (typeof readTime !== "number" || isNaN(readTime)) {
    return null;
  }

  if (props.contentByLength.length) {
    content =
      props.contentByLength[
        Math.min(readTime, props.contentByLength.length - 1)
      ];
  }

  return (
    <>
      <h3>{props.title}</h3>
      <p className="text-sm italic text-muted-foreground">
        {props.dates
          ?.map((date) => date.locale("uk").format("MMMM YYYY"))
          .join(" - ")}
      </p>
      {!!content && <div>{content}</div>}
    </>
  );
};

export default ContentBlock;
