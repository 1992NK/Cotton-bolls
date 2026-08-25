import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <Image src={logo} width={300} height={39} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;