import { Suspense } from "react";
import ScrollPaper from "../ScrollPaper";
import HomeBodyContent from "./HomeBodyContent";
import HomeBodyTitle from "./HomeBodyTitle";

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
