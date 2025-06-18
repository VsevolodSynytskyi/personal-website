"use client";

import { Suspense } from "react";
import HomeBodyContent from "./HomeBodyContent";
import HomeBodyTitle from "./HomeBodyTitle";
import ScrollPaper from "./ScrollPaper";

export function HomeBody() {
  return (
    <main>
      <Suspense>
        <ScrollPaper>
          <HomeBodyTitle />
        </ScrollPaper>
        <HomeBodyContent />
      </Suspense>
    </main>
  );
}

export default HomeBody;
