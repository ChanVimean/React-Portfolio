import { BiLogoTypescript } from "react-icons/bi";
import { CgFigma } from "react-icons/cg";
import { FaReact, FaYoutube } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import Subscribe from "./Subscribe";
import { SiShadcnui } from "react-icons/si";
import { JSX } from "react";
import ScrollTo from "../utils/ScrollTo";
import useSkeleton from "../hook/useSkeleton";
import { Skeleton } from "./ui/skeleton";

interface toolsType {
  title: string;
  icon?: JSX.Element;
  link?: string;
}

interface contactType extends toolsType {
  link: string;
}
interface quickToType extends toolsType {
  link: string;
}

const Footer = () => {
  const isLoading = useSkeleton();

  const quickTo: quickToType[] = [
    { title: "Home", link: "home" },
    { title: "Skills", link: "skills" },
    { title: "Projects", link: "projects" },
    { title: "Contact", link: "contact" },
  ];

  const contacts: contactType[] = [
    { title: "LinkedIn", link: "https://www.linkedin.com/in/chan-vimean" },
    { title: "Github", link: "https://github.com/ChanVimean" },
    { title: "Telegram", link: "https://t.me/chanvimean9" },
  ];

  const tools: toolsType[] = [
    { title: "React", icon: <FaReact />, link: "https://react.dev" },
    {
      title: "TypeScript",
      icon: <BiLogoTypescript />,
      link: "https://www.typescriptlang.org",
    },
    {
      title: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
      link: "https://tailwindcss.com",
    },
    {
      title: "Framer Motion",
      icon: <TbBrandFramerMotion />,
      link: "https://motion.dev",
    },
    { title: "Shadcn ui", icon: <SiShadcnui />, link: "https://ui.shadcn.com" },
    { title: "Figma", icon: <CgFigma />, link: "https://www.figma.com" },
  ];

  return (
    <div className="relative w-full bg-slate-900">
      <aside className="absolute w-full -top-12 left-1/2 transform -translate-x-1/2 z-10">
        <Subscribe />
      </aside>

      <article
        className="grid
        space-y-16 md:space-y-12 lg:space-y-0
        pt-48 md:pt-32 px-8  grid-cols-1
        py-16    md:px-24 md:grid-cols-2
        lg:py-20 lg:px-32 lg:grid-cols-4"
      >
        <section className="flex flex-col text-center lg:text-start space-y-6">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            Rok Rak Dev
          </h1>
          {isLoading ? (
            <Skeleton className="w-full h-16 bg-blue-950" />
          ) : (
            <p className="text-md md:text-lg">
              Crafting full-stack interfaces with design in mind. Inspired by
              clean code & good vibes.
            </p>
          )}
        </section>

        <section className="flex flex-col text-center items-center space-y-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Quick To
          </h1>
          <ul className="text-center text-md md:text-lg">
            {isLoading
              ? // Render 3 skeletons for footer text
                Array(quickTo.length)
                  .fill(0)
                  .map((_, index) => (
                    <li key={index} className="space-y-4">
                      <Skeleton className="w-24 h-6 mb-2 bg-sky-950" />
                    </li>
                  ))
              : // Render actual `quickTo` items when not loading
                quickTo.map((nav, index) => (
                  <li key={index} onClick={() => ScrollTo(nav.link)}>
                    <p className="underline-hover">{nav.title}</p>
                  </li>
                ))}
          </ul>
        </section>

        <section className="flex flex-col text-center items-center space-y-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Social Contact
          </h1>
          <ul className="text-center text-md md:text-lg">
            {isLoading
              ? // Render 3 skeletons for footer text
                Array(contacts.length)
                  .fill(0)
                  .map((_, index) => (
                    <li key={index} className="space-y-4">
                      <Skeleton className="w-24 h-6 mb-2 bg-blue-950" />
                    </li>
                  ))
              : // Render actual `quickTo` items when not loading
                quickTo.map((contact, index) => (
                  <li key={index} onClick={() => ScrollTo(contact.link)}>
                    <p className="underline-hover">{contact.title}</p>
                  </li>
                ))}
          </ul>
        </section>

        <section className="flex flex-col text-center space-y-6">
          <h1 className="text-3xl font-semibold">Tool Used</h1>
          <ul className="flex flex-col space-y-2 items-center text-md md:text-lg">
            {isLoading
              ? Array(tools.length)
                  .fill(0)
                  .map((_, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Skeleton className="w-32 h-6 bg-sky-950" />
                      <Skeleton className="w-8 h-8 bg-blue-950 rounded-full" />
                    </li>
                  ))
              : tools.map((tool, index) => (
                  <li key={index} className="underline-hover">
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <span>{tool.title}</span>
                      {tool.icon}
                    </a>
                  </li>
                ))}
          </ul>
        </section>
      </article>

      <aside className="flex space-x-2 justify-center bg-slate-950 py-4">
        <span>Built with love & inspired by</span>
        <a
          href="https://youtu.be/hYv6BM2fWd8?si=04ONubsLH5ZhWmOq"
          target="_blank"
          rel="noopener noreferer"
          className="flex items-center space-x-2 cursor-pointer"
        >
          <FaYoutube className="text-xl text-red-600" />
          <span className="font-semibold text-blue-400 hover:text-blue-500 active:text-blue-300">
            webdecoded
          </span>
        </a>
      </aside>
    </div>
  );
};

export default Footer;
