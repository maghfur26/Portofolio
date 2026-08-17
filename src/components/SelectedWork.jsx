import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";
import ProjectCard from "./ui/ProjectCard";
import PillButton from "./ui/PillButton";
import { siteData } from "../data/siteData";

const filters = ["All", "Real Project", "Exploration"];
const ITEMS_PER_PAGE = 4;

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef(null);

  const filteredProjects = siteData.projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Real Project") return p.type === "real";
    if (activeFilter === "Exploration") return p.type === "exploration";
    return true;
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const scrollToGrid = useCallback(() => {
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const goToPage = useCallback(
    (page) => {
      setCurrentPage(page);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToGrid();
        });
      });
    },
    [scrollToGrid]
  );

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToGrid();
      });
    });
  };

  return (
    <section id="work" className="relative py-16 sm:py-20 lg:py-32">
      <span className="watermark absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 text-[clamp(3rem,15vw,12rem)] leading-none whitespace-nowrap">
        PORTFOLIO
      </span>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="flex items-center justify-between mb-10 sm:mb-12 lg:mb-16">
          <SectionLabel label="/SELECTED WORK" />

          <PillButton
            href="#"
            variant="outline"
            className="hidden md:inline-flex"
          >
            View All Work
          </PillButton>
        </div>

        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 p-1 bg-bg-soft rounded-full shrink-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-text-primary text-white shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <PillButton
            href="#"
            variant="outline"
            className="md:hidden shrink-0"
          >
            View All
          </PillButton>
        </div>

        <motion.div
          ref={gridRef}
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
        >
          {paginatedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10 sm:mt-12">
            <button
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary transition-all duration-200 hover:border-text-primary/20 hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                      currentPage === page
                        ? "bg-text-primary text-white shadow-sm"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary transition-all duration-200 hover:border-text-primary/20 hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
