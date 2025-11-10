import { ContentParamValues, PageParamContent } from "@/lib/customTypes";

const contentPageParamsToValues: (
  params: PageParamContent
) => ContentParamValues = (params) => {
  return {
    readTime: Number(params.readTime),
    contentType: Number(params.contentType),
  };
};
export default contentPageParamsToValues;
