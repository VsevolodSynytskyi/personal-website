import dayjsExtended, { defaultDayjsFormat } from "@/lib/dayjsExtended";
import { useLocale } from "next-intl";

interface DateSubtitleProps {
  dates: string[];
}

const DateSubtitle: React.FC<DateSubtitleProps> = (props) => {
  const locale = useLocale();
  dayjsExtended.locale(locale);

  let dayStrings: string[] = [];
  props.dates?.forEach((dateStr) => {
    const date = dayjsExtended(dateStr, defaultDayjsFormat);
    if (date.isValid()) {
      dayStrings.push(date.format("MMM YYYY"));
    }
  });

  const daysText = dayStrings.join(" - ");

  return (
    <>
      {!!daysText && (
        <p className="text-sm italic text-muted-foreground">{daysText}</p>
      )}
    </>
  );
};

export default DateSubtitle;
