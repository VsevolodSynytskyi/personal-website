import Image from "next/image";
import workersPic from "../../images/workers.svg";

const WorkersPicture: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Image src={workersPic} alt={"Будівельники"} className="max-w-64" />
    </div>
  );
};

export default WorkersPicture;
