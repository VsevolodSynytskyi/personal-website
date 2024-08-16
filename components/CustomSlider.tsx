import { motion } from "framer-motion";
import { useRef } from "react";

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
    <div className="w-full relative h-6 bg-gradient-to-b from-[#9c1aff] to-[#7700ff] p-0 m-0 flex justify-center items-center">
      <div className="absolute flex flex-row items-center w-full h-full gap-1">
        {Array.from({ length: numberOfSteps }, (_, index) => (
          <div className="flex-1 h-px bg-primary" key={index}></div>
        ))}
      </div>
      <motion.div className="absolute w-full h-full" ref={constraintsRef} />
      <motion.div
        className="bg-white border border-primary rounded-[30px] w-6 h-6 shadow-md absolute top-0 left-0"
        drag
        dragConstraints={constraintsRef}
      />
    </div>
  );
};

export default CustomSlider;
