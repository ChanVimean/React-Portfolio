import { FaGithubSquare, FaLinkedin, FaTelegram } from "react-icons/fa"


const NavBar = () => {
  return (
    <div className="flex w-full items-center justify-between bg-slate-800 px-4 md:px-12 lg:px-32 py-4">
      <h1 className="font-semibold text-md md:text-lg lg:text-xl">Rok Rak Dev</h1>

      <menu className="flex items-center justify-end space-x-4 text-sm md:text-md lg:text-lg font-semibold">
        <ul className="flex space-x-2 md:space-x-4">
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>

        <ul className="hidden md:flex space-x-4 text-xl lg:text-2xl">
          <li><FaLinkedin /></li>
          <li><FaGithubSquare /></li>
          <li><FaTelegram /></li>
        </ul>

        <button className="hidden md:block px-6 py-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-300 duration-150 ease-in-out">
          Contact
        </button>
      </menu>
    </div>
  )
}

export default NavBar