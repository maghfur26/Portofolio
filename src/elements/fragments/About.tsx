import Me from "../../assets/me.png";
import HeadingText from "../components/HeadingText";

function About() {
  return (
    <div className="w-full min-h-screen bg-slate-950 px-6 py-16 md:px-12 lg:px-20" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <HeadingText text="About Me" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="relative group">
              {/* Glow effect background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-full bg-gradient-to-br from-slate-800 to-slate-700 p-2">
                <img
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 ease-in-out transform hover:scale-105"
                  src={Me}
                  alt="Profile picture"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins">
                Hello, I'm a{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Web Developer
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed font-poppins">
                I am a passionate web developer dedicated to creating beautiful,
                functional, and user-friendly websites. With a keen eye for
                design and a love for clean code, I transform ideas into digital
                experiences that make a difference.
              </p>

              <p className="text-gray-400 text-base leading-relaxed font-poppins">
                My expertise spans across modern web technologies including
                HTML5, CSS3, JavaScript, React, and Node.js. I'm constantly
                learning and staying up-to-date with the latest trends and best
                practices in the ever-evolving world of web development.
              </p>
            </div>

            {/* Skills/Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white font-poppins">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Typescript",
                  "React",
                  "Node.js",
                  "MongoDB",
                  "PostgreSQL",
                  "express.js",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium border border-slate-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
