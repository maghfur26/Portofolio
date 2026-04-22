import Me from "../assets/me.png";
import About from "../elements/fragments/About";
import Portfolio from "../elements/fragments/Portofolio";
import Contact from "../elements/fragments/Contact";
import Sertifikat from "../elements/fragments/Sertifikat";

const HomePages = () => {
  return (
    <div className="w-full" id="home">
      {/* ===== HERO SECTION ===== */}
      <section className="w-full min-h-[100dvh] relative overflow-hidden">
        {/* Background layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-100/40 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        {/* Dot grid background for texture */}
        <div className="absolute inset-0 dot-grid opacity-40"></div>

        {/* Content wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-[100dvh] flex items-center">
          <div className="w-full grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center py-32 lg:py-0">
            
            {/* Left — Typography */}
            <div className="space-y-8 max-w-2xl">
              {/* Status badge */}
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full shadow-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-text-secondary">Available for work</span>
                </span>
              </div>

              {/* Main heading — dramatic display typography */}
              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                <h1 className="hero-display text-text-primary">
                  I craft
                </h1>
                <h1 className="hero-display text-gradient">
                  digital
                </h1>
                <h1 className="hero-display text-text-primary">
                  experiences<span className="text-accent">.</span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <span className="font-semibold text-text-primary">Maghfur Hasani</span> — Full-stack web developer turning complex ideas into clean, performant applications.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
                <a
                  href="#portfolio"
                  onClick={(e) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                  className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-accent text-white text-sm sm:text-base font-semibold rounded-2xl hover:bg-accent-dark transition-all duration-200 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
                >
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                  className="px-5 sm:px-7 py-3 sm:py-3.5 text-text-primary text-sm sm:text-base font-semibold rounded-2xl border-2 border-border hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
                >
                  Get In Touch
                </a>
              </div>

              {/* Quick stats */}
              <div className="flex items-center gap-5 sm:gap-8 pt-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div>
                  <div className="text-2xl font-bold text-text-primary">2+</div>
                  <div className="text-xs text-text-tertiary uppercase tracking-wider font-medium">Projects</div>
                </div>
                <div className="w-px h-10 bg-border"></div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">8+</div>
                  <div className="text-xs text-text-tertiary uppercase tracking-wider font-medium">Certificates</div>
                </div>
                <div className="w-px h-10 bg-border"></div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">10+</div>
                  <div className="text-xs text-text-tertiary uppercase tracking-wider font-medium">Technologies</div>
                </div>
              </div>
            </div>

            {/* Right — Photo with decorative elements */}
            <div className="hidden lg:flex items-center justify-center relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
              {/* Decorative morphing blob behind */}
              <div className="absolute w-[380px] h-[380px] bg-gradient-to-br from-blue-200/60 via-indigo-200/40 to-violet-200/60 animate-morph animate-gradient"></div>
              
              {/* Decorative ring */}
              <div className="absolute w-[340px] h-[340px] border-2 border-dashed border-accent/15 rounded-full animate-[spin_30s_linear_infinite]"></div>

              {/* Photo */}
              <div className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-2xl shadow-accent/10 border-4 border-white ring-1 ring-border">
                <img
                  src={Me}
                  alt="Maghfur Hasani"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-border animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-sm font-semibold text-text-primary">Web Developer</span>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -top-2 -right-4 bg-white px-3 py-2 rounded-xl shadow-lg border border-border animate-float" style={{ animationDelay: "1.5s" }}>
                <span className="text-xs font-semibold text-accent">React & Node.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => {
            const el = document.getElementById("about");
            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float cursor-pointer"
          aria-label="Scroll down"
        >
          <div className="w-6 h-10 border-2 border-text-tertiary/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-text-tertiary rounded-full animate-[bounce_1.5s_infinite]"></div>
          </div>
        </button>
      </section>

      {/* ===== CONTENT SECTIONS ===== */}
      <About />
      <Portfolio />
      <Sertifikat />
      <Contact />
    </div>
  );
};

export default HomePages;
