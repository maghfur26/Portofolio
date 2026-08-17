import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PillButton({
  children,
  variant = "outline",
  icon = true,
  iconPosition = "right",
  href,
  onClick,
  className = "",
  dark = false,
}) {
  const base =
    "group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer select-none";

  const variants = {
    outline: dark
      ? "border border-white/10 text-white bg-transparent hover:bg-white/10"
      : "border border-border text-text-primary bg-bg hover:bg-bg-soft hover:border-text-primary/20 hover:shadow-sm",
    solid: dark
      ? "bg-white text-surface-dark hover:bg-white/90"
      : "bg-surface-dark text-white hover:bg-surface-light hover:shadow-lg hover:shadow-black/10",
    ghost: "text-text-secondary hover:text-text-primary bg-transparent",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <ArrowUpRight
          size={16}
          className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
        />
      )}
      {children}
      {icon && iconPosition === "right" && (
        <ArrowUpRight
          size={16}
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      {content}
    </motion.a>
  );
}
