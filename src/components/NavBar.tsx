import ScrollTo from "../utils/ScrollTo";
import SocialLink from "./SocialLink";

const NavBar = () => {
  return (
    <div className="flex fixed z-50 w-full items-center justify-between
    bg-black/25 backdrop-blur-md
      px-4 py-2 md:px-12 lg:px-32 lg:py-4"
    >
      <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl">
        Rok Rak Dev
      </h1>

      <menu className="flex items-center justify-end space-x-4 text-lg md:text-xl lg:text-2xl font-semibold">
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

        <section className="hidden lg:block">
          <SocialLink />
        </section>

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
