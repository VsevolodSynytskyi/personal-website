import { useState } from "react";

import SliderBlock from "./SliderBlock";

const stepTitle = `Час на прочитання`;
const minText = `10 сек`;
const maxText = `2 хв`;

const TimeToReadSlider: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const tooltipTextTransform = (n: number) => {
    if (n <= 0.25) {
      return "10 секунд";
    }
    if (n <= 0.5) {
      return "30 секунд";
    }
    if (n <= 0.75) {
      return "1 хвилина";
    }
    return "2 хвилини";
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

export default TimeToReadSlider;
