import Orb from "../elements/components/Orb";
import SplitText from "../elements/components/SplitText";
import SplashCursor from "../elements/components/SplashCursor";
import Particles from "../elements/components/Particles";

const HomePages = () => {
  return (
    <div className="w-full h-[100dvh] bg-slate-950 relative">
      <SplashCursor />
      <div className="absolute top-0 left-0 w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="w-full h-full">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <div className="text-white font-poppins absolute top-[54%] md:top-1/2 w-full text-center z-10 transform left-1/2 -translate-x-1/2 -translate-20">
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
            className="text-2xl font-semibold text-center"
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
