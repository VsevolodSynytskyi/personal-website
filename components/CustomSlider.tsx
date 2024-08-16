import { motion, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import useMeasure from "react-use-measure";

interface CustomSliderProps {
  min?: number;
  max?: number;
  step?: number;

  onStepCommit?: (newStep: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = (props) => {
  const constraintsRef = useRef(null);
  const [wrapperRef, wrapperBounds] = useMeasure();
  const [draggableElRef, draggableElBounds] = useMeasure();
  const [isDragging, setIsDragging] = useState(false);
  const [percentPosition, setPercentPosition] = useState<null | number>(null);

  const minValue = typeof props.min === "number" ? props.min : 0;
  const maxValue = typeof props.max === "number" ? props.max : 100;
  const stepValue = typeof props.step === "number" ? props.step : 1;

  const numberOfSteps = (maxValue - minValue) / stepValue;
  const stepWidth = 100 / numberOfSteps; // Assuming width is 100% of the container

  const x = useMotionValue(percentPosition);

  const handleDragStart = () => {
    setIsDragging(true);
    setPercentPosition(null);
  };

  const handleDragEnd = (clientX: number) => {
    setIsDragging(false);
    const relativeX = clientX - wrapperBounds.left;
    const realPercentPosition = Math.max(
      0,
      Math.min(100, (relativeX / wrapperBounds.width) * 100)
    );
    const stepIndex = Math.round(realPercentPosition / stepWidth);
    const snapedPercentPosition = stepIndex * stepWidth;
    setPercentPosition(snapedPercentPosition);
    props.onStepCommit?.(stepIndex);
  };

  return (
    <>
      <div>
        <div>{`is Dragging:${isDragging}`}</div>
        <div>{`percentPosition is ${percentPosition}`}</div>
      </div>
      <div
        ref={wrapperRef}
        className="relative flex items-center justify-center w-full h-8 touch-none"
      >
        <div className="absolute flex flex-row items-center w-full h-full gap-1">
          {Array.from({ length: numberOfSteps }, (_, index) => (
            <div className="flex-1 h-px bg-primary" key={index}></div>
          ))}
        </div>
        <motion.div className="absolute w-full h-full" ref={constraintsRef} />

        <motion.div
          ref={draggableElRef}
          className="absolute top-0 left-0 w-8 h-8 bg-white border rounded-full shadow-md cursor-pointer border-primary"
          dragElastic={0.1}
          drag
          dragConstraints={constraintsRef}
          dragMomentum={false}
          animate={
            typeof percentPosition === "number"
              ? {
                  x:
                    ((wrapperBounds.width - draggableElBounds.width) *
                      percentPosition) /
                    100,
                }
              : undefined
          }
          onMouseDown={handleDragStart}
          onDragEnd={(e, info) => {
            handleDragEnd(info.point.x);
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default CustomSlider;
