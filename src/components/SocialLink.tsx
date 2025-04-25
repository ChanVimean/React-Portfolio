import { JSX } from "react";
import { FaGithubSquare, FaLinkedin, FaTelegram } from "react-icons/fa";

type listLinksType = {
  icon: JSX.Element;
  link: string;
};

const listLinks: listLinksType[] = [
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/chan-vimean" },
  { icon: <FaGithubSquare />, link: "https://github.com/ChanVimean" },
  { icon: <FaTelegram />, link: "https://t.me/chanvimean9" },
];

const SocialLink = () => {
  return (
    <ul className="flex space-x-4 text-3xl">
      {listLinks.map((list, index) => (
        <li
          key={index}
          className="text-blue-400 cursor-pointer duration-150 ease-in-out
          hover:text-blue-500 active:text-blue-300"
        >
          <a href={list.link} target="_blank" rel="noopner noreferrer">
            {list.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLink;
