import { FaGithubSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import ScrollTo from "../utils/ScrollTo";

const NavBar = () => {
  return (
    <div className="flex absolute z-50 w-full items-center justify-between px-4 md:px-12 lg:px-32 py-4">
      <h1 className="font-semibold text-md md:text-lg lg:text-xl">
        Rok Rak Dev
      </h1>

      <menu className="flex items-center justify-end space-x-4 text-sm md:text-md lg:text-lg font-semibold">
        <ul className="flex space-x-2 md:space-x-4">
          <li onClick={() => ScrollTo("home")} className="underline-hover">
            Home
          </li>
          <li className="underline-hover" onClick={() => ScrollTo("skills")}>
            Skills
          </li>
          <li className="underline-hover" onClick={() => ScrollTo("projects")}>
            Projects
          </li>
        </ul>

        <ul className="hidden md:flex space-x-4 text-xl lg:text-2xl">
          <li className="text-blue-400 hover:text-blue-500 active:text-blue-300 cursor-pointer duration-150 ease-in-out">
            <a
              href="https://www.linkedin.com/in/chan-vimean"
              target="_blank"
              rel="noopner noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="text-blue-400 hover:text-blue-500 active:text-blue-300 cursor-pointer duration-150 ease-in-out">
            <a
              href="https://github.com/ChanVimean"
              target="_blank"
              rel="noopner noreferrer"
            >
              <FaGithubSquare />
            </a>
          </li>
          <li className="text-blue-400 hover:text-blue-500 active:text-blue-300 cursor-pointer duration-150 ease-in-out">
            <a
              href="https://t.me/chanvimean9"
              target="_blank"
              rel="noopner noreferrer"
            >
              <FaTelegram />
            </a>
          </li>
        </ul>

        <button
          onClick={() => ScrollTo("contact")}
          className="hidden md:block custom-blue-btn"
        >
          Contact
        </button>
      </menu>
    </div>
  );
};

export default NavBar;
