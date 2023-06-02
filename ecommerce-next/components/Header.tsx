import Image from "next/image";
import Link from "next/link";
import SignUp from "./SignUp";

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 justify-between fixed top-0 bg-white z-50 shadow w-full">
      <Link href="/">
        <Image
          src="https://img.freepik.com/free-vector/coloured-shop-design_1133-89.jpg?w=740&t=st=1685635397~exp=1685635997~hmac=6619f2b830e6a5111316b81950f849cd097e72f79a5e27acfe5686edb0a14f61"
          width={80}
          height={80}
          className="p-2"
          alt="logo"
        />
      </Link>

      <div className="flex items-center space-x-2 5 text-sm">
        <button className="bg-blue-600 p-2 rounded-md text-white border border-blue-600 hover:bg-blue-700 font-semibold px-10 transition duration-200">
          Log In
        </button>
        <Link href={'/signup'}>
        <button className="p-2 rounded-md bg-transparent border border-blue-600 hover:bg-blue-700 hover:text-white font-semibold px-10 transition duration-200">
          Sign Up
        </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
