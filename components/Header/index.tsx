import Image from "next/image";
import Link from "next/link";
import NavItems from "../NavItems";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <Link href={"/"} className="flex justify-center items-center">
        <Image
          src={"/assets/logo/avas-logo.png"}
          alt="Avas Logo"
          width={80}
          height={80}
        />
        <span className="font-bold">Avas</span>
      </Link>
      <nav className="hidden sm:block">
        <NavItems />
      </nav>
    </header>
  );
};

export default Header;
