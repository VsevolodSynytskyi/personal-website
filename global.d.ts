import en from "./lib/i18n/messages/en.json";
import uk from "./lib/i18n/messages/uk.json";

type CommonKeys = keyof typeof en & keyof typeof uk;

type Messages = {
  [K in CommonKeys]: (typeof en)[K] & (typeof uk)[K];
};

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
