import Image from "next/image";
import Link from "next/link";
import { CLASSNAME } from "./classNames";
export default function Navbar() {
  return (
    <>
      <ul className="flex justify-around p-8 bg-sky-300 text-2xl items-center fixed w-full opacity-200 h-24">
        <li>
          <Image
            src="/logo.png"
            width={200}
            height={1}
            alt="Logo"
            className="h-8"
          />
        </li>
        <li>
          <Link href="#" className={CLASSNAME.UNDERLINE_TEXT}>
            Home
          </Link>
        </li>
        <li>
          <Link href="About" className={CLASSNAME.UNDERLINE_TEXT}>
            About
          </Link>
        </li>
        <li>
          <Link href="#categories" className={CLASSNAME.UNDERLINE_TEXT}>
            Categories
          </Link>
        </li>
        <li>
          <Link href="#shop" className={CLASSNAME.UNDERLINE_TEXT}>
            Shop
          </Link>
        </li>
        <li>
          <Link href="#contact" className={CLASSNAME.UNDERLINE_TEXT}>
            Contact us
          </Link>
        </li>
        <li>
          <a
            href="#login"
            className="bg-amber-300 px-8 py-2 text-3xl rounded-lg transform transition-transform relative hover:bg-amber-200  scale-x"
          >
            Log in
          </a>
        </li>
      </ul>
    </>
  );
}
