import useReadTimeParam from "@/lib/useReadTimeParam";
import { useTranslations } from "next-intl";
import SliderBlock from "./SliderBlock";

const TimeToReadSlider: React.FC = () => {
  const [sliderValue, setSliderValue] = useReadTimeParam();
  const t = useTranslations("timeToReadSlider");

  const tooltipTextTransform = (n: number) => {
    return t(`values.${n}`) || null;
  };

  return (
    <SliderBlock
      stepsNumber={4}
      title={t("title")}
      minText={t("minText")}
      maxText={t("maxText")}
      value={sliderValue}
      onValueChange={setSliderValue}
      tooltipTextTransform={tooltipTextTransform}
    />
  );
};

export default TimeToReadSlider;
