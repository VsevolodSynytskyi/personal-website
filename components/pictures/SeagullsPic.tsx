import Image from "next/image";
import seagullsPic from "../../images/seagulls.svg";

const SeagullsPicture: React.FC = () => {
  return (
    <div className="flex flex-row justify-end -mt-20">
      <Image src={seagullsPic} alt={"Чайки"} className="w-40" />
    </div>
  );
};

export default SeagullsPicture;
