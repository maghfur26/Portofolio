import Orb from "../elements/components/Orb";
import SplitText from "../elements/components/SplitText";
import SplashCursor from "../elements/components/SplashCursor";
import Particles from "../elements/components/Particles";
import About from "../elements/fragments/About";
import Portfolio from "../elements/fragments/Portofolio";
import Contact from "../elements/fragments/Contact";
import Sertifikat from "../elements/fragments/Sertifikat";

const HomePages = () => {
  return (
    <div className="w-full h-[100dvh] relative">
      <SplashCursor />
      <div className="w-full h-full py-10 relative">
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
              className="text-2xl md:text-4xl font-semibold text-center"
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
      <div className="bg-slate-950 py-10">
        <About />
        <Portfolio />
        <Sertifikat />
        <Contact />
      </div>
    </div>
  );
};

export default HomePages;
