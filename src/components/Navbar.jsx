import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const navLinks = [
  {
    href: "#home",
    title: "Home",
  },
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#111] fixed top-0 left-0 right-0 z-[999999]">
      <div className="h-20 flex items-center justify-between text-white text-lg font-bold w-full md:w-11/12 lg:w-9/12 px-2 md:px-5 lg:px-7 m-auto">
        <a href="/">
          <h1 className="text-2xl">Eka Priyanthara</h1>
        </a>
        <div className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
          <HiMenuAlt1 size={40} color="#fff" />
        </div>
        <ul
          className={`flex flex-col justify-center items-center gap-2 py-5 bg-[#222] absolute right-0 left-0 top-0 md:flex md:flex-row md:justify-end md:items-center -z-[999999] md:gap-5 md:p-0 md:static md:bg-[#111] md:w-fit transition-all ease-in-out duration-500
          ${isOpen ? "top-[80px]" : "top-[-180px]"}`}
        >
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <a href={navLink.href}>{navLink.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
