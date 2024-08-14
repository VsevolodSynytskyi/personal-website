"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";
import { AnimatedTooltip } from "./animated-tooltip";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  let numberOfSteps = 1;
  const minValue = typeof props.min === "number" ? props.min : 0;
  if (typeof props.max === "number" && typeof props.step === "number") {
    numberOfSteps = (props.max - minValue) / props.step;
  }

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-px w-full grow overflow-hidden rounded-full bg-transparent">
        {/* <SliderPrimitive.Range className="absolute h-full bg-white" /> */}
        <div className="absolute w-full h-full flex flex-row items-center gap-1">
          {Array.from({ length: numberOfSteps }, (_, index) => (
            <div className="bg-primary h-px flex-1" key={index}></div>
          ))}
        </div>
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb className="block relative h-6 w-6 rounded-full border-[1px] shadow-md border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        <AnimatedTooltip
          title="title"
          description="descirption"
        ></AnimatedTooltip>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
