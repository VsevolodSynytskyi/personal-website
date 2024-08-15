import React from "react";
import { Slider } from "../ui/slider";

interface SliderBlockProps {
  title?: string;
  minText?: string;
  maxText?: string;
  stepsNumber: number;
  tooltipTextTransform: (n: number) => string;
  value?: number;
  onValueChange?: (newValue: number) => void;
}

const STEP_SIZE = 1;
const MIN_STEP = 0;

const SliderBlock: React.FC<SliderBlockProps> = (props) => {
  const value = props.value;

  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm text-muted-foreground">{props.title}</div>
      <div className="flex flex-col gap-2">
        {(props.minText || props.maxText) && (
          <div className="flex text-sm flex-row justify-between">
            <div>{props.minText}</div>
            <div>{props.maxText}</div>
          </div>
        )}

        <Slider
          tooltipText={
            typeof value === "number"
              ? props.tooltipTextTransform(value)
              : undefined
          }
          value={typeof props.value === "number" ? [props.value] : [MIN_STEP]}
          onValueChange={([newValue]) => {
            props.onValueChange && props.onValueChange(newValue);
          }}
          defaultValue={[MIN_STEP]}
          min={MIN_STEP}
          max={props.stepsNumber - 1}
          step={STEP_SIZE}
        />
      </div>
    </div>
  );
};

export default SliderBlock;
