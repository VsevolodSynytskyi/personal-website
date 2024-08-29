import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";

export interface CustomSliderProps {
  min?: number;
  max?: number;
  step?: number;
  onStepCommit?: (newStep: number) => void;
  defaultValue?: number;
  tooltipTextTransform?: (value: number) => string | null;
}

const CustomSlider: React.FC<CustomSliderProps> = (props) => {
  const [wrapperRef, wrapperBounds] = useMeasure();
  const [pointerElRef, draggableElBounds] = useMeasure();
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const commitTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the timeout ID
  const [tooltipText, setTooltipText] = useState<null | string>();

  // values
  const minValue = props.min || 0;
  const maxValue = props.max || 1000;
  const valueRange = maxValue - minValue;
  const numberOfSteps = maxValue - minValue;
  const stepWidth = wrapperBounds.width / numberOfSteps;

  const getMinMaxPosition = () => {
    const pointerSize = 32;
    return {
      minPosition: pointerSize / 2,
      maxPosition: wrapperBounds.width - pointerSize / 2,
    };
  };

  // Animation
  const x = useMotionValue(16);
  const tooltipX = useSpring(x, { stiffness: 300, damping: 20 });
  const pointerX = useSpring(x, { stiffness: 600, damping: 40 });

  // Calculations
  const getRelativePointerPosition = (clientX: number) => {
    return getConstrainedValue(clientX - wrapperBounds.left);
  };

  const getConstrainedValue = (value: number) => {
    const { minPosition, maxPosition } = getMinMaxPosition();
    return Math.max(Math.min(value, maxPosition), minPosition);
  };

  const getSnappedPointerPosition = (originalPosition: number) => {
    const stepIndex = stepWidth ? Math.round(originalPosition / stepWidth) : 1;
    const snapedPosition = stepIndex * stepWidth;
    return getConstrainedValue(snapedPosition);
  };

  const updateTooltipText = () => {
    if (props.tooltipTextTransform) {
      setTooltipText(props.tooltipTextTransform(getTransformedSliderValue()));
    }
  };

  // Event handlers
  const handlePointerMove = (e: PointerEvent) => {
    x.set(getRelativePointerPosition(e.clientX));

    // Clear the previous timeout
    if (commitTimeoutRef.current) {
      clearTimeout(commitTimeoutRef.current);
    }

    // Set a new timeout to commit the value after 100ms
    commitTimeoutRef.current = setTimeout(() => {
      commitValue();
    }, 100);

    // Update tooltip text
    updateTooltipText();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    // Start cursour position tracking
    x.set(getRelativePointerPosition(e.clientX));
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // Update tooltip
    setTooltipOpen(true);
    updateTooltipText();
  };

  const getTransformedSliderValue = () => {
    const snappedPosition = getSnappedPointerPosition(x.get());
    const { minPosition, maxPosition } = getMinMaxPosition();
    if (snappedPosition <= minPosition) {
      return minValue;
    } else if (snappedPosition >= maxPosition) {
      return maxValue;
    } else {
      return (snappedPosition / wrapperBounds.width) * valueRange;
    }
  };

  const commitValue = () => {
    if (props.onStepCommit) {
      const valueToCommit = getTransformedSliderValue();
      props.onStepCommit(valueToCommit);
    }
  };

  const handlePointerUp = () => {
    // Snap to position
    const snappedPosition = getSnappedPointerPosition(x.get());
    x.set(snappedPosition);

    // Clear the timeout if the pointer is released before 100ms
    if (commitTimeoutRef.current) {
      clearTimeout(commitTimeoutRef.current);
      commitTimeoutRef.current = null;
    }

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
        {tooltipText && tooltipOpen && (
          <motion.div
            className={`pointer-events-none absolute w-0 z-10 left-0 select-none -top-12 flex items-center justify-center`}
            style={{ x: tooltipX }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            initial={{
              scale: 0,
              opacity: 0,
              y: 16,
            }}
            exit={{
              scale: 0,
              opacity: 0,
              y: 16,
            }}
          >
            <motion.div className="px-2 py-1 border rounded shadow-md whitespace-nowrap text-primary bg-background border-border">
              <AnimatePresence>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, position: "absolute" }}
                  key={tooltipText}
                >
                  {tooltipText}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pointer */}
      <AnimatePresence>
        <motion.div
          ref={pointerElRef}
          className="absolute top-0 left-0 w-8 h-8 -mx-4 transition-none bg-white border rounded-full shadow-md cursor-pointer border-primary"
          style={{ x: pointerX }}
          animate={{
            scale: 1,
          }}
          exit={{ scale: 0 }}
          initial={{ scale: 0 }}
        ></motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CustomSlider;
