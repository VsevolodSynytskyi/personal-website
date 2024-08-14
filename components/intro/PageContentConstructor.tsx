import React, { useState } from "react";
import { Slider } from "../ui/slider";

const stepTitle = `Що тебе цікавить?`;
const minText = `Професійне`;
const maxText = `Особисте`;

interface SliderBlockProps {
  title?: string;
  minText?: string;
  maxText?: string;
  stepsNumber: number;

  value?: number;
  onValueChange?: (newValue: number) => void;
}

const SliderBlock: React.FC<SliderBlockProps> = (props) => {
  const stepSize = 1 / Math.max(props.stepsNumber - 1, 1);

  return (
    <div className="flex flex-col gap-2">
      <div>{props.title}</div>
      <div className="flex flex-col gap-0">
        {(props.minText || props.maxText) && (
          <div className="flex flex-row justify-between">
            <div>{props.minText}</div>
            <div>{props.maxText}</div>
          </div>
        )}
        <Slider
          value={typeof props.value === "number" ? [props.value] : undefined}
          onValueChange={([newValue]) => {
            props.onValueChange && props.onValueChange(newValue);
          }}
          min={0}
          max={1}
          step={stepSize}
        />
      </div>
    </div>
  );
};

const PageContentConstructor: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div className="flex flex-col gap-8">
      <div>{`curent value: ${sliderValue}`}</div>
      <SliderBlock
        stepsNumber={5}
        title={stepTitle}
        minText={minText}
        maxText={maxText}
        value={sliderValue}
        onValueChange={setSliderValue}
      />
      <SliderBlock value={sliderValue} stepsNumber={5} />
    </div>
  );
};

export default PageContentConstructor;
