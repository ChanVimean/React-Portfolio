import { FaArrowRight } from "react-icons/fa"
import HomeBG from "../components/HomeBG"
import { Typewriter } from "react-simple-typewriter"


const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <aside className="absolute inset-0 z-0">
        <HomeBG />
      </aside>

      <article className="flex flex-col space-y-10 h-full
        md:w-3/4 lg:w-1/2
        items-start justify-center absolute z-20
        px-6 md:px-16 lg:px-32"
      >
        <h1 className="font-semibold text-5xl ">
          <span>Hi! </span>
          <Typewriter
            words={["I'm Chan Vimean, Web Developer & UX/UI Designer"]}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-slate-200 text-lg md:bg-none">
          I explore the creative universe of web development — blending
          design, code, and motion into sleek digital experiences
          that are out of this world.
        </p>
        <button className="contactButton">
          <span>Let's Connect</span>
          <FaArrowRight className="iconButton" />
        </button>
      </article>
    </div>
  )
}

export default Home