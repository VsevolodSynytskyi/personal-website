import { Suspense } from "react";
import HomeBodyContent from "./HomeBodyContent";
import HomeBodyTitle from "./HomeBodyTitle";

export function HomeBody() {
  return (
    <div>
      <Suspense>
        <HomeBodyTitle />
        <HomeBodyContent />
      </Suspense>
    </div>
  );
}

export default HomeBody;
