"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";
function TooltipDemo() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

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
            <SliderPrimitive.Track className="relative cursor-pointer h-px w-full grow overflow-hidden rounded-full bg-transparent">
              {/* <SliderPrimitive.Range className="absolute h-full bg-white" /> */}
              <div className="absolute w-full h-full flex flex-row items-center gap-1">
                {Array.from({ length: numberOfSteps }, (_, index) => (
                  <div className="bg-primary h-px flex-1" key={index}></div>
                ))}
              </div>
            </SliderPrimitive.Track>

            <SliderPrimitive.Thumb className="block cursor-pointer relative h-6 w-6 rounded-full border-[1px] shadow-md border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
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
