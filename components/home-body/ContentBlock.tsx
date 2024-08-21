import dayjs, { Dayjs } from "dayjs";

import "dayjs/locale/uk"; // Import Ukrainian locale

// Set the locale to Ukrainian
dayjs.locale("uk");

export interface ContentBlockProps {
  title: React.ReactNode;
  dates?: Dayjs[];

  // The first element of array is the shortest content option.
  // The last element of the array is the longest content option
  content?: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <p className="text-sm italic text-muted-foreground">
        {props.dates
          ?.map((date) => date.locale("uk").format("MMMM YYYY"))
          .join(" - ")}
      </p>
      {!!props.content && <div>{props.content}</div>}
    </>
  );
};

export default ContentBlock;
