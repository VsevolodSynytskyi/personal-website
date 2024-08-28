import useContentTypeParam from "@/lib/useContentTypeParam";
import React from "react";
import SliderBlock from "./SliderBlock";

const stepTitle = `Що вас цікавить?`;
const minText = `Професійне`;
const maxText = `Особисте`;

const ContentTypeSlider: React.FC = () => {
  const [contentType, setContentType] = useContentTypeParam();

  const tooltipTextTransform = (n: number) => {
    switch (n) {
      case 0:
        return "Тільки професійне";
      case 1:
        return "Більше професійного";
      case 2:
        return "Більше особистого";
      case 3:
        return "Тільки особисте";
      default:
        return "50 на 50";
    }
  };

  return (
    <SliderBlock
      stepsNumber={4}
      title={stepTitle}
      minText={minText}
      maxText={maxText}
      value={contentType}
      onValueChange={setContentType}
      tooltipTextTransform={tooltipTextTransform}
    />
  );
};
export default ContentTypeSlider;
