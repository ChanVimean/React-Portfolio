import { JSX } from "react";
import { FaGithubSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type listLinksType = {
  icon: JSX.Element;
  link: string;
  tooltip: string;
};

const listLinks: listLinksType[] = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/chan-vimean",
    tooltip: "LinkedIn",
  },
  {
    icon: <FaGithubSquare />,
    link: "https://github.com/ChanVimean",
    tooltip: "GitHub",
  },
  {
    icon: <FaTelegram />,
    link: "https://t.me/chanvimean9",
    tooltip: "Telegram",
  },
];

const SocialLink = () => {
  return (
    <TooltipProvider>
      <ul className="flex space-x-4 text-3xl md:text-4xl lg:text-3xl">
        {listLinks.map((list, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <li
                className="text-blue-400 cursor-pointer duration-150 ease-in-out
                hover:text-blue-500 active:text-blue-300"
              >
                <a href={list.link} target="_blank" rel="noopener noreferrer">
                  {list.icon}
                </a>
              </li>
            </TooltipTrigger>
            <TooltipContent>
              <p>{list.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </ul>
    </TooltipProvider>
  );
};

export default SocialLink;
