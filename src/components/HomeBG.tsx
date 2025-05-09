import { motion } from "framer-motion";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Typewriter } from "react-simple-typewriter";

const messages: string[] = [
  "Hey there, space traveler!",
  "The stars are beautiful tonight 🌌",
  "Care for a cosmic dance? 🪐",
  "Zero gravity is fun!",
  "Watch out for meteor showers!",
  "Mission control, we have a problem 🚀",
  "I'm floating in space!",
];

const HeroContainer = () => {
  const [randomMsg, setRandomMsg] = useState<number>(0);

  const handleHover = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setRandomMsg(randomIndex);
  };

  return (
    <TooltipProvider>
      <div className="relative w-full h-full">
        <img
          src="/neptune.png"
          alt="Neptune"
          className="w-full h-full object-contain"
        />

        {/* Astronaut */}
        <div
          className="absolute top-1/2 left-[42%] sm:left-[44%] md:left-1/2 transform -translate-x-1/2 -translate-y-[35%] z-10
          w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <img
                src="/astro.png"
                alt="Astronaut"
                className="w-full h-full object-contain"
                onMouseEnter={handleHover}
              />
            </TooltipTrigger>
            <TooltipContent className="px-2 py-1 md:px-4 md:py-2 bg-black/75 font-medium text-md md:text-lg">
              <Typewriter
                words={[messages[randomMsg]]}
                loop={1}
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1000}
                cursor
                cursorStyle={"_"}
              />
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Rocket */}
        <div className="absolute -top-2 -right-2 w-14 h-14 lg:w-16 lg:h-16 z-10 scale-x-[-1] rotate-[68deg]">
          <img
            src="/spaceship.png"
            alt="Rocket"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </TooltipProvider>
  );
};

const HomeBG = ({ scrollY }: { scrollY: number }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <picture
        style={{
          transform: `translateY(${scrollY * 0.7}px)`,
          willChange: "transform",
        }}
        className="absolute w-full h-[120vh] top-[-10vh] z-0"
      >
        <source srcSet="Dark.avif" type="image/avif" />
        <img
          src="DarkSpace.jpg"
          alt="Space"
          className="w-full h-full object-fill"
        />
      </picture>

      {/* Uranus - Top Center */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-0 w-10 h-10 lg:w-12 lg:h-12">
        <img
          src="/uranus.png"
          alt="Uranus"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Neptune + Framer Motion */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute top-1/2 transform -translate-y-1/2 z-0
          w-[340px] h-[340px]
          sm:w-[360px] sm:h-[360px]
          md:w-[440px] md:h-[440px]
          lg:w-[512px] lg:h-[512px]
          right-[-90px] sm:right-[-80px] md:right-10 lg:right-60
          "
      >
        <HeroContainer />
      </motion.div>
    </div>
  );
};

export default HomeBG;
