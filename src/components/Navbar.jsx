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
  return (
    <div className="bg-[#111] fixed top-0 left-0 right-0 z-[999999]">
      <div className="h-20 flex items-center justify-between text-white text-lg font-bold w-full md:w-11/12 lg:w-9/12 px-2 md:px-5 lg:px-7 m-auto">
        <h1>Eka Priyanthara</h1>
        <ul className="md:flex md:gap-5 hidden">
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
