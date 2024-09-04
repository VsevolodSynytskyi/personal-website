import CustomLink from "@/components/CustomLink";
import ContentSection from "@/components/home-body/ContentSection";
import BackpackingPicture from "@/components/pictures/BackpackingPicture";
import CarMovingPicture from "@/components/pictures/CarMovingPicture";
import CarsPicture from "@/components/pictures/CarsPicture";
import ClothesPicture from "@/components/pictures/ClothesPicture";
import DogRunningPicture from "@/components/pictures/DogRunningPicture";
import RunningPersonPicture from "@/components/pictures/RunningPersonPicture";
import SeagullsPicture from "@/components/pictures/SeagullsPicture";
import { YOUTUBE_VIDEO_URL } from "@/lib/constants";

const Content33en: React.FC = () => {
  return (
    <>
      <ContentSection
        title={"Background"}
        contentBlocks={[
          {
            content: <p>I grew up in Kyiv but left in 2021.</p>,
          },
          {
            content: (
              <p>
                Since then, I’ve lived in various cities across Ukraine: Odessa,
                Lviv, Ivano-Frankivsk, and also in the Carpathians.
              </p>
            ),
          },
        ]}
      />
      <ContentSection
        title="Backpacking"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  During my time in the Carpathians, hiking became a regular
                  activity for me. I could head to the mountains at any time,
                  without much planning or preparation.
                </p>
                <BackpackingPicture />
                <p>
                  I initially thought that after the Carpathians, I wouldn't
                  want to return to hiking — that I’d get bored of it. But I was
                  wrong. It seems that hiking will only become more frequent in
                  my life.
                </p>
                <CustomLink withPreview href={YOUTUBE_VIDEO_URL}>
                  hiking videos
                </CustomLink>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Running"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  Running has become an important part of my life. It's not so
                  much the running itself that I enjoy, but the community around
                  it.
                </p>
                <div>
                  <blockquote className="">
                    Running is crap, but runners are not
                  </blockquote>
                  — Running community{" "}
                  <CustomLink
                    withPreview
                    href="https://www.instagram.com/chumaky.way/"
                  >
                    chumaky
                  </CustomLink>
                  .
                </div>
                <RunningPersonPicture />
                <p>
                  Hopefully, someday there will be a section here about
                  triathlons.
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Nora"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  Nora came into my life in the winter of 2022-2023. People
                  often ask how I got her used to traveling. Her breed
                  is—Ivano-Frankivsk Tourist.
                </p>
                <DogRunningPicture />
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Life in the Carpathians"
        contentBlocks={[
          {
            dates: ["08 2023", "03 2024"],
            content: (
              <>
                <p>
                  In the summer of 2023, I left my life in Ivano-Frankivsk and
                  moved to the Carpathians. I spent the next eight months in a
                  remote house on a mountain. My nearest neighbor was over a
                  mountain ridge, and the next one was a half-hour walk away.
                  That’s how I fell in love with hiking.
                </p>
                <p>
                  People often think I fled from society. But I wasn’t fleeing;
                  I was seeking peace and solitude. There’s a difference.
                </p>
                <CarMovingPicture />
              </>
            ),
          },
          {
            title: "On Decision-Making",
            content: (
              <>
                <p>
                  People tend to make “optimal” decisions in everything. But
                  that's not often my approach… I strive for a vivid life. So, I
                  make the appropriate decisions.
                </p>
                <p>
                  For example... Moving to the Carpathians was an imperfect
                  decision because I had to sacrifice the comfort of city life.
                  But it allowed me to find new adventures and challenges.
                </p>
                <p>
                  Logistics problems forced me to master driving. After taming a
                  local school’s “Zhiguli,” I bought a 30-year-old frame jeep
                  from a neighboring village. The “imperfectness” of this
                  decision was that the vehicle was fuel-thirsty, bulky, and
                  raised safety doubts, but it could take its driver wherever
                  they wanted. And we were talking about the Carpathian winter.
                  So, its secondary issues were forgiven.
                </p>
                <p>Now every trip to the store has turned into an adventure.</p>
                <CarsPicture />
                <p>
                  If I always made optimal decisions, I wouldn’t have these
                  challenges and adventures. So, instead of comfort, I choose
                  adventure.
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Odessan Life"
        contentBlocks={[
          {
            title: `Trip to Odessa`,
            dates: ["06 2021"],
            content: (
              <>
                <SeagullsPicture />

                <p>
                  In the summer of 2021, I moved to Odessa for career reasons.
                </p>
                <p>
                  I had a month-long gap between leaving my rented apartment in
                  Kyiv and moving to Odessa. So, I was homeless for a month. I
                  decided to spend it traveling. By staying in hostels for 150
                  UAH and traveling with BlaBlaCar, I, at 19, visited 8 regional
                  centers during June 2021, ultimately settling in Odessa.
                </p>
                <ClothesPicture />
                <p>
                  I fell in love with Odessa’s sunrises and the sea, even in
                  winter. Odessa taught me not to rush but to savor the moment.
                </p>
              </>
            ),
          },
          {
            title: "Idea of Conquering New Places",
            content: (
              <>
                <p>
                  I often move. I enjoy adapting to the lifestyle of a new city,
                  finding its unique romance. Every new place has its features
                  that can be discovered by partly giving up old habits and
                  norms. This is how I learn to love the new and adapt to it.
                </p>
                <p>
                  Odessa taught this anxious Kyivite to leisurely stroll on
                  weekday mornings.
                  <br /> Ivano-Frankivsk taught me to plan with phrases like
                  “Let’s not predict,” “We’ll see,” and “Well, we’ll see.”
                  <br /> And Carpathian winter toughened up a city kid so that a
                  scruffy boy with a backpack would come to love old jeeps and
                  americano from a machine.
                </p>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content33en;
