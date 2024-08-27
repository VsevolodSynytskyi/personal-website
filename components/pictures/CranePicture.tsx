import Image from "next/image";
import cranePic from "../../images/crane.svg";

const CranePicture = () => {
  return <Image src={cranePic} alt={"Підйомний кран"} />;
};

export default CranePicture;
