import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { techIcons } from "../../data/siteData";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block cursor-pointer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="rounded-xl bg-bg-soft shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="relative m-3 rounded-lg overflow-hidden aspect-[16/10]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div
            className="w-full h-full items-center justify-center hidden transition-transform duration-500 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)`,
            }}
          >
            <span
              className="text-6xl font-display font-bold opacity-15"
              style={{ color: project.color }}
            >
              {project.title.charAt(0)}
            </span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {project.type === "real" && (
            <span className="absolute top-3 left-3 bg-bg/85 backdrop-blur-md text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md text-text-primary shadow-sm">
              Real
            </span>
          )}

          <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1.5 group-hover:translate-y-0">
            {project.github && project.github !== "#" && (
              <span className="w-8 h-8 bg-bg/85 backdrop-blur-md rounded-lg flex items-center justify-center shadow-sm hover:bg-bg transition-colors">
                <Code2 size={14} className="text-text-primary" />
              </span>
            )}
            <span className="w-8 h-8 bg-bg/85 backdrop-blur-md rounded-lg flex items-center justify-center shadow-sm hover:bg-bg transition-colors">
              <ExternalLink size={14} className="text-text-primary" />
            </span>
          </div>
        </div>

        <div className="px-4 pb-4 pt-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-display font-semibold text-base text-text-primary">
              {project.title}
            </h3>
            <ArrowUpRight
              size={15}
              className="text-text-secondary shrink-0 transition-all duration-200 group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>

          {project.description && (
            <p className="text-text-secondary text-[13px] leading-relaxed mb-3 line-clamp-2">
              {project.description}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-text-primary/5 text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.techStack && project.techStack.length > 0 && (
            <div className="flex items-center gap-1.5 pt-3 border-t border-border">
              {project.techStack.map((tech) => {
                const techData = techIcons[tech];
                if (!techData) return null;
                return (
                  <div
                    key={tech}
                    className="w-6 h-6 rounded-md flex items-center justify-center"
                    style={{
                      backgroundColor: `${techData.color}12`,
                      color: techData.color,
                    }}
                    title={tech}
                  >
                    <span
                      className="w-3 h-3"
                      dangerouslySetInnerHTML={{ __html: techData.icon }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </motion.a>
  );
}
