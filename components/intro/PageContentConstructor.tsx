import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import TimeToReadSlider from "./TimeToReadSlider";

import { SlidersHorizontal } from "lucide-react";

import { Button } from "../aceternity-ui/button";
import ContentTypeSlider from "./ContentTypeSlider";

const PageContentConstructor: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const onScrollClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {/* Top Button */}
      <motion.div
        initial={{ y: "-100" }}
        animate={isInView ? { y: "-100%" } : { y: "0" }}
        viewport={{
          root: ref,
        }}
        style={{ left: `calc(min(100% - 4.5rem,50% + 9.5rem))` }}
        className="fixed top-0 z-20"
      >
        <Button onClick={onScrollClick} variant={"ghost"} size="icon">
          <SlidersHorizontal className="w-4 h-4" />
        </Button>
      </motion.div>
      {/* Sliders */}
      <motion.div ref={ref} className="flex flex-col gap-8">
        <ContentTypeSlider />
        <TimeToReadSlider />
      </motion.div>
    </>
  );
};

export default PageContentConstructor;
