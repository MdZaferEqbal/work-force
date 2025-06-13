import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { path: "#", label: "Home" },
    { path: "#about", label: "About" },
    {
      path: "https://zafer-portfolio.netlify.app/",
      label: "Portfolio",
      target: "_blank",
    },
  ];

  return (
    <header className="w-full h-full relative sm:top-10 top-20 z-20 flex justify-center items-center">
      <nav className="absolute sm:w-[70%] w-[80%] flex sm:flex-row sm:gap-0 gap-5 flex-col justify-between items-center">
        <Link
          href="/"
          className="text-logo flex items-center font-[1000] text-[#a09c9c] text-4xl"
        >
          WorkForce
        </Link>
        <div role="navigation" className="flex gap-10">
          {navItems.map((navItem) => (
            <Link
              className="nav-links"
              key={navItem.label}
              href={navItem.path}
              target={navItem.target ? navItem.target : undefined}
            >
              <span>{navItem.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
