import { createContext } from "react";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import SelectedWork from "./components/SelectedWork";
import Process from "./components/Process";
import Service from "./components/Service";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export const ThemeContext = createContext();

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-screen bg-bg text-text-primary transition-colors duration-300">
        <Navbar />
        <Hero />
        <TechMarquee />
        <SelectedWork />
        <Process />
        <Service />
        <Experience />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}
