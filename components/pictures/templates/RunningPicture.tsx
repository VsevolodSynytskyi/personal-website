import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useRef } from "react";
import useMeasure from "react-use-measure";

interface RunningPictureProps {
  bgImage: ImageProps;
  movingImage: ImageProps;
}

const RunningPicture: React.FC<RunningPictureProps> = (props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerMeasureRef, containerBounds] = useMeasure();
  const [bgImageRef, bgImageBounds] = useMeasure();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div
      ref={(el) => {
        containerRef.current = el;
        containerMeasureRef(el);
      }}
      className="relative flex items-center justify-center w-full"
      style={{
        height: bgImageBounds.height,
      }}
    >
      <div className="absolute flex items-center justify-center w-screen overflow-hidden">
        <div
          className="flex flex-row items-center justify-between"
          style={{
            width: containerBounds.width,
          }}
        >
          <div>
            <Image
              {...{
                ...props.bgImage,
                className: clsx(props.bgImage.className, "shadow-sm"),
                ref: bgImageRef,
              }}
            />
          </div>
          <motion.div
            style={{
              x,
            }}
          >
            <Image
              {...{
                ...props.movingImage,
                className: clsx(props.movingImage.className, "drop-shadow-xl"),
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RunningPicture;
