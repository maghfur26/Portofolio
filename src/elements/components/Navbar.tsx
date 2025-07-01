import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrollActive, setScrollActive] = useState<boolean>(false);

  const isScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isScroll);
  }, [scrollActive]);
  return (
    <div
      className={`w-full h-20 transition ease-in-out fixed z-50  ${
        scrollActive
          ? " top-0 bg-slate-950/50 backdrop-blur-sm shadow-md"
          : "bg-slate-950/80"
      }`}
    >
      <div className="font-poppins w-full h-full px-6 md:px-14 text-white absolute top-0 flex items-center justify-between">
        <div className="first-letter:text-3xl first-letter:text-blue-300">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        <div>
          <ul className="hidden md:flex items-center md:space-x-5 w-full h-full">
            <li className="relative px-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:via-blue-500 after:to-blue-300 after:transition-all after:duration-300 after:ease-in-out hover:after:h-[2px] hover:after:w-full">
              <Link to="#">Home</Link>
            </li>
            <li className="relative px-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:via-blue-500 after:to-blue-300 after:transition-all after:duration-300 after:ease-in-out hover:after:h-[2px] hover:after:w-full">
              <Link to="#">Portfolio</Link>
            </li>
            <li className="relative px-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:via-blue-500 after:to-blue-300 after:transition-all after:duration-300 after:ease-in-out hover:after:h-[2px] hover:after:w-full">
              <Link to="#">About</Link>
            </li>
            <li className="relative px-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:via-blue-500 after:to-blue-300 after:transition-all after:duration-300 after:ease-in-out hover:after:h-[2px] hover:after:w-full">
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
