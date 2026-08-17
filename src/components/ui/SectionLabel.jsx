export default function SectionLabel({
  label,
  size = "normal",
  light = false,
  className = "",
}) {
  return (
    <div className={`relative ${className}`}>
      <span
        className={`font-display text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium ${
          light ? "text-white/60" : "text-text-secondary"
        }`}
      >
        {label}
      </span>
      {size !== "small" && (
        <span
          className={`font-display font-bold uppercase pointer-events-none select-none absolute -top-8 sm:-top-12 -left-2 sm:-left-4 ${
            light
              ? "text-white/[0.03] text-[60px] sm:text-[90px] lg:text-[120px] leading-none"
              : "text-text-primary/[0.03] text-[60px] sm:text-[90px] lg:text-[120px] leading-none"
          }`}
        >
          {label.replace("/", "")}
        </span>
      )}
    </div>
  );
}
