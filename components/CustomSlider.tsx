import { motion } from "framer-motion";
import { useRef } from "react";

// TODO (mobile)
// 1. define if is dragging
// 2. if dragging, then leave as it is
// 3. when drag ends, snap to closes positions
// 4. while dragging, show a tooltip/popover/card...

// TODO (desktop)
// 1. when hovered, show the same tooltip/popover/card

interface CustomSliderProps {
  min?: number;
  max?: number;
  step?: number;
}

const CustomSlider: React.FC<CustomSliderProps> = (props) => {
  const constraintsRef = useRef(null);
  let numberOfSteps = 1;
  const minValue = typeof props.min === "number" ? props.min : 0;
  if (typeof props.max === "number" && typeof props.step === "number") {
    numberOfSteps = (props.max - minValue) / props.step;
  }

  return (
    <div className="relative flex items-center justify-center w-full h-8">
      <div className="absolute flex flex-row items-center w-full h-full gap-1">
        {Array.from({ length: numberOfSteps }, (_, index) => (
          <div className="flex-1 h-px bg-primary" key={index}></div>
        ))}
      </div>
      <motion.div className="absolute w-full h-full" ref={constraintsRef} />

      <motion.div
        className="absolute top-0 left-0 w-8 h-8 bg-white border rounded-full shadow-md cursor-pointer border-primary"
        drag
        dragElastic={0.1}
        dragConstraints={constraintsRef}
        whileDrag={{
          scale: 1.2,
        }}
        whileHover={{
          scale: 1.2,
        }}
        dragMomentum={false}
        // dragSnapToOrigin={true}
        onDragEnd={(e) => {
          console.log(e);
        }}
      ></motion.div>
    </div>
  );
};

export default CustomSlider;
