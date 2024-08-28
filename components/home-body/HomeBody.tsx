import { Suspense } from "react";
import HomeBodyContent from "./HomeBodyContent";
import HomeBodyTitle from "./HomeBodyTitle";
import ScrollPaper from "./ScrollPaper";

export function HomeBody() {
  return (
    <div>
      <Suspense>
        <ScrollPaper>
          <HomeBodyTitle />
        </ScrollPaper>
        <HomeBodyContent />
      </Suspense>
    </div>
  );
}

export default HomeBody;
