import Image from "next/image";

import carPic1 from "../../images/car 01.jpg";
import carPic2 from "../../images/car 02.jpg";
import carPic3 from "../../images/car 03.jpg";

const CarsPicture: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        <Image src={carPic1} alt={"Автомобіль"} className="shadow-sm" />
        <Image src={carPic3} alt={"Автомобіль"} className="shadow-sm" />
        <Image src={carPic2} alt={"Автомобіль"} className="shadow-sm" />
      </div>
    </div>
  );
};

export default CarsPicture;
