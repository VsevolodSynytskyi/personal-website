import dayjs, { Dayjs } from "dayjs";
import { PropsWithChildren } from "react";

import "dayjs/locale/uk"; // Import Ukrainian locale

// Set the locale to Ukrainian
dayjs.locale("uk");

export interface ContentBlockProps extends PropsWithChildren {
  title: React.ReactNode;
  dates?: Dayjs[];
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
      <div>{props.children}</div>
    </>
  );
};

export default ContentBlock;
