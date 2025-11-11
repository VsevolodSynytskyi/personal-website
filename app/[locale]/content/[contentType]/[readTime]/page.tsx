import { NextPage } from "next";
import ContentPageBody from "@/components/home-body/ContentPageBody";
import { PageParamContent, PageParamLocale } from "@/lib/customTypes";
import contentPageParamsToValues from "@/lib/content-slider/contentPageParamsToValues";
import { locales } from "@/lib/i18n/locales";

interface ContentBodyPageProps {
  params: Promise<PageParamLocale & PageParamContent>;
}

const ContentBodyPage: NextPage<ContentBodyPageProps> = async ({ params }) => {
  const { contentType, readTime } = await params;
  const contentValues = contentPageParamsToValues({
    contentType,
    readTime,
  });
  return <ContentPageBody {...contentValues} />;
};

export async function generateStaticParams() {
  const params = [];

  for (const locale of locales) {
    for (let contentTypeIndex = 0; contentTypeIndex < 4; contentTypeIndex++) {
      for (let readTimeIndex = 0; readTimeIndex < 4; readTimeIndex++) {
        params.push({
          locale,
          contentType: String(contentTypeIndex),
          readTime: String(readTimeIndex),
        });
      }
    }
  }

  return params;
}

export default ContentBodyPage;
