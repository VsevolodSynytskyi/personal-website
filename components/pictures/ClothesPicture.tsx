import Image from "next/image";
import clothesPic from "../../images/clothes.svg";

const ClothesPicture: React.FC = () => {
  return (
    <div className="">
      <Image src={clothesPic} alt={"Одяг"} className="-my-2" />
    </div>
  );
};

export default ClothesPicture;
