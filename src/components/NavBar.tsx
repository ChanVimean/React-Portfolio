import ScrollTo from "../utils/ScrollTo";
import SocialLink from "./SocialLink";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

type NavMenuType = {
  menu: string
  section: string
}

interface NavBarProps {
  version?: string
  feature?: React.ReactNode
}

const NavBar: React.FC<NavBarProps> = ({ version, feature }) => {

  const navMenu: NavMenuType[] = [
    { menu: "Home", section: "home" },
    { menu: "Skills", section: "skills" },
    { menu: "Projects", section: "projects" },
    { menu: "Resume", section: "resume" }
  ];

  return (
    <div className="flex fixed z-50 w-full items-center justify-between
    bg-black/25 backdrop-blur-md
      px-4 py-2 md:px-12 lg:px-32 lg:py-4"
    >
      <h1 className="font-semibold text-md md:text-2xl lg:text-3xl">
        Rok Rak Dev
      </h1>

      <menu className="flex items-center space-x-4 text-sm md:text-lg lg:text-xl font-semibold">
        <ul className="flex space-x-2 md:space-x-4">
          {navMenu.map((nav, index) =>
            <li
              key={index}
              onClick={() => ScrollTo(nav.section)}
              className="underline-hover"
            >
              {nav.menu}
            </li>
          )}
        </ul>

        <section className="hidden lg:block">
          <SocialLink />
        </section>

        <button
          onClick={() => ScrollTo("contact")}
          className="hidden md:block custom-blue-btn"
        >
          Contact
        </button>
        {/* Version Controll */}
        <section className="hidden md:block text-sm text-white/50">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="cursor-help">
                {version}
              </TooltipTrigger>
              {feature && (
                <TooltipContent>
                  <p className="px-2 py-1">{feature}</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </section>
      </menu>
    </div>
  );
};

export default NavBar;
