import { BiLogoTypescript } from "react-icons/bi"
import { CgFigma } from "react-icons/cg"
import { FaReact, FaYoutube } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { TbBrandFramerMotion } from "react-icons/tb"
import Subscribe from "./Subscribe"


const Footer = () => {
  return (
    <div className="relative w-full bg-cyan-950">

      <aside className="absolute w-full -top-12 left-1/2 transform -translate-x-1/2 z-10">
        <Subscribe />
      </aside>

      <article className="grid pt-48 md:pt-0
        space-y-16 md:space-y-12 lg:space-y-0
                    px-8     grid-cols-1
        py-16    md:px-24 md:grid-cols-2
        lg:py-20 lg:px-32 lg:grid-cols-4"
      >
        <section className="flex flex-col text-center lg:text-start space-y-6">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">Rok Rak Dev</h1>
          <p className="text-md md:text-lg">
            Crafting full-stack interfaces with design in mind.
            Inspired by clean code & good vibes.
          </p>
        </section>

        <section className="flex flex-col text-center space-y-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Quick To</h1>
          <ul className="text-center text-md md:text-lg">
            <li>
              <a href="#" className="underline-hover">Home</a>
            </li>
            <li>
              <a href="#" className="underline-hover">Skills</a>
            </li>
            <li>
              <a href="#" className="underline-hover">Projects</a>
            </li>
          </ul>
        </section>

        <section className="flex flex-col text-center space-y-6">
          <h1 className="text-3xl font-semibold">Contact</h1>
          <ul className="text-center text-md md:text-lg">
            <li>
              <a href="#" className="underline-hover">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="underline-hover">Github</a>
            </li>
            <li>
              <a href="#" className="underline-hover">Telegram</a>
            </li>
          </ul>
        </section>

        <section className="flex flex-col text-center space-y-6">
          <h1 className="text-3xl font-semibold">Tool Used</h1>
          <ul className="flex flex-col space-y-2 items-center text-md md:text-lg">
            <li className="underline-hover">
              <a href="#" className="flex items-center space-x-2">
                <span>React</span>
                <FaReact/>
              </a>
            </li>
            <li className="underline-hover">
              <a href="#" className="flex items-center space-x-2">
                <span>TypeScript</span>
                <BiLogoTypescript/>
              </a>
            </li>
            <li className="underline-hover">
              <a href="#" className="flex items-center space-x-2">
                <span>Tailwind CSS</span>
                <RiTailwindCssFill />
              </a>
            </li>
            <li className="underline-hover">
              <a href="#" className="flex items-center space-x-2">
                <span>Framer Motion</span>
                <TbBrandFramerMotion />
              </a>
            </li>
            <li className="underline-hover">
              <a href="#" className="flex items-center space-x-2">
                <span>Figma</span>
                <CgFigma />
              </a>
            </li>
          </ul>
        </section>
      </article>

      <aside className="flex space-x-2 justify-center bg-slate-900 py-4">
        <span>Built with love & inspired by</span>
        <button className="flex items-center space-x-2 cursor-pointer">
          <FaYoutube className="text-xl text-red-600" />
          <span className="text-blue-400 font-semibold">webdecoded</span>
        </button>
      </aside>

    </div>
  )
}

export default Footer