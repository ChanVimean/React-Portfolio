import { useState } from "react";
import useSkeleton from "../hook/useSkeleton";
import { Skeleton } from "./ui/skeleton";

interface GridCardInterface {
  id?: number;
  title: string;
  // category: "web" | "uxui" | "mobile"
  image: string;
  date: Date;
  host: string;
  desc: string;
  link: string;
}

interface GridBoxInterface {
  projectList: GridCardInterface[];
}

const GridCard: React.FC<GridCardInterface> = ({
  image,
  title,
  date,
  host,
  desc,
  link,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleMore = () => setIsExpanded((prev) => !prev);

  return (
    <div
      className="relative rounded-xl overflow-hidden group bg-slate-800 shadow-md
      w-full max-w-[512px] aspect-video"
    >
      <img
        src={image}
        alt="Project Image"
        className="w-full h-full object-cover object-center"
      />

      {/* Darken Overlay */}
      <div
        className="absolute z-10 inset-0 bg-black/0 group-hover:bg-black/75
          transition-colors duration-300"
      />

      {/* Hover Overlay */}
      <aside
        className="absolute z-20 bottom-0 left-0 w-full h-full
          translate-y-full group-hover:translate-y-0 transition-all duration-300
          ease-in-out flex flex-col justify-evenly p-4"
      >
        <article>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm opacity-75">
            <span className="me-1 underline">Date:</span>
            {date.toLocaleDateString(undefined, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-sm">
            <span className="me-1 underline">Hosted:</span>
            {host}
          </p>
          <div
            className={`text-sm mt-2 scrollable-desc ${
              isExpanded ? "expanded" : ""
            }`}
          >
            <p>{desc}</p>
          </div>
          <span
            className="more-link"
            onClick={handleMore}
            style={{ display: desc.length > 100 ? "block" : "none" }} // Only show 'more' if the description is long
          >
            {isExpanded ? "…less" : "…more"}
          </span>
        </article>

        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="custom-blue-btn inline-block"
          >
            Go To Project
          </a>
        </div>
      </aside>
    </div>
  );
};

const GridBox: React.FC<GridBoxInterface> = ({ projectList }) => {
  const isLoading = useSkeleton();

  return (
    <section
      className="w-full grid gap-6 lg:gap-12
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      place-items-center"
    >
      {isLoading ? (
        Array(projectList.length)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group bg-slate-800 shadow-md w-full max-w-[512px] aspect-video"
            >
              <Skeleton className="w-full h-full bg-gray-700" />

              <div className="absolute z-10 inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />

              <aside className="absolute z-20 bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex flex-col justify-evenly p-4">
                <article className="space-y-2">
                  <Skeleton className="w-3/4 h-6 bg-gray-600" />
                  <Skeleton className="w-1/2 h-4 bg-gray-600" />
                  <Skeleton className="w-2/3 h-4 bg-gray-600" />
                  <Skeleton className="w-full h-4 bg-gray-600" />
                </article>
                <div>
                  <Skeleton className="w-36 h-10 bg-gray-600" />
                </div>
              </aside>
            </div>
          ))
      ) : projectList.length === 0 ? (
        <div className="col-span-full flex justify-center items-center h-64">
          <img
            src="comingSoon.gif"
            alt="Coming Soon GIF"
            className="w-40 md:w-60 lg:w-72"
          />
        </div>
      ) : (
        projectList.map((project) => (
          <GridCard
            key={project.id}
            image={project.image}
            title={project.title}
            date={project.date}
            host={project.host}
            desc={project.desc}
            link={project.link}
          />
        ))
      )}
    </section>
  );
};

export default GridBox;
