import { NextPage } from "next";
import ContentPageBody from "@/components/home-body/ContentPageBody";
import { PageParamContent, PageParamLocale } from "@/lib/customTypes";
import contentPageParamsToValues from "@/lib/content-page-params/contentPageParamsToValues";

interface ContentBodyPageProps {
  params: Promise<PageParamLocale & PageParamContent>;
}

const ContentBodyPage: NextPage<ContentBodyPageProps> = async ({ params }) => {
  const { contentType, readTime } = await params;
  console.log(`ContentBodyPage params`, await params);
  const contentValues = contentPageParamsToValues({
    contentType,
    readTime,
  });
  return <ContentPageBody {...contentValues} />;
};

export default ContentBodyPage;
