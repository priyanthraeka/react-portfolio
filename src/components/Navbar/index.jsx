import Title from "./Title";
import DarkModeButton from "./DarkModeButton";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 right-0 z-50 bg-neutral-800 bg-opacity-95">
      <div className="container flex items-center justify-between h-20 w-full px-3 mx-auto overflow-hidden">
        <Title />
        <div className="flex items-center gap-5" data-aos="fade-down">
          <DarkModeButton />
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
