import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "../data/siteData";
import profilePhoto from "../assets/me.png";

const socialColors = {
  WhatsApp: "#128C7E",
  Instagram: "#E4405F",
  LinkedIn: "#0A66C2",
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden mt-20">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-16 pt-14 sm:pt-16 lg:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-bold leading-[0.85] tracking-tight mb-6 sm:mb-8 lg:mb-10"
        >
          <span className="block text-[clamp(2.5rem,12vw,9rem)] text-outline uppercase">
            {siteData.name.first}
          </span>
          <span className="block text-[clamp(2.5rem,12vw,9rem)] text-text-primary uppercase">
            {siteData.name.last}
          </span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 max-w-md lg:mt-4"
          >
            <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-text-primary mb-2 sm:mb-3">
              {siteData.role}
            </h2>
            <p className="text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
              {siteData.bio}
            </p>
            <motion.a
              href={siteData.whatsappUrl}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-surface-dark text-white text-sm font-medium transition-all duration-300 hover:bg-surface-light hover:shadow-lg hover:shadow-black/10"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Let's collaborate
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="shrink-0 mx-auto lg:mx-0 w-[200px] h-[260px] sm:w-[260px] sm:h-[340px] lg:w-[320px] lg:h-[420px] lg:-mt-16"
          >
            <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-bg-soft cursor-pointer">
              <img
                src={profilePhoto}
                alt={siteData.name.first + " " + siteData.name.last}
                className="w-full h-full object-cover object-top  transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex flex-col gap-3 shrink-0 mt-4"
          >
            {siteData.socials.map((social, i) => {
              const isWhatsApp = social.name === "WhatsApp";
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className={`group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isWhatsApp
                      ? "bg-[#128C7E] text-white border border-transparent shadow-md shadow-[#128C7E]/20 hover:shadow-lg hover:shadow-[#128C7E]/30"
                      : "border border-border bg-bg text-text-primary hover:border-transparent hover:text-white hover:shadow-md"
                  }`}
                  style={!isWhatsApp ? { "--hover-bg": socialColors[social.name] } : undefined}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: isWhatsApp ? "#20BD5A" : socialColors[social.name],
                    color: "#ffffff",
                    borderColor: "transparent",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] transition-all duration-300 ${
                    isWhatsApp ? "bg-white/25" : "bg-text-primary/10 group-hover:bg-white/25"
                  }`}>
                    {social.name.charAt(0)}
                  </span>
                  {social.name}
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex lg:hidden flex-row flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 justify-center"
        >
          {siteData.socials.map((social) => {
            const isWhatsApp = social.name === "WhatsApp";
            return (
              <motion.a
                key={social.name}
                href={social.url}
                className={`group inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isWhatsApp
                    ? "bg-[#128C7E] text-white border border-transparent shadow-md shadow-[#128C7E]/20"
                    : "border border-border bg-bg text-text-primary hover:text-white hover:shadow-md"
                }`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: isWhatsApp ? "#20BD5A" : socialColors[social.name],
                  color: "#ffffff",
                  borderColor: "transparent",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] transition-all duration-300 ${
                  isWhatsApp ? "bg-white/25" : "bg-text-primary/10 group-hover:bg-white/25"
                }`}>
                  {social.name.charAt(0)}
                </span>
                {social.name}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
