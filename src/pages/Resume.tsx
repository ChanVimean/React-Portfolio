import { JSX, ReactElement, useEffect, useState } from "react";
import {
  FaBootstrap,
  FaJsSquare,
  FaNodeJs,
  FaPhoneAlt,
  FaReact,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { LuMapPinned } from "react-icons/lu";
import { LiaPhoneSolid } from "react-icons/lia";
import { BsFillPuzzleFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { GiOpenBook } from "react-icons/gi";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiCanva,
  SiAdobepremierepro,
  SiAdobephotoshop,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";

// TODO Types
type ListItemType = {
  text?: string;
  icon?: JSX.Element;
  link?: string;
};

type SkillGroup = {
  text: string;
  icons: ReactElement[];
};

type DetailType = {
  major: string;
  school: string;
  date: string;
  detail: string;
};

type ReferenceType = {
  name: string;
  job: string;
  phone: string;
  email: string;
};

const Resume = () => {
  // ? Detail for Extraction - Map()
  const contactList: ListItemType[] = [
    { text: "089 804 644", icon: <LiaPhoneSolid /> },
    { text: "vimeanchan0901@gmail.com", icon: <MdAlternateEmail /> },
    {
      text: "House 13E0 St.60 Khan Dangkao Phnom Penh Cambodia",
      icon: <LuMapPinned />,
    },
  ];

  const skillList: SkillGroup[] = [
    {
      text: "Stack",
      icons: [
        <FaReact />,
        <FaJsSquare />,
        <BiLogoTypescript />,
        <SiExpress />,
        <FaNodeJs />,
      ],
    },
    {
      text: "Styling",
      icons: [<RiTailwindCssFill />, <FaBootstrap />],
    },
    {
      text: "Database",
      icons: [<SiMysql />, <SiMongodb />],
    },
    {
      text: "UX/UI Tools",
      icons: [<CgFigma />],
    },
    {
      text: "Editing Tools",
      icons: [<SiAdobepremierepro />, <SiAdobephotoshop />, <SiCanva />],
    },
  ];

  const educationList: DetailType[] = [
    {
      major: "Bachelor of Information Technology",
      school: "Royal University of Law and Economics (RULE)",
      date: "2024 - Present",
      detail:
        "Sophomore majoring in IT, focusing on Front-End and Full-Stack development, with a passion for innovative tech solutions.",
    },
    {
      major: "English GEP 12 and Diploma",
      school: "Australian Centre for Education (ACE)",
      date: "2019 - 2023",
      detail:
        "Completed GEP 12 and Diploma in Reading at ACE. Achieved IELTS Band 5.5, demonstrating strong English proficiency.",
    },
  ];

  const courseList: DetailType[] = [
    {
      major: "Full-Stack Web Development",
      school: "Etec Center",
      date: "2023 - 2024",
      detail:
        "Learned Front-End basics, RESTful APIs, and databases with HTML, CSS, JS, Bootstrap, Express, Flask, and MySQL.",
    },
    {
      major: "Web Framework (React JS)",
      school: "Etec Center",
      date: "2024 - 2025",
      detail:
        "Built apps with React JS and JSON Server, focusing on state management, Tailwind CSS, Bootstrap, and both old and new React versions.",
    },
    {
      major: "UX/UI Design",
      school: "ICT Professional Training Center",
      date: "2025 - Present",
      detail:
        "Designed interfaces with Figma, focusing on usability, accessibility, and modern UX/UI principles.",
    },
  ];

  const referenceList: ReferenceType[] = [
    {
      name: "Nhanh Nhim",
      job: "Director of ICT Center",
      phone: "070 295 027",
      email: "nhanhnhim3@gmail.com",
    },
    {
      name: "Kung Noraksmey",
      job: "Instructor at Etec Center",
      phone: "010 406 414",
      email: "krisjenxz@gmail.com",
    },
  ];

  // ? Dynamic Scroll
  const [scrollY, setScrollY] = useState<number>(0);
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundPosition = `center ${scrollY * 0.1}px`; // TODO Control Amount

  return (
    <div
      style={{
        backgroundImage: "url('monochrome-realistic.jpg')",
        backgroundPosition: backgroundPosition,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
      className="w-full h-auto flex flex-col items-center
        px-4 py-16
        md:p-16
        lg:px-32 lg:py-24"
    >
      <main className="space-y-14">
        {/* About Me */}
        <section className="flex flex-col md:flex-row justify-between">
          <article className="w-full md:w-1/2 lg:w-2/3 space-y-4">
            <h1 className="font-bold text-5xl">Chan Vimean</h1>
            <h3 className="font-medium">Web Developer & UX/UI Designer</h3>
            <p>
              Creative and problem-solving IT student with a passion for
              Front-End development and UX/UI design. Skilled in JavaScript,
              Figma, and Full-Stack tech, always prioritizing user experience
              over chaotic coding. Independent learner, trend-savy, and driven
              to craft intuitive digital solutions.
            </p>
            <div className="hidden lg:flex space-x-6">
              <a
                href="MyCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-blue-btn text-white"
              >
                View Resume
              </a>
              <a
                href="MyCV.pdf"
                download="Resume.pdf"
                className="custom-blue-btn text-white"
              >
                Download Resume
              </a>
            </div>
          </article>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-60 h-60 md:w-52 md:h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                src="MyProfile.jpg"
                alt="Profile"
              />
            </div>
            <div className="flex flex-col lg:hidden space-y-4">
              <a
                href="MyCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-blue-btn text-white"
              >
                View Resume
              </a>
              <a
                href="MyCV.pdf"
                download="Resume.pdf"
                className="custom-blue-btn text-white"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="flex items-center space-x-3 lg:space-x-6 font-semibold text-2xl">
            <FaPhoneAlt />
            <span>Contact</span>
          </h2>
          <hr className="mb-4" />
          <ul>
            {contactList.map((contact, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-lg">{contact.icon}</span>
                <span>{contact.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section>
          <h2 className="flex items-center space-x-6 font-semibold text-2xl">
            <BsFillPuzzleFill />
            <span>Skills</span>
          </h2>
          <hr className="mb-4" />
          <ul className="space-y-1">
            {skillList.map((skill, index) => (
              <li key={index} className="flex items-center space-x-2">
                <h1 className="text-xl">{skill.text}:</h1>
                <div className="flex items-center space-x-2 text-2xl">
                  {skill.icons.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Education & Courses */}
        <section className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:gap-8">
          <article className="w-full lg:w-1/2">
            <h1 className="flex items-center space-x-4 font-semibold text-2xl">
              <span>
                <IoSchool />
              </span>
              <span>Education</span>
            </h1>
            <hr className="mb-4" />
            <ul className="space-y-8">
              {educationList.map((edu, index) => (
                <li key={index}>
                  <h2 className="font-medium text-xl">{edu.major}</h2>
                  <div className="flex justify-between">
                    <h3 className="font-medium italic text-slate-300/80">
                      {edu.school}
                    </h3>
                    <p className="text-slate-400">{edu.date}</p>
                  </div>
                  <p className="font-medium">{edu.detail}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="w-full lg:w-1/2">
            <h1 className="flex items-center space-x-4 font-semibold text-2xl">
              <span>
                <IoSchool />
              </span>
              <span>Courses</span>
            </h1>
            <hr className="mb-4" />
            <ul className="space-y-8">
              {courseList.map((coruse, index) => (
                <li key={index}>
                  <h2 className="font-medium text-xl">{coruse.major}</h2>
                  <div className="flex justify-between">
                    <h3 className="font-medium italic text-slate-300/80">
                      {coruse.school}
                    </h3>
                    <p className="text-slate-400">{coruse.date}</p>
                  </div>
                  <p className="font-medium">{coruse.detail}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* References */}
        <section>
          <h1 className="flex items-center space-x-4 font-semibold text-2xl">
            <span>
              <GiOpenBook />
            </span>
            <span>References</span>
          </h1>
          <hr className="mb-4" />
          <ul className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {referenceList.map((ref, index) => (
              <li key={index} className="p-4 break-words w-full max-w-full">
                <h2 className="font-bold text-xl">{ref.name}</h2>
                <h4 className="italic">{ref.job}</h4>
                <div>
                  <span className="me-2 font-medium">Phone:</span>
                  <span className="cursor-pointer hover:text-blue-600 active:text-blue-300 duration-150 ease-in-out">
                    {ref.phone}
                  </span>
                </div>
                <p>
                  <span className="me-2 font-medium">Email:</span>
                  <span className="cursor-pointer hover:text-blue-600 active:text-blue-300 duration-150 ease-in-out">
                    {ref.email}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Resume;
