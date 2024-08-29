import { motion, useScroll, useTransform } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useRef } from "react";

const RotatingPicture: React.FC<ImageProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateDeg = useTransform(scrollYProgress, [0, 1], [-1, 1]);

  return (
    <motion.div
      style={{
        rotate: rotateDeg,
      }}
      ref={ref}
    >
      <Image {...props} className="border-2 border-white rounded-sm shadow-s" />
    </motion.div>
  );
};

export default RotatingPicture;
