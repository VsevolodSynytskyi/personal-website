import React from "react";
import ContentTypeSlider from "./ContentTypeSlider";
import TimeToReadSlider from "./TimeToReadSlider";

const PageContentConstructor: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <ContentTypeSlider />
      <TimeToReadSlider />
    </div>
  );
};

export default PageContentConstructor;
