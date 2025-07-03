import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollActive(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", isScroll);
    return () => window.removeEventListener("scroll", isScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80; 
      const targetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    closeMobileMenu(); 
  };

  return (
    <>
      <nav
        className={`w-full h-20 transition-all duration-300 ease-in-out fixed z-50 ${
          scrollActive
            ? "top-0 bg-slate-950/60 backdrop-blur-md shadow-lg"
            : "bg-slate-950/80 backdrop-blur-sm"
        }`}
      >
        <div className="font-poppins w-full h-full px-6 md:px-14 text-white flex items-center justify-between">
          {/* Logo */}
          <div className="first-letter:text-3xl first-letter:text-blue-300">
            <h1
              className="text-2xl font-bold cursor-pointer"
              onClick={() => handleClick("home")}
            >
              Logo
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li className="relative px-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:via-blue-500 after:to-blue-300 after:transition-all after:duration-300 after:ease-in-out hover:after:h-[2px] hover:after:w-full">
                <button
                  onClick={() => handleClick("home")}
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li className="relative px-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:via-blue-500 after:to-blue-300 after:transition-all after:duration-300 after:ease-in-out hover:after:h-[2px] hover:after:w-full">
                <button
                  onClick={() => handleClick("portfolio")}
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  Portfolio
                </button>
              </li>
              <li className="relative px-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:via-blue-500 after:to-blue-300 after:transition-all after:duration-300 after:ease-in-out hover:after:h-[2px] hover:after:w-full">
                <button
                  onClick={() => handleClick("about")}
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li className="relative px-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:via-blue-500 after:to-blue-300 after:transition-all after:duration-300 after:ease-in-out hover:after:h-[2px] hover:after:w-full">
                <button
                  onClick={() => handleClick("contact")}
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 right-0 bg-slate-950/95 backdrop-blur-md shadow-lg z-40 transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col py-4">
          <li>
            <button
              onClick={() => handleClick("home")}
              className="w-full text-left px-6 py-4 text-white hover:text-blue-300 hover:bg-slate-800/50 transition-all duration-200 border-b border-slate-700/50"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("portfolio")}
              className="w-full text-left px-6 py-4 text-white hover:text-blue-300 hover:bg-slate-800/50 transition-all duration-200 border-b border-slate-700/50"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("about")}
              className="w-full text-left px-6 py-4 text-white hover:text-blue-300 hover:bg-slate-800/50 transition-all duration-200 border-b border-slate-700/50"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("contact")}
              className="w-full text-left px-6 py-4 text-white hover:text-blue-300 hover:bg-slate-800/50 transition-all duration-200"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
