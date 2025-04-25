import { useEffect, useState } from "react";
import GridBox from "../components/GridBox";
import projectList from "../../projects.json";
import useSkeleton from "../hook/useSkeleton";
import { Skeleton } from "../components/ui/skeleton";

type TabsType = {
  title: string;
  key: "web" | "uxui" | "mobile";
};

type ProjectListType = {
  id: number;
  title: string;
  category: "web" | "uxui" | "mobile";
  image: string;
  date: Date;
  host: string;
  desc: string;
  link: string;
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"web" | "uxui" | "mobile">("web");
  const isLoading = useSkeleton();

  const tabs: TabsType[] = [
    { title: "Web Dev", key: "web" },
    { title: "UX/UI", key: "uxui" },
    { title: "Mobile", key: "mobile" },
  ];

  const typedProjects: ProjectListType[] = projectList.map((project) => ({
    ...project,
    date: project.date ? new Date(project.date) : new Date(),
    category: project.category as "web" | "uxui" | "mobile",
  }));

  const fitlerProject = typedProjects.filter(
    (project) => project.category === activeTab
  );

  // ? Dynamic Scroll
  const [scrollY, setScrollY] = useState<number>(0);
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scrollh", handleScroll);
  }, []);

  const backgroundPosition = `center ${scrollY * 0.1}px`; // TODO Control Amount

  return (
    <div
      style={{
        backgroundImage: "url('/LeaveBG.avif')",
        backgroundPosition: backgroundPosition,
        backgroundAttachment: "fixed"
      }}
      className="w-full h-auto flex flex-col items-center space-y-8
        object-cover object-center
        px-4 py-16
        md:p-16
        lg:px-32 lg:py-24"
    >
      <h1 className="text-xl md:text-3xl font-semibold">Projects</h1>
      {isLoading ? (
        <Skeleton className="w-full lg:w-5/6 h-20 md:h-16 lg:h-8 bg-slate-700" />
      ) : (
        <p className="text-center text-md md:text-lg">
          Where design meets code, a mix of Front-End builds, Full-Stack
          wor-in-progress, and polished UX/UI projects. Somelive, some orbiting
          soon 🚀.
        </p>
      )}

      {/* Tabs Controller */}
      <ul className="flex w-full md:1/2 lg:w-2/3 justify-center gap-4">
        {tabs.map((tab, index) => (
          <li key={index}>
            <button
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full font-semibold duration-300 ease-in-out cursor-pointer border
                text-md md:text-lg lg:text-xl
                px-5 py-1.5 md:px-12 md:py-3 lg:px-20 lg:py-4
                ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-red-600 via-blue-700 to-purple-700 shadow-md"
                    : "bg-black/10 hover:bg-white/20"
                }`}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <GridBox projectList={fitlerProject} />
    </div>
  );
};

export default Projects;
