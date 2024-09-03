import dayjs from "dayjs";
import "dayjs/locale/en"; // English locale
import "dayjs/locale/uk"; // Ukrainian locale
import customParseFormat from "dayjs/plugin/customParseFormat";

const dayjsExtended = dayjs;

dayjsExtended.extend(customParseFormat);

export const defaultDayjsFormat = "MM YYYY";

export default dayjsExtended;
