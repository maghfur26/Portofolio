type Props = {
  text: string;
};

const HeadingText = (props: Props) => {
  return (
    <header className="font-poppins text-center">
      <h1
        className="text-2xl font-bold text-white animate-pulse"
        style={{
          textShadow: `
              0 0 5px #8D00CF,
              0 0 10px #8D00CF,
              0 0 20px #8D00CF,
              0 0 40px #8D00CF
            `,
        }}
      >
        {props.text}
      </h1>
    </header>
  );
};

export default HeadingText;
