import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 justify-between fixed top-0 bg-white z-50 shadow w-full">
      <Link href="/">
        <Image
          src="https://i.ibb.co/McdzmYG/logo-removebg-preview-new.png"
          width={70}
          height={70}
          alt="logo"
        />
      </Link>

      <div className="flex items-center space-x-2 5 text-sm">
        <button className="bg-blue-600 p-2 rounded-md text-white border border-blue-600 hover:bg-blue-700 font-semibold px-10 transition duration-200">
          Log In
        </button>
        <button className="p-2 rounded-md bg-transparent border border-blue-600 hover:bg-blue-700 hover:text-white font-semibold px-10 transition duration-200">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
