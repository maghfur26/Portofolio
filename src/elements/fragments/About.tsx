import Me from "../../assets/me.png";

const techStack = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "Express.js", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "HTML/CSS", level: 95 },
];

function About() {
  return (
    <section className="w-full px-6 py-28 md:px-12 lg:px-20 bg-surface relative" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4 animate-fade-in">
          <div className="w-8 h-px bg-accent"></div>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">About</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-16">
          More about <span className="text-gradient">who I am</span>
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Card 1 — Photo (spans 1 col, 2 rows) */}
          <div className="lg:row-span-2 group">
            <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden border border-border p-3">
              <div className="w-full h-full rounded-2xl overflow-hidden relative min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">
                <img
                  src={Me}
                  alt="Maghfur Hasani"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold">Maghfur Hasani</h3>
                  <p className="text-white/70 text-sm mt-1">Full-Stack Web Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Bio */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="h-full bg-white rounded-3xl border border-border p-5 md:p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">Background</h3>
                  <p className="text-text-tertiary text-xs uppercase tracking-wider font-medium mt-0.5">Who I am</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed">
                I am a passionate web developer dedicated to creating beautiful, functional, and user-friendly websites. 
                With a keen eye for design and a love for clean code, I transform ideas into digital experiences that make a difference.
              </p>
              <p className="text-text-tertiary text-sm leading-relaxed mt-3">
                Based in Pemalang, Indonesia. Always learning, always building.
              </p>
            </div>
          </div>

          {/* Card 3 — Tech Stack */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="h-full bg-white rounded-3xl border border-border p-5 md:p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">Tech Stack</h3>
                  <p className="text-text-tertiary text-xs uppercase tracking-wider font-medium mt-0.5">Tools I work with</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 md:gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group/tech relative bg-surface-alt rounded-xl md:rounded-2xl p-2.5 md:p-3.5 border border-border hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 cursor-default overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs md:text-sm font-semibold text-text-primary group-hover/tech:text-accent transition-colors truncate">{tech.name}</span>
                    </div>
                    <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-700"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
