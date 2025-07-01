import Threads from "../elements/components/Threads";
import SplitText from "../elements/components/SplitText";
import SplashCursor from "../elements/components/SplashCursor";

const HomePages = () => {
  return (
    <div className="w-full h-[100dvh] bg-slate-950 mt-20 relative">
      <div className="z-50">
        <SplashCursor />
      </div>
      <div className="w-full h-full">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="text-white font-poppins absolute top-20 left-1/2 -translate-x-1/2">
        <div className="flex flex-col gap-4">
          <SplitText
            text="Welcome to"
            className="text-4xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <SplitText
            text="My Portfolio Website"
            className="text-4xl font-semibold text-center"
            delay={100}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePages;
