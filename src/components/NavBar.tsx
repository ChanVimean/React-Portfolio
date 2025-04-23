import { FaGithubSquare, FaLinkedin, FaTelegram } from "react-icons/fa"


const NavBar = () => {
  return (
    <div className="flex absolute z-50 w-full items-center justify-between px-4 md:px-12 lg:px-32 py-4">
      <h1 className="font-semibold text-md md:text-lg lg:text-xl">Rok Rak Dev</h1>

      <menu className="flex items-center justify-end space-x-4 text-sm md:text-md lg:text-lg font-semibold">
        <ul className="flex space-x-2 md:space-x-4">
          <li className="underline-hover">Home</li>
          <li className="underline-hover">Skills</li>
          <li className="underline-hover">Projects</li>
        </ul>

        <ul className="hidden md:flex space-x-4 text-xl lg:text-2xl">
          <li className="text-blue-400 hover:text-blue-500 active:text-blue-300 cursor-pointer duration-150 ease-in-out">
            <FaLinkedin />
          </li>
          <li className="text-blue-400 hover:text-blue-500 active:text-blue-300 cursor-pointer duration-150 ease-in-out">
            <FaGithubSquare />
          </li>
          <li className="text-blue-400 hover:text-blue-500 active:text-blue-300 cursor-pointer duration-150 ease-in-out">
            <FaTelegram />
          </li>
        </ul>

        <button className="hidden md:block px-6 py-2 cursor-pointer bg-blue-400 hover:bg-blue-500 active:bg-blue-300 duration-150 ease-in-out">
          Contact
        </button>
      </menu>
    </div>
  )
}

export default NavBar