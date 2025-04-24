import { useState } from "react"
import GridBox from "../components/GridBox"
import projectList from '../../projects.json'

type TabsType = {
  title: string
}

type ProjectListType = {
  id: number
  title: string,
  image: string,
  date: string,
  host: string
  desc: string
  link: string
}

const Projects = () => {

  const [activeTab, setActiveTab] = useState<string>('Web Dev')

  const tabs: TabsType[] = [
    { title: "Web Dev" },
    { title: "UX/UI" },
    { title: "Mobile" }
  ]

  const typedProjects = projectList as ProjectListType[]

  return (
    <div
      style={{ backgroundImage: "url('/LeaveBG.avif')" }}
      className="w-full h-auto flex flex-col items-center space-y-8
        object-cover object-center
        px-4 py-16
        md:p-16
        lg:px-32 lg:py-24"
    >
      <h1 className="text-xl md:text-3xl font-semibold">Projects</h1>
      <p className="text-center text-md md:text-lg">
        Where design meets code, a mix of Front-End builds, Full-Stack wor-in-progress,
        and polished UX/UI projects. Somelive, some orbiting soon 🚀.
      </p>

      {/* Tabs Controller */}
      <ul className="flex w-full md:1/2 lg:w-2/3 justify-center gap-4">
        {tabs.map((tab, index) =>
          <li key={index}>
            <button
              type="button"
              onClick={() => setActiveTab(tab.title)}
              className={`rounded-full font-semibold duration-300 ease-in-out cursor-pointer border
                text-md md:text-lg lg:text-xl
                px-5 py-1.5 md:px-12 md:py-3 lg:px-20 lg:py-4
                ${activeTab === tab.title
                  ? "bg-gradient-to-r from-red-600 via-blue-700 to-purple-700 shadow-md"
                  : "bg-black/10 hover:bg-white/20"}`}
            >
              {tab.title}
            </button>
          </li>
        )}
      </ul>

      <GridBox projectList={typedProjects} />
    </div>
  )
}

export default Projects