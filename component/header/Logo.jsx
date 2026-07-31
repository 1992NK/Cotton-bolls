import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Logo=()=> {
  return (
    <div className="logo">
      <Image
        src={logo}
        width={150}
        height={65}
        alt="logo"
      />
    </div>
  );
}

export default Logo;