import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, useNavigate } from "react-router";
import { useTheme } from "../layout/context/themeProvider";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { theme } = useTheme();
  const navigate = useNavigate();

  const NAV_ITEMS = ["Features", "Pricing", "FAQ", "Download"];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header className={clsx("fixed top-0 left-0 w-full z-50 text-foreground transition-all duration-500 py-10 max-lg:py-4", hasScrolled
          ? "py-2 bg-background/70 backdrop-blur-md shadow-sm"
          : "bg-transparent")}>
        <div className="container flex items-center justify-between h-18">
        {/* logo */}
        <Link to="/" className="cursor-pointer z-2">
          <img src={
            theme === "light"
              ? "/images/fina-light.png"
              : "/images/fina-dark.png"
          } width={160} height={55} alt="logo" />
        </Link>
         <div className={clsx("w-full max-lg:absolute max-lg:top-full max-lg:left-5 max-lg:right-5 max-lg:bg-background max-lg:shadow-lg max-lg:overflow-hidden transition-all duration-300 max-lg:bg-s2",
         isOpen ? "max-lg:max-h-[600px] max-lg:opacity-100 max-lg:translate-y-0" : "max-lg:max-h-0 max-lg:opacity-0 pointer-events-none max-lg:-translate-y-5",)}>
   
    <div className="relative
    flex
    items-center
    justify-between
    w-full

    max-lg:flex-col
    max-lg:items-center
    max-lg:justify-center
    max-lg:py-10
    max-lg:gap-2">
          {/* navigation */}
          <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
            <ul className="flex max-lg:block max-lg:gap-6 gap-12">
              {NAV_ITEMS.map((title) => (
                <li key={title} className="nav-li">
                  <LinkScroll
                    onClick={() => setIsOpen(false)}
                    to={title}
                    offset={-100}
                    spy
                    smooth
                    activeClass="nav-active"
                    className="base-bold text-foreground capitalized transition-colors duration-500 cursor-pointer hover:text-s1 max-lg:py-4 max-lg:h5 transition-all
duration-300
hover:scale-110"
                  >
                    {title}
                  </LinkScroll>
                </li>
              ))}
            </ul>
          </nav>
          {/* authenication */}
          <div className="flex flex-col lg:flex-row gap-4">
            <button onClick={() => navigate("/sign-in")} className="nav-li">
              Sign In
            </button>

            <button onClick={() => navigate("/sign-up")} className="btn-primary">
              Start for Free
            </button>
          </div>
          <div className="lg:hidden block absolute top-1/2 left-0 w-960 h-95 -translate-x-72.5 -translate-y-1/2 rotate-90">
            <img
              src="/images/bg-outlines.svg"
              width={960}
              height={380}
              alt="outline"
              className="relative z-2"
            />
            <img
              src="/images/bg-outlines-fill.png"
              width={960}
              height={380}
              alt="outline"
              className="absolute inset-0 mix-blend-soft-light opacity-5"
            />
          </div>
        </div>
      
        </div>
        {/* Hamburger */}
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
