import { ContentParamValues, PageParamContent } from "@/lib/customTypes";

const contentPageParamsToValues: (
  params: PageParamContent
) => ContentParamValues = (params) => {
  console.log(`inputs:`, params);
  console.log(`output:`, {
    readTime: Number(params.readTime),
    contentType: Number(params.contentType),
  });
  return {
    readTime: Number(params.readTime),
    contentType: Number(params.contentType),
  };
};
export default contentPageParamsToValues;
