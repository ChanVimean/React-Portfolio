import { FaBootstrap, FaReact } from "react-icons/fa"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'
import { SiAdobephotoshop, SiAdobepremierepro, SiExpress } from "react-icons/si"
import { BiLogoTypescript } from "react-icons/bi"
import { CgFigma } from "react-icons/cg"
import { RiTailwindCssFill } from "react-icons/ri"
import { JSX } from "react"

type skillTreeTypes = {
  id: number
  title: string
  percentage: number
  icon: JSX.Element
}


const Skill = () => {

  const skillTree: skillTreeTypes[] = [
    { id: 1, title: "React", percentage: 85, icon: <FaReact /> },
    { id: 2, title: "Express", percentage: 80, icon: <SiExpress /> },
    { id: 3, title: "TypeScript", percentage: 60, icon: <BiLogoTypescript /> },
    { id: 4, title: "Figma", percentage: 90, icon: <CgFigma /> },
    { id: 5, title: "Tailwind", percentage: 85, icon: <RiTailwindCssFill /> },
    { id: 6, title: "Bootstrap", percentage: 80, icon: <FaBootstrap /> },
    { id: 7, title: "Premier Pro", percentage: 60, icon: <SiAdobepremierepro /> },
    { id: 8, title: "Photoshop", percentage: 40, icon: <SiAdobephotoshop /> }
  ]

  return (
    <div className="w-full h-auto flex flex-col items-center space-y-4 bg-slate-950
      px-4 py-16
      md:p-16
      lg:px-32 lg:py-24"
    >

      <h1 className="text-xl md:text-3xl font-semibold">My Skills</h1>

      <p className="text-center text-md md:text-lg">
        Inspired by design, driven by code. These are the technologies
        I use to shape the digital experience I imagine.
      </p>

      <Carousel className="w-full lg:w-1/2">
        <CarouselContent>
          {skillTree.map(skill =>
            <CarouselItem
              key={skill.id}
              className="basis-1/1 md:basis-1/2 lg:basis-1/3
                flex flex-col space-y-4 items-center justify-center py-6"
            >
              <div className="w-28">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    pathColor: "rgb(150, 75, 255)",
                    textColor: "#fff",
                    trailColor: "rgb(50, 50, 50)",
                  })}
                />
              </div>
              <ul className="flex items-center justify-center space-x-2 text-xl font-semibold">
                <li>{skill.title}</li>
                <li>{skill.icon}</li>
              </ul>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="text-black hover:bg-slate-300 active:bg-slate-200 duration-150 ease-in-out cursor-pointer" />
        <CarouselNext className="text-black hover:bg-slate-300 active:bg-slate-200 duration-150 ease-in-out cursor-pointer" />
      </Carousel>

    </div>
  )
}

export default Skill