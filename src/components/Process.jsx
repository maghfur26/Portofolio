import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "Memahami kebutuhan bisnis, target audience, dan goals project melalui diskusi mendalam.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description:
      "Merancang wireframe dan UI/UX yang intuitif, estetis, dan sesuai brand identity.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description:
      "Membangun website dengan clean code, performa optimal, dan responsive di semua device.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description:
      "Deployment, testing final, dan support pasca-launch untuk memastikan semuanya berjalan lancar.",
  },
];

export default function Process() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="font-display text-xs tracking-[0.2em] uppercase font-medium text-text-secondary mb-4 block">
            /HOW I WORK
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-5xl text-text-primary">
            Proses Kerja
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative cursor-pointer"
            >
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-border bg-bg transition-all duration-500 hover:border-text-primary/15 hover:shadow-xl hover:shadow-black/[0.04] hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-bg-soft flex items-center justify-center transition-all duration-500 group-hover:bg-text-primary group-hover:text-white text-text-primary dark:group-hover:text-black">
                    <step.icon size={24} />
                  </div>
                  <span className="font-display text-4xl sm:text-5xl font-bold text-text-primary/[0.04] transition-all duration-500 group-hover:text-text-primary/[0.1]">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 lg:-right-5 w-3 h-[1px] bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
