import dayjs from "dayjs";
import "dayjs/locale/uk"; // Ukrainian locale
import customParseFormat from "dayjs/plugin/customParseFormat";

const dayjsExtended = dayjs;

dayjsExtended.extend(customParseFormat);
dayjsExtended.locale("uk");

export const defaultDayjsFormat = "MM YYYY";

export default dayjsExtended;
