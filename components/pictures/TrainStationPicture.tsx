import Image from "next/image";
import familyPic from "../../images/family.svg";
import trainStationPic from "../../images/trainstation.jpg";

const TrainStationPicture: React.FC = () => {
  return (
    <div className="relative">
      <Image src={trainStationPic} alt="Вокзал" className="w-1/2" />
      <Image
        src={familyPic}
        alt={"Сімʼя"}
        className="absolute bottom-0 right-0 w-1/2"
      />
    </div>
  );
};

export default TrainStationPicture;
