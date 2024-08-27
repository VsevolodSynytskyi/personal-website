import Image from "next/image";
import coworkingPic1 from "../../images/coworking 01.jpg";
import coworkingPic2 from "../../images/coworking 02.jpg";

const CoworkingPicture: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Image src={coworkingPic1} alt={"Коворкінг"} className="shadow-sm" />
      <Image src={coworkingPic2} alt={"Коворкінг"} className="smadow-sm" />
    </div>
  );
};

export default CoworkingPicture;
