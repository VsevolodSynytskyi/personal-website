import { motion } from "framer-motion";
import React, { useRef } from "react";
import TimeToReadSlider from "./TimeToReadSlider";

import BackToConstructorButton from "./BackToConstructorButton";
import ContentTypeSlider from "./ContentTypeSlider";

const PageContentConstructor: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Top Button */}
      <BackToConstructorButton constructorRef={ref} />
      {/* Sliders */}
      <motion.div ref={ref} className="flex flex-col gap-8">
        <ContentTypeSlider />
        <TimeToReadSlider />
      </motion.div>
    </>
  );
};

export default PageContentConstructor;
