"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { PropsWithChildren, useRef } from "react";
import { useScreen } from "usehooks-ts";

const ScrollPaper: React.FC<PropsWithChildren> = ({ children }) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"],
  });
  const screen = useScreen();
  const isMobile = screen ? screen.width <= 769 : false;

  console.log(isMobile);

  console.log(scrollYProgress);
  // const progressMotionValue = useMotionValue(scrollYProgress)
  const progressMotionValueTransformed = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.8, 1] : [1.2, 1]
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [`-2rem`, `0rem`]);

  return (
    <div ref={containerRef} className="relative z-10 w-[calc(100%+4rem)] -ml-8">
      <div
        className="relative w-full"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            y,
          }}
          className="bg-white"
        >
          <motion.div
            className="absolute w-full h-screen bg-white rounded-sm"
            style={{
              boxShadow:
                "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
              opacity,
            }}
          >
            {/* TODO download background image and host */}
            <div
              className="absolute w-full h-full bg-white border rounded-sm border-border"
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/paper.png'), linear-gradient(to top right, #fdfdfd, #f8f8f8)`,
                backgroundBlendMode: "multiply",
              }}
            ></div>
          </motion.div>

          <div className="top-0 left-0 w-full p-8">{children}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollPaper;
