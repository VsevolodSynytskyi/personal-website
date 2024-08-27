import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import runningBackgroundPic from "../../images/running - background.png";
import runningPersonPic from "../../images/running - person.png";

const RunningPicture: React.FC = () => {
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
          src={runningBackgroundPic}
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
          src={runningPersonPic}
          alt={`Сєва біжить`}
        />
      </motion.div>
    </div>
  );
};

export default RunningPicture;
