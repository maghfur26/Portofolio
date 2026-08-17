import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import StatusBadge from "./ui/StatusBadge";
import { siteData } from "../data/siteData";
import { ThemeContext } from "../App";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollToSection = (label) => {
    const id = label.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            <div className="hidden lg:block">
              <StatusBadge
                text={siteData.availability}
                variant="available"
              />
            </div>

            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {siteData.nav.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.label)}
                  className="flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-soft transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                >
                  {item.label}
                  {item.count && (
                    <span className="text-[10px] lg:text-[11px] text-text-secondary/60">
                      [{item.count}]
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <motion.a
                href={siteData.whatsappUrl}
                className="group inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full bg-surface-dark text-white text-xs lg:text-sm font-medium hover:bg-surface-light hover:shadow-lg hover:shadow-black/10 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's Talk
                <ArrowUpRight size={14} className="lg:w-4 lg:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full border border-border hover:bg-bg-soft transition-all duration-300 cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>

            <div className="md:hidden">
              <StatusBadge
                text="Available"
                variant="available"
              />
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full hover:bg-bg-soft transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg pt-16"
          >
            <div className="flex flex-col items-center gap-1 p-6 pt-10">
              <div className="mb-6">
                <StatusBadge
                  text={siteData.availability}
                  variant="available"
                />
              </div>

              {siteData.nav.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.label)}
                  className="w-full text-center py-4 text-lg sm:text-xl font-display font-semibold text-text-primary border-b border-border last:border-0 cursor-pointer"
                >
                  {item.label}
                  {item.count && (
                    <span className="text-sm text-text-secondary ml-2">
                      [{item.count}]
                    </span>
                  )}
                </button>
              ))}

              <a
                href={siteData.whatsappUrl}
                className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-surface-dark text-white text-base font-medium"
              >
                Let's Talk
                <ArrowUpRight size={18} />
              </a>

              <button
                onClick={toggleTheme}
                className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-sm font-medium cursor-pointer"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
