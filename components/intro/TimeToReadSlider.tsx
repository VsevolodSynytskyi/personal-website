import useReadTimeParam from "@/lib/useReadTimeParam";
import SliderBlock from "./SliderBlock";

const stepTitle = `Час на прочитання`;
const minText = `10 сек`;
const maxText = `2 хв`;

const TimeToReadSlider: React.FC = () => {
  const [sliderValue, setSliderValue] = useReadTimeParam();

  const tooltipTextTransform = (n: number) => {
    switch (n) {
      case 0:
        return "10 секунд";
      case 1:
        return "30 секунд";
      case 2:
        return "1 хвилина";
      case 3:
        return "2-3 хвилини";
      default:
        return null;
        break;
    }
  };

  return (
    <SliderBlock
      stepsNumber={4}
      title={stepTitle}
      minText={minText}
      maxText={maxText}
      value={sliderValue}
      onValueChange={setSliderValue}
      tooltipTextTransform={tooltipTextTransform}
    />
  );
};

export default TimeToReadSlider;
