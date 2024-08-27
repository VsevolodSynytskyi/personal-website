import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import dogBackgorundPic from "../../images/dog background.png";
import dogRunningPic from "../../images/dog running.png";

const DogRunningPicture: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div
      ref={containerRef}
      className="flex flex-row items-center justify-between"
    >
      <div>
        <Image
          src={dogBackgorundPic}
          alt={`Фон природи`}
          className="shadow-sm"
        />
      </div>
      <motion.div
        style={{
          x,
        }}
      >
        <Image
          className="drop-shadow-xl"
          src={dogRunningPic}
          alt={`Нора біжить`}
        />
      </motion.div>
    </div>
  );
};

export default DogRunningPicture;
