"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { motion } from "framer-motion";
import * as React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";

type CustomSliderType = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> & {
  tooltipText?: string;
};

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  CustomSliderType
>(({ className, ...props }, ref) => {
  let numberOfSteps = 1;
  const minValue = typeof props.min === "number" ? props.min : 0;
  if (typeof props.max === "number" && typeof props.step === "number") {
    numberOfSteps = (props.max - minValue) / props.step;
  }
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={tooltipOpen}>
        <TooltipTrigger asChild>
          <SliderPrimitive.Root
            ref={ref}
            className={cn(
              "relative flex w-full touch-none select-none items-center",
              className
            )}
            {...props}
            onMouseLeave={() => setTooltipOpen(false)}
            onMouseEnter={() => {
              setTooltipOpen(true);
            }}
          >
            <SliderPrimitive.Track className="relative w-full h-6 overflow-hidden bg-transparent rounded-full cursor-pointer grow">
              {/* <SliderPrimitive.Range className="absolute h-full bg-white" /> */}
              <div className="absolute flex flex-row items-center w-full h-full gap-1">
                {Array.from({ length: numberOfSteps }, (_, index) => (
                  <div className="flex-1 h-px bg-primary" key={index}></div>
                ))}
              </div>
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb asChild>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="block cursor-pointer relative h-6 w-6 rounded-full border-[1px] shadow-md border-primary bg-background ring-offset-background hover:outline-none focus-visible:outline-none hover:ring-1 hover:ring-ring hover:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-none "
              ></motion.div>
            </SliderPrimitive.Thumb>
          </SliderPrimitive.Root>
        </TooltipTrigger>
        <TooltipContent className="mb-4">
          {props.tooltipText !== undefined ? props.tooltipText : props.value}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
