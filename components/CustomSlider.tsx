import { motion, useSpring } from "framer-motion";
import useMeasure from "react-use-measure";

interface CustomSliderProps {
  min?: number;
  max?: number;
  step?: number;
  onStepCommit?: (newStep: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = (props) => {
  const [wrapperRef, wrapperBounds] = useMeasure();
  const [pointerElRef, draggableElBounds] = useMeasure();

  // values

  const minValue = props.min || 0;
  const maxValue = props.max || 1000;
  const valueRange = maxValue - minValue;
  const numberOfSteps = maxValue - minValue;
  const stepWidth = wrapperBounds.width / numberOfSteps;

  const maxPosition = wrapperBounds.width - draggableElBounds.width / 2;
  const minPositon = draggableElBounds.width / 2;
  const positionRange = maxPosition - minPositon;

  // Animation

  const pointerX = useSpring(16, { stiffness: 500, damping: 20 });
  //

  // Calculations
  const getRelativePointerPosition = (clientX: number) => {
    return getConstrainedValue(clientX - wrapperBounds.left);
  };

  const getConstrainedValue = (value: number) => {
    return Math.max(Math.min(value, maxPosition), minPositon);
  };

  const getSnappedPointerPosition = (originalPosition: number) => {
    const stepIndex = Math.round(originalPosition / stepWidth);
    const snapedPercentPosition = stepIndex * stepWidth;

    return getConstrainedValue(snapedPercentPosition);
  };

  // Event handlers
  const handlePointerMove = (e: PointerEvent) => {
    pointerX.set(getRelativePointerPosition(e.clientX));
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerX.set(getRelativePointerPosition(e.clientX));
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerUp = (e: PointerEvent) => {
    // Snap to position
    const snappedPosition = getSnappedPointerPosition(pointerX.get());
    pointerX.set(snappedPosition);

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

    // Clean up listeners
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
  };

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

      {/* Pointer */}
      <motion.div
        ref={pointerElRef}
        className="absolute top-0 left-0 w-8 h-8 -mx-4 transition-none bg-white border rounded-full shadow-md cursor-pointer border-primary"
        style={{ x: pointerX }}
      ></motion.div>
    </div>
  );
};

export default CustomSlider;
