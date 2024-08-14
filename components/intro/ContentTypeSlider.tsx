import React from "react";

import { useState } from "react";

import SliderBlock from "./SliderBlock";

const stepTitle = `Що вас цікавить?`;
const minText = `Професійне`;
const maxText = `Особисте`;

const ContentTypeSlider: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const tooltipTextTransform = (n: number) => {
    if (n === 0) {
      return "Тільки професійне";
    }
    if (n < 0.5) {
      return "Більше професійного";
    }
    if (n < 1) {
      return "Більше особистого";
    }

    return "Тільки особисте";
  };

  return (
    <SliderBlock
      stepsNumber={4}
      title={stepTitle}
      minText={minText}
      maxText={maxText}
      value={sliderValue}
      onValueChange={setSliderValue}
      tooltipTextTransform={tooltipTextTransform}
    />
  );
};
export default ContentTypeSlider;
