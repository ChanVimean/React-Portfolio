import { BiLogoTypescript } from "react-icons/bi"
import { CgFigma } from "react-icons/cg"
import { FaReact, FaYoutube } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { TbBrandFramerMotion } from "react-icons/tb"
import Subscribe from "./Subscribe"
import { SiShadcnui } from "react-icons/si"
import { JSX } from "react"


interface toolsType {
  id: number
  title: string,
  icon?: JSX.Element
}

interface contactType extends toolsType {
  link: string
}
interface quickToType extends toolsType {
  link: string
}

const Footer = () => {

  const quickTo: quickToType[] = [
    { id: 1, title: "Home", link: "#" },
    { id: 2, title: "Skills", link: "#" },
    { id: 3, title: "Projects", link: "#" }
  ]

  const contacts: contactType[] = [
    { id: 1, title: "LinkedIn", link: "#" },
    { id: 2, title: "Github", link: "#" },
    { id: 3, title: "Telegram", link: "#" }
  ]

  const tools: toolsType[] = [
    { id: 1, title: "React", icon: <FaReact/> },
    { id: 2, title: "TypeScript", icon: <BiLogoTypescript /> },
    { id: 3, title: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { id: 4, title: "Framer Motion", icon: <TbBrandFramerMotion /> },
    { id: 5, title: "Shadcn ui", icon: <SiShadcnui /> },
    { id: 6, title: "Figma", icon: <CgFigma /> }
  ]

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
            {quickTo.map(nav =>
              <li key={nav.id}>
                <a href={nav.link} className="underline-hover">
                  {nav.title}
                </a>
              </li>
            )}
          </ul>
        </section>

        <section className="flex flex-col text-center space-y-6">
          <h1 className="text-3xl font-semibold">Contact</h1>
          <ul className="text-center text-md md:text-lg">
          {contacts.map(contact =>
              <li key={contact.id}>
                <a href={contact.link} className="underline-hover">
                  {contact.title}
                </a>
              </li>
            )}
          </ul>
        </section>

        <section className="flex flex-col text-center space-y-6">
          <h1 className="text-3xl font-semibold">Tool Used</h1>
          <ul className="flex flex-col space-y-2 items-center text-md md:text-lg">
            {tools.map(tool =>
              <li key={tool.id} className="underline-hover">
                <a href="#" className="flex items-center space-x-2">
                  <span>{tool.title}</span>
                  {tool.icon}
                </a>
              </li>
            )}
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