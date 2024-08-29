import { motion, useInView } from "framer-motion";
import React, { RefObject } from "react";

import { SlidersHorizontal } from "lucide-react";

import { Button } from "../aceternity-ui/button";

interface BackToConstructorButtonProps {
  constructorRef: RefObject<Element>;
}

const BackToConstructorButton: React.FC<BackToConstructorButtonProps> = (
  props
) => {
  const isInView = useInView(props.constructorRef);

  const onScrollClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <motion.div
      // initial={{ y: "0" }}
      animate={isInView ? { y: "-100%" } : { y: "0" }}
      viewport={{
        root: props.constructorRef,
      }}
      style={{ left: `calc(min(100% - 4.5rem,50% + 9.5rem))` }}
      className="fixed top-0 z-30 -translate-y-full"
    >
      <Button onClick={onScrollClick} variant={"ghost"} size="icon">
        <SlidersHorizontal className="w-4 h-4" />
      </Button>
    </motion.div>
  );
};

export default BackToConstructorButton;
