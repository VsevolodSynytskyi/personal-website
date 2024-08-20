import React from "react";

import CustomSlider from "../CustomSlider";

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

  const onStepCommit = (commitedStep: number) => {
    props.onValueChange?.(commitedStep);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm text-muted-foreground">{props.title}</div>
      <div className="flex flex-col gap-0">
        {(props.minText || props.maxText) && (
          <div className="flex flex-row justify-between text-sm">
            <div>{props.minText}</div>
            <div>{props.maxText}</div>
          </div>
        )}
        <CustomSlider
          onStepCommit={onStepCommit}
          min={MIN_STEP}
          max={3}
          step={STEP_SIZE}
        />
      </div>
    </div>
  );
};

export default SliderBlock;
