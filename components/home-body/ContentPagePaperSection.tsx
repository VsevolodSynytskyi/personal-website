"use client";

import { PropsWithChildren, Suspense } from "react";
import ContentPageTitle from "./ContentPageTitle";
import ScrollPaper from "./ScrollPaper";

interface ContentPagePaperSectionProps extends PropsWithChildren {}

export const ContentPagePaperSection: React.FC<ContentPagePaperSectionProps> = (
  props
) => {
  return (
    <main>
      <Suspense>
        <ScrollPaper>
          <ContentPageTitle />
        </ScrollPaper>
        {props.children}
      </Suspense>
    </main>
  );
};

export default ContentPagePaperSection;
