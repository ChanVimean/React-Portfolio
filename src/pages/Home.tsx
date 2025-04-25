import { FaArrowRight } from "react-icons/fa";
import HomeBG from "../components/HomeBG";
import { Typewriter } from "react-simple-typewriter";
import ScrollTo from "../utils/ScrollTo";
import { Skeleton } from "../components/ui/skeleton";
import useSkeleton from "../hook/useSkeleton";
import SocialLink from "../components/SocialLink";
import { useEffect, useState } from "react";

const Home = () => {
  const isLoading = useSkeleton();
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handelScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <aside className="absolute inset-0 z-0">
        <HomeBG scrollY={scrollY} />
      </aside>

      <article
        className="flex flex-col space-y-10 h-full
        md:w-3/4 lg:w-2/3
        items-start justify-center absolute z-20
        px-6 md:px-16 lg:px-32"
      >
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
          <span>Hi! </span>
          {isLoading ? (
            <Skeleton className="w-[300px] md:w-[500px] h-10 bg-gray-400" />
          ) : (
            <Typewriter
              words={["I'm Chan Vimean, Web Developer & UX/UI Designer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          )}
        </h1>
        {isLoading ? (
          <Skeleton className="w-full md:w-[400px] h-20 bg-gray-500" />
        ) : (
          <p className="text-slate-200 md:bg-none text-lg md:text-xl lg:text-2xl">
            I explore the creative universe of web development — blending
            design, code, and motion into sleek digital experiences that are out
            of this world.
          </p>
        )}
        <button
          onClick={() => ScrollTo("contact")}
          className="contactButton text-md md:text-lg lg:text-xl"
        >
          {isLoading ? (
            <Skeleton className="w-[120px]" />
          ) : (
            <span>Let's Connect</span>
          )}
          <FaArrowRight className="iconButton" />
        </button>

        <section className="block lg:hidden">
          <SocialLink />
        </section>
      </article>
    </div>
  );
};

export default Home;
