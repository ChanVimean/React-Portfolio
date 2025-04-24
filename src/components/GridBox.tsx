interface GridBoxInterface {
  projectList: {
    id: number
    title: string
    category: "web" | "uxui" | "mobile"
    image: string
    date: Date
    host: string
    desc: string
    link: string
  }[]
}

const GridBox: React.FC<GridBoxInterface> = ({ projectList }) => {
  return (
    <section className="w-full grid gap-6 lg:gap-12
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      place-items-center"
    >
      {projectList.length === 0
        ? (
          <div className="col-span-full flex justify-center items-center h-64">
            <img
              src="comingSoon.gif"
              alt="Coming Soon GIF"
              className="w-40 md:w-60 lg:w-72" />
          </div>
        ) : (
          projectList.map(project =>
            <div
              key={project.id}
              className="relative rounded-xl overflow-hidden group bg-slate-800 shadow-md
                w-full max-w-[512px] aspect-video"
            >
              <img
              src={project.image}
              alt="Project Image"
              className="w-full h-full object-cover object-center" />
    
              {/* Darken Overlay */}
              <div className="absolute z-10 inset-0 bg-black/0 group-hover:bg-black/60
                transition-colors duration-300"
              />
    
              {/* Hover Overlay */}
              <aside className="absolute z-20 bottom-0 left-0 w-full h-full
                translate-y-full group-hover:translate-y-0 transition-all duration-300
                ease-in-out flex flex-col justify-evenly p-4"
              >
                <article className="space-y-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm opacity-75">
                    {project.date.toLocaleDateString(undefined, {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })}
                  </p>
                  <p className="text-sm">{project.desc}</p>
                </article>
                <div className="">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-blue-btn inline-block"
                  >
                    Go To Project
                  </a>
                </div>
              </aside>
            </div>
        )
      )}
     </section>
  )
}

export default GridBox