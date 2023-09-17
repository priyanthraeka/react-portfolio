import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { NAV_LINKS as navLinks } from "../../../utils/constants";

const NavLinks = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const onClickHandler = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      {isNavbarOpen ? (
        <ul className="absolute top-20 left-0 right-0 flex flex-col items-center gap-8 p-7 bg-neutral-700 transition-all ease-in-out duration-500">
          {navLinks.map((navLink, index) => (
            <li key={index} className="font-bold text-white text-lg">
              <a
                href={navLink.href}
                className="px-3 py-4 rounded-lg hover:bg-[#222]"
              >
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="gap-2 hidden md:flex">
          {navLinks.map((navLink, index) => (
            <li key={index} className="font-bold text-white text-lg">
              <a
                href={navLink.href}
                className="px-3 py-4 rounded-lg hover:bg-neutral-700"
              >
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      )}
      <button
        className="block md:hidden text-lg font-bold text-white p-2 rounded-lg bg-neutral-900 hover:bg-neutral-700"
        onClick={onClickHandler}
      >
        <HiMenu size={35} />
      </button>
    </>
  );
};

export default NavLinks;
