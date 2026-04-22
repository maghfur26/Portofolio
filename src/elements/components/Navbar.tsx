import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollActive(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
    closeMobileMenu();
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Certificates", id: "certificate" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`w-full h-20 fixed z-50 transition-all duration-300 ${
          scrollActive
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="font-poppins w-full h-full max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleClick("home")}
            className="text-xl font-bold text-text-primary tracking-tight hover:text-accent transition-colors duration-200"
          >
            Maghfur<span className="text-accent">.</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent rounded-lg hover:bg-accent/5 transition-all duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200 gap-1.5"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-border z-40 transition-all duration-300 ease-out md:hidden ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none"
        }`}
      >
        <ul className="p-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className="w-full text-left px-4 py-3 text-text-secondary hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-200 font-medium text-sm"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
