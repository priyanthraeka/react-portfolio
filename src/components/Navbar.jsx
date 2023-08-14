import { useState } from "react";
import { HiMenu } from "react-icons/hi";

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
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="bg-[#111] fixed left-0 top-0 right-0 h-20 z-[999999]">
      <div className="h-full w-full flex items-center justify-between px-3 md:w-10/12 md:m-auto">
        <div className="text-2xl font-bold text-white">Eka Priyanthara</div>
        <button
          className="block md:hidden text-lg font-bold text-white p-2 rounded-lg hover:bg-[#222]"
          onClick={() => {
            setIsNavbarOpen(!isNavbarOpen);
          }}
        >
          <HiMenu size={35} />
        </button>
        <ul
          className={`bg-[#222] absolute left-0 right-0 flex flex-col justify-center items-center gap-2 py-5 md:flex-row md:gap-5 px-5 md:bg-[#111] md:h-full md:static 
          ${isNavbarOpen ? " top-[80px]" : " -top-[180px]"}`}
        >
          {navLinks.map((navLink, index) => (
            <li key={index} className="font-bold text-white text-lg">
              <a href={navLink.href}>{navLink.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
