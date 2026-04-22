import GymImage from "../../assets/gym.png";
import RentalImage from "../../assets/rental.png";

const portfolioData = [
  {
    id: 1,
    title: "Studio Rental Platform",
    description:
      "A full-stack rental platform built with React, Node.js, and MongoDB. Users can browse and rent studios for events, complete with booking management and payment integration.",
    image: RentalImage,
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    link: "https://fe-ceria-musix.vercel.app/",
    github: "#",
    year: "2024",
  },
  {
    id: 2,
    title: "Gymnasium Landing Page",
    description:
      "A modern, responsive landing page built with React and TypeScript, featuring smooth scroll animations, dynamic hero section, and clean conversion-focused design.",
    image: GymImage,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://landing-pages-gymnesium.vercel.app/",
    github: "#",
    year: "2024",
  },
];

function Portfolio() {
  return (
    <section
      className="w-full px-6 py-28 md:px-12 lg:px-20 bg-surface-alt relative overflow-hidden"
      id="portfolio"
    >
      {/* Background texture */}
      <div className="absolute inset-0 dot-grid opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-accent"></div>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Portfolio</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
          Selected <span className="text-gradient">works</span>
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mb-16 leading-relaxed">
          Each project is a unique piece of development, designed to solve real problems.
        </p>

        {/* Projects — Alternating large layout */}
        <div className="space-y-12 md:space-y-20">
          {portfolioData.map((project, index) => (
            <article key={project.id} className={`group grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-10 items-center ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              {/* Image side */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-3xl overflow-hidden bg-white border border-border shadow-lg shadow-accent/5 group-hover:shadow-xl group-hover:shadow-accent/10 transition-all duration-500">
                  {/* Browser chrome mockup */}
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-surface-alt border-b border-border">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60"></div>
                    <div className="flex-1 mx-4">
                      <div className="h-5 bg-white rounded-md border border-border flex items-center px-2">
                        <span className="text-[10px] text-text-tertiary truncate">{project.link}</span>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className={`space-y-5 ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                <div className={`flex items-center gap-3 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{project.year}</span>
                  <div className="w-6 h-px bg-border"></div>
                  <span className="text-xs font-medium text-text-tertiary">Project {String(project.id).padStart(2, "0")}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
                  {project.title}
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white text-text-secondary text-xs font-medium rounded-lg border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className={`flex flex-wrap gap-3 pt-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 bg-accent text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
                  >
                    Live Demo
                    <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 text-text-secondary text-sm sm:text-base font-semibold rounded-xl border-2 border-border hover:border-accent/30 hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
