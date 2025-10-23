import useContentPageParamState from "@/lib/content-page-params/useContentPageParamState";
import { useTranslations } from "next-intl";
import SliderBlock from "./SliderBlock";

const ContentTypeSlider: React.FC = () => {
  const [contentType, setContentType] = useContentPageParamState("contentType");
  const t = useTranslations("contentTypeSlider");

  const tooltipTextTransform = (n: number) => {
    return t(`values.${n}`) || null;
  };

  return (
    <SliderBlock
      stepsNumber={4}
      title={t("title")}
      minText={t("minText")}
      maxText={t("maxText")}
      value={contentType}
      onValueChange={setContentType}
      tooltipTextTransform={tooltipTextTransform}
    />
  );
};
export default ContentTypeSlider;
