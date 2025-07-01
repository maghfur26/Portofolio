import HeadingText from "../components/HeadingText";

const portfolioData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with React and Node.js featuring real-time inventory management and secure payment processing.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    tags: ["JavaScript", "API Integration", "Chart.js"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description:
      "Comprehensive social media analytics dashboard with real-time data visualization and engagement metrics.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "D3.js", "REST API"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Restaurant Website",
    description:
      "Modern restaurant website with online reservation system, menu showcase, and customer review integration.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Personal portfolio website with interactive animations, smooth scrolling, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    link: "#",
    github: "#",
    featured: false,
  },
];

function Portfolio() {
  return (
    <div className="w-full min-h-screen bg-slate-950 px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <HeadingText text="My Portfolio" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto font-poppins">
            Explore my latest projects and creative solutions. Each project
            represents a unique challenge and showcases different aspects of my
            development skills.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 font-poppins">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              ✨ Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData
              .filter((project) => project.featured)
              .map((project) => (
                <div key={project.id} className="group relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                  <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 font-poppins group-hover:text-yellow-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-slate-800 text-yellow-400 rounded-full text-xs font-medium border border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          className="flex-1 bg-slate-800 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-center border border-slate-700 hover:border-slate-600 hover:text-white transition-all duration-300"
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 font-poppins">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              🚀 All Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData
              .filter((project) => !project.featured)
              .map((project) => (
                <div key={project.id} className="group">
                  <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/50">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40"></div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-white mb-2 font-poppins group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-slate-800 text-cyan-400 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-slate-800 text-gray-500 rounded text-xs">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <a
                          href={project.link}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-2 rounded-lg text-sm font-medium text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                        >
                          Demo
                        </a>
                        <a
                          href={project.github}
                          className="flex-1 bg-slate-800 text-gray-300 px-3 py-2 rounded-lg text-sm font-medium text-center border border-slate-700 hover:border-slate-600 hover:text-white transition-all duration-300"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-900 rounded-2xl p-12 border border-slate-800">
          <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
            Ready to Work Together?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and bring creative
            ideas to life. Let's discuss your next project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all duration-300">
              Start a Project
            </button>
            <button className="px-8 py-3 bg-slate-800 text-gray-300 font-semibold rounded-full border border-slate-700 hover:border-slate-600 hover:text-white hover:scale-105 transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
