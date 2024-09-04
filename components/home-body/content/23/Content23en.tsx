import CustomLink from "@/components/CustomLink";
import BackpackingPicture from "@/components/pictures/BackpackingPicture";
import CarMovingPicture from "@/components/pictures/CarMovingPicture";
import ClothesPicture from "@/components/pictures/ClothesPicture";
import CoworkingPicture from "@/components/pictures/CoworkingPicture";
import CranePicture from "@/components/pictures/CranePicture";
import DogRunningPicture from "@/components/pictures/DogRunningPicture";
import RunningPersonPicture from "@/components/pictures/RunningPersonPicture";
import SeagullsPicture from "@/components/pictures/SeagullsPicture";
import PictureTrainStation from "@/components/pictures/TrainStationPicture";
import WorkersPicture from "@/components/pictures/WorkersPicture";
import ContentSection from "../../ContentSection";

const Content23en: React.FC = () => {
  return (
    <>
      <ContentSection
        title="Backpacking"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  During my time living in the mountains, backpacking became a
                  daily routine for me. I could head into the mountains at any
                  moment, without much planning or preparation.
                </p>
                <BackpackingPicture />
                <p>
                  At first, I thought that after the mountains, I wouldn’t want
                  to return to the mountains for a long time — I thought they
                  would bore me. But I was wrong. It seems that hikes will
                  become more frequent in my life.
                </p>
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
                  much the joy of running that I enjoy, but the community around
                  it.
                </p>
                <div>
                  <blockquote className="">
                    Running is a drag, but runners are not
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
                  I hope that someday there will be a paragraph about triathlons
                  here.
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Nora the Dog"
        contentBlocks={[
          {
            content: (
              <>
                <p>
                  Nora came into my life in the winter of 2022-2023. I bring her
                  with me when I do backpacking or trail running.
                </p>
                <DogRunningPicture />
              </>
            ),
          },
        ]}
      />

      <ContentSection
        title="Life in the Mountains"
        contentBlocks={[
          {
            dates: ["08 2023", "03 2024"],
            content: (
              <>
                <p>
                  In the summer of 2023, we closed the coworking space, I left
                  my life in Ivano-Frankivsk, and moved to live on a mountain in
                  the Carpathians. I spent eight months in a lonely house on the
                  mountain. My nearest neighbor was across a mountain ridge, and
                  the next one was a half-hour walk away. That’s how I grew to
                  love backpacking.
                </p>
                <p>
                  People often think that I escaped from society. But I didn’t
                  escape; I was looking for silence and solitude. There is a
                  difference.
                </p>
                <CarMovingPicture />
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Work at SiteForm"
        contentBlocks={[
          {
            dates: ["01 2022", "03 2024"],
            content: (
              <>
                <div className="relative pt-20 pb-8">
                  <div className="absolute top-0 right-0 w-48 -mt-8">
                    <CranePicture />
                  </div>
                  <p className="w-[calc(100%-8rem)]">
                    At the end of 2021, I completed a freelance project for
                    Andrew’s company, and he later invited me to join the team.
                  </p>
                </div>
                <p>
                  Since then, I worked at SiteForm until the spring of 2024.
                  SiteForm is a service for managing construction projects for
                  American developers. The team is small, and often everyone was
                  responsible for everything. I focused mainly on product design
                  and frontend development of the web application.
                </p>
                <WorkersPicture />
                <p>
                  The most interesting task was developing orientation for
                  builders on the project. In the USA, a developer must conduct
                  onboarding for every builder on the project. Previously, this
                  process took hours due to human factors. We optimized it to 20
                  minutes. I was involved in research, design, and development
                  with other developers.
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Initiatives"
        contentBlocks={[
          {
            title: (
              <CustomLink
                withPreview
                href="https://www.instagram.com/inflow.coworking/"
              >
                Coworking
              </CustomLink>
            ),
            dates: ["01 2023", "08 2023"],
            content: (
              <>
                <p>
                  When the winter blackouts started in 2022, I and three
                  like-minded individuals opened a coworking space. It was an
                  adventure for inexperienced entrepreneurs.
                </p>
                <CoworkingPicture />
                <p>
                  From this project, I value the new connections with great
                  people and the entrepreneurial experience the most.
                </p>
              </>
            ),
          },
          {
            dates: ["03 2022"],
            title: "Volunteer Project",
            content: (
              <>
                <p>
                  After the invasion in 2022, many people arrived at the Lviv
                  train station during curfew, so we created a Telegram bot to
                  coordinate drivers and passengers. I was responsible for
                  coordinating drivers and user support.
                </p>
                <PictureTrainStation />
                <p>
                  Thanks to the initiative, around 1,500 people were transported
                  to their places of accommodation.
                </p>
              </>
            ),
          },
        ]}
      />
      <ContentSection
        title="Odesa"
        contentBlocks={[
          {
            title: "Ryze Digital",
            dates: ["07 2021", "12 2021"],
            content: (
              <>
                <p>
                  In the summer of 2021, I joined a German agency’s Odesa office
                  as a frontend developer. I worked in a team of developers on
                  landing pages for six months before moving to SiteForm.
                </p>
              </>
            ),
          },
          {
            title: `Trip to Odesa`,
            dates: ["06 2021"],
            content: (
              <>
                <SeagullsPicture />

                <p>
                  I had a month gap between moving out of my rented apartment in
                  Kyiv and arriving in Odesa. So, I decided to dedicate it to
                  traveling. By staying in the cheapest hostels and traveling by
                  BlaBlaCar, I, at 19yo, visited 8 cities in June 2021,
                  eventually settling in Odesa.
                </p>
                <ClothesPicture />
              </>
            ),
          },
          {
            title: "Idea of Adaptaion",
            content: (
              <>
                <p>
                  I often move. I enjoy adapting to the lifestyle of a new city,
                  discovering its uniqueness. Each new place has its own
                  features that can be learned by partly letting go of previous
                  habits and norms. That’s how I learn to enjoy and adapt to the
                  new.
                </p>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default Content23en;
