import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";
import { siteData } from "../data/siteData";

export default function Service() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="service" className="relative py-16 sm:py-20 lg:py-32 cloud-texture">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <SectionLabel label="/SERVICE" />
        </div>

        <div className="max-w-4xl">
          {siteData.services.map((service) => {
            const isOpen = openId === service.id;

            return (
              <div key={service.id}>
                <button
                  onClick={() => toggle(service.id)}
                  className="w-full text-left cursor-pointer group/item"
                >
                  {isOpen ? (
                    <motion.div
                      layout
                      className="bg-surface-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white transition-shadow duration-500 shadow-xl shadow-black/10"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <motion.h3
                            layout="position"
                            className="font-display font-bold text-2xl sm:text-3xl lg:text-5xl uppercase mb-3 sm:mb-4"
                          >
                            {service.title}
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg"
                          >
                            {service.description}
                          </motion.p>
                        </div>

                        <motion.div
                          layout
                          className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/25 hover:rotate-90"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenId(null);
                          }}
                        >
                          <X size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
                        animate={{ opacity: 1, rotate: -8, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="mt-6 sm:mt-8 ml-auto w-24 h-36 sm:w-32 sm:h-48 lg:w-40 lg:h-56 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:rotate-0 hover:scale-105"
                      >
                        <span className="text-white/20 text-[10px] sm:text-xs">
                          Mockup
                        </span>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <div className="border-b border-border py-5 sm:py-6 lg:py-8 transition-all duration-300 group-hover/item:pl-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-4xl uppercase text-text-primary transition-colors duration-300 group-hover/item:text-text-primary">
                          {service.title}
                        </h3>
                        <ArrowUpRight
                          size={20}
                          className="text-text-secondary shrink-0 sm:w-6 sm:h-6 transition-all duration-300 group-hover/item:text-text-primary group-hover/item:translate-x-1 group-hover/item:-translate-y-1"
                        />
                      </div>
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
