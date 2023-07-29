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
    <div className="bg-[#111] fixed top-0 left-0 right-0">
      <div className="h-20 flex items-center justify-between text-white w-11/12 lg:w-7/12 m-auto text-lg font-bold">
        <h1>Eka Priyanthara</h1>
        <ul className="flex gap-5">
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
