type Props = {
  text: string;
  subtitle?: string;
};

const HeadingText = ({ text, subtitle }: Props) => {
  return (
    <header className="font-poppins">
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
        {text}
      </h2>
      <div className="mt-4 w-12 h-1 bg-accent rounded-full"></div>
      {subtitle && (
        <p className="mt-5 text-text-secondary text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default HeadingText;
