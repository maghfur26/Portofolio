import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import { siteData } from "../data/siteData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-32 cloud-texture">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="bg-surface-dark rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-6 sm:p-8 lg:p-16 relative overflow-hidden">
          <span className="watermark-light absolute top-4 sm:top-8 left-4 sm:left-8 text-[clamp(2rem,12vw,10rem)] leading-none whitespace-nowrap">
            EXPERIENCE
          </span>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-10 sm:mb-12 lg:mb-16">
              <SectionLabel label="/EXPERIENCE" light size="small" />

              <span className="text-white/40 text-xs sm:text-sm font-medium">
                {siteData.yearsExperience} years of experience
              </span>
            </div>

            <div className="relative">
              {siteData.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between py-5 sm:py-6 lg:py-7 ${
                    i < siteData.experience.length - 1
                      ? "border-b border-border-dark"
                      : ""
                  }`}
                >
                  <div>
                    <h3 className="font-display font-semibold text-base sm:text-lg lg:text-xl text-white mb-0.5 sm:mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-white/40 text-xs sm:text-sm lg:text-base">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-white/30 text-xs sm:text-sm mt-1.5 sm:mt-0 shrink-0">
                    {exp.period}
                  </span>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: 12, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden lg:block absolute -right-4 top-1/4 w-48 h-32 rounded-2xl bg-white/5 border border-white/10 rotate-12 animate-float"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/15 text-xs">Floating Card</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
