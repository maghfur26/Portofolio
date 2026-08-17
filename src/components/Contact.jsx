import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import StatusBadge from "./ui/StatusBadge";
import { siteData } from "../data/siteData";
import profilePhoto from "../assets/me.png";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-32 cloud-texture">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="border border-border rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-6 sm:p-10 lg:p-20 bg-bg/50 backdrop-blur-sm">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <StatusBadge
                text={siteData.availability}
                variant="available"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase text-text-primary mb-4 sm:mb-6 max-w-3xl leading-tight"
            >
              Have a Project in Mind?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-secondary text-sm sm:text-base lg:text-lg max-w-lg mb-8 sm:mb-10 leading-relaxed"
            >
              Let's work together to bring your ideas to life. I'm always open
              to new opportunities and interesting projects.
            </motion.p>

            <motion.a
              href={siteData.whatsappUrl}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-surface-dark text-white text-sm font-medium hover:bg-surface-light transition-colors duration-200 mb-10 sm:mb-14"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
              <ArrowUpRight size={18} />
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            >
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-surface-dark text-white text-xs sm:text-sm font-medium">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={profilePhoto}
                    alt={siteData.name.first}
                    className="w-full h-full object-cover grayscale"
                  />
                </span>
                {siteData.name.first} {siteData.name.last}
              </div>

              {siteData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-border bg-bg text-xs sm:text-sm font-medium text-text-primary hover:bg-bg-soft transition-all duration-200"
                >
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-text-primary/10 flex items-center justify-center text-[8px] sm:text-[10px]">
                    {social.name.charAt(0)}
                  </span>
                  {social.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-text-secondary/40 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} {siteData.name.first}{" "}
            {siteData.name.last}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
