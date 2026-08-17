export default function StatusBadge({ text, variant = "default", className = "" }) {
  const dotColor = variant === "available" ? "bg-accent-green" : "bg-text-secondary";

  return (
    <div
      className={`inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-bg text-xs sm:text-sm font-medium text-text-primary ${className}`}
    >
      <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
        <span
          className={`absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75 animate-pulse-dot`}
        />
        <span
          className={`relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full ${dotColor}`}
        />
      </span>
      {text}
    </div>
  );
}
