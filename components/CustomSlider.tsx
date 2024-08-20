import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

interface CustomSliderProps {
  min?: number;
  max?: number;
  step?: number;
  onStepCommit?: (newStep: number) => void;
  defaultValue?: number;
  tooltipText?: string;
}

const CustomSlider: React.FC<CustomSliderProps> = (props) => {
  const [wrapperRef, wrapperBounds] = useMeasure();
  const [pointerElRef, draggableElBounds] = useMeasure();
  const [tooltipOpen, setTooltipOpen] = useState(false);

  // values

  const minValue = props.min || 0;
  const maxValue = props.max || 1000;
  const valueRange = maxValue - minValue;
  const numberOfSteps = maxValue - minValue;
  const stepWidth = wrapperBounds.width / numberOfSteps;

  const maxPosition = wrapperBounds.width - draggableElBounds.width / 2;
  const minPositon = draggableElBounds.width / 2;

  // Animation

  const x = useMotionValue(16);
  const tooltipX = useSpring(x, { stiffness: 300, damping: 20 });
  const pointerX = useSpring(x, { stiffness: 500, damping: 20 });
  //

  // Calculations
  const getRelativePointerPosition = (clientX: number) => {
    return getConstrainedValue(clientX - wrapperBounds.left);
  };

  const getConstrainedValue = (value: number) => {
    return Math.max(Math.min(value, maxPosition), minPositon);
  };

  const getSnappedPointerPosition = (originalPosition: number) => {
    const stepIndex = stepWidth ? Math.round(originalPosition / stepWidth) : 1;
    const snapedPosition = stepIndex * stepWidth;
    return getConstrainedValue(snapedPosition);
  };

  // Event handlers
  const handlePointerMove = (e: PointerEvent) => {
    x.set(getRelativePointerPosition(e.clientX));
    commitValue();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setTooltipOpen(true);
    x.set(getRelativePointerPosition(e.clientX));
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const commitValue = () => {
    const snappedPosition = getSnappedPointerPosition(x.get());
    // Commit value
    if (props.onStepCommit) {
      let valueToCommit = minValue;
      if (snappedPosition <= minPositon) {
        valueToCommit = minValue;
      } else if (snappedPosition >= maxPosition) {
        valueToCommit = maxValue;
      } else {
        valueToCommit = (snappedPosition / wrapperBounds.width) * valueRange;
      }
      props.onStepCommit(valueToCommit);
    }
  };

  const handlePointerUp = () => {
    // Snap to position
    const snappedPosition = getSnappedPointerPosition(x.get());
    x.set(snappedPosition);
    //
    commitValue();
    setTooltipOpen(false);
    // Clean up listeners
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
  };

  useEffect(() => {
    if (wrapperBounds.width > 0 && draggableElBounds.width > 0) {
      if (typeof props.defaultValue === "number") {
        x.jump(getSnappedPointerPosition(props.defaultValue * stepWidth));
      }
    }
  }, [wrapperBounds, draggableElBounds]);

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center justify-center w-full h-8 cursor-pointer touch-none"
      onPointerDown={handlePointerDown}
    >
      {/* Horizontal lines */}
      <div className="absolute flex flex-row items-center w-full h-full gap-1 pointer-events-none">
        {Array.from({ length: numberOfSteps }, (_, index) => (
          <div className="flex-1 h-px bg-primary" key={index}></div>
        ))}
      </div>
      {/* Tooltip */}
      <AnimatePresence>
        {props.tooltipText && (
          <motion.div
            className={`pointer-events-none absolute w-0 z-10 left-0 select-none -top-12 flex items-center justify-center`}
            style={{ x: tooltipX }}
          >
            <motion.div
              animate={
                tooltipOpen
                  ? {
                      scale: 1,
                      opacity: 1,
                    }
                  : {
                      scale: 0,
                      opacity: 0,
                      y: 16,
                    }
              }
              className="px-2 py-1 border rounded shadow-md whitespace-nowrap text-primary bg-background border-border"
            >
              <AnimatePresence>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, position: "absolute" }}
                  key={props.tooltipText}
                >
                  {props.tooltipText}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pointer */}
      <motion.div
        ref={pointerElRef}
        className="absolute top-0 left-0 w-8 h-8 -mx-4 transition-none bg-white border rounded-full shadow-md opacity-0 cursor-pointer border-primary"
        style={{ x: pointerX }}
        animate={{
          opacity: 1,
        }}
      ></motion.div>
    </div>
  );
};

export default CustomSlider;
