import { FaBootstrap, FaReact } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiExpress,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { CgFigma } from "react-icons/cg";
import { RiTailwindCssFill } from "react-icons/ri";
import { JSX, useState } from "react";
import { Skeleton } from "../components/ui/skeleton";
import useSkeleton from "../hook/useSkeleton";

type skillTreeTypes = {
  id: number;
  title: string;
  percentage: number;
  icon: JSX.Element;
};

const Skill = () => {
  const isLoading = useSkeleton();

  const skillTree: skillTreeTypes[] = [
    { id: 1, title: "React", percentage: 85, icon: <FaReact /> },
    { id: 2, title: "Express", percentage: 80, icon: <SiExpress /> },
    { id: 3, title: "TypeScript", percentage: 60, icon: <BiLogoTypescript /> },
    { id: 4, title: "Figma", percentage: 90, icon: <CgFigma /> },
    { id: 5, title: "Tailwind", percentage: 85, icon: <RiTailwindCssFill /> },
    { id: 6, title: "Bootstrap", percentage: 80, icon: <FaBootstrap /> },
    {
      id: 7,
      title: "Premier Pro",
      percentage: 60,
      icon: <SiAdobepremierepro />,
    },
    { id: 8, title: "Photoshop", percentage: 40, icon: <SiAdobephotoshop /> },
  ];

  const [hover, setHover] = useState<number | null>(null);

  return (
    <div
      className="w-full h-auto flex flex-col items-center space-y-4 bg-slate-950
      px-4 py-16
      md:p-16
      lg:px-32 lg:py-24"
    >
      <h1 className="text-2xl md:text-4xl font-semibold">My Skills</h1>

      {isLoading ? (
        <Skeleton className="w-full md:w-5/6 lg:w-3/5 h-20 md:h-16 lg:h-8 bg-blue-950" />
      ) : (
        <p className="text-center text-md md:text-xl">
          Inspired by design, driven by code. These are the technologies I use
          to shape the digital experience I imagine.
        </p>
      )}

      <Carousel className="w-2/3 md:w-5/6 lg:max-w-screen-lg">
        <CarouselContent>
          {skillTree.map((skill) => (
            <CarouselItem
              key={skill.id}
              className="basis-1/1 md:basis-1/2 lg:basis-1/3 cursor-grab active:cursor-grabbing
                flex flex-col space-y-4 items-center justify-center py-6"
            >
              <div
                className="relative w-28 cursor-progress"
                onMouseEnter={() => setHover(skill.id)}
                onMouseLeave={() => setHover(null)}
              >
                <div
                  className={`transition-transform duration-300
                    ${hover === skill.id ? "animate-spin-slow" : ""}`}
                >
                  <CircularProgressbar
                    value={skill.percentage}
                    text={""}
                    styles={buildStyles({
                      pathColor: "rgb(150, 75, 255)",
                      textColor: "#fff",
                      trailColor: "rgb(50, 50, 50)",
                    })}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none font-bold text-2xl">
                  {skill.percentage}
                </div>
              </div>
              <ul className="flex items-center justify-center space-x-2 text-2xl font-semibold">
                <li>{skill.title}</li>
                <li>{skill.icon}</li>
              </ul>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black hover:bg-slate-300 active:bg-slate-200 duration-150 ease-in-out cursor-pointer" />
        <CarouselNext className="text-black hover:bg-slate-300 active:bg-slate-200 duration-150 ease-in-out cursor-pointer" />
      </Carousel>
    </div>
  );
};

export default Skill;
