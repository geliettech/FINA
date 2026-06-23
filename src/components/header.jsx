import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";
import { useTheme } from "../layout/context/themeProvider";


const NAV_ITEMS = ["Features", "Pricing", "FAQ", "Download"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="fixed w-full top-0 z-50 bg-background border-b border-border lg:border-0">
      {/* <div className="container relative flex h-20 items-center"> */}
      <div className="container flex flex-row lg:items-center lg:h-20">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={
              theme === "light"
                ? "/images/fina-light.png"
                : "/images/fina-dark.png"
            }
            alt="Fina Logo"
            width={115} height={55}
          />
        </Link>

        {/* Navigation */}
        <nav
          className={clsx(
            "w-full lg:w-auto lg:ml-10 transition-all duration-300",
            open ? "block" : "hidden lg:block"
          )}
        >
          <ul className="flex flex-col items-center gap-6 py-6 lg:flex-row lg:gap-8 lg:py-0">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <LinkScroll
                  className="text-foreground transition-colors duration-500 cursor-pointer hover:text-s1"
                >
                  {item}
                </LinkScroll>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side */}
        <div className={clsx(open ? "flex" : "hidden lg:flex", "ml-auto items-center gap-4")}>
          <button onClick={() => navigate("/sign-in")} className="btn-secondary">
            Sign In
          </button>

          <button onClick={() => navigate("/sign-up")} className="btn-primary">
            Start for Free
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-border"
          aria-label="Toggle navigation"
        >
          <img
            src={`/images/${open ? "close" : "magic"}.svg`}
            alt=""
            className="w-5 h-5"
          />
        </button>
      </div>
    </header>
  );
}