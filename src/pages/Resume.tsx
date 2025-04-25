import { JSX, useEffect, useState } from "react";
import { FaGithubSquare, FaLinkedin, FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { LuMapPinned } from "react-icons/lu";
import { LiaPhoneSolid } from "react-icons/lia";
import { BsFillPuzzleFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { GiOpenBook } from "react-icons/gi";


// TODO Types
type ListItemType = {
  text?: string
  icon?: JSX.Element
  link?: string
}

type DetailType = {
  major: string
  school: string
  date: string
  detail: string
}

type ReferenceType = {
  name: string
  job: string
  phone: string
  email: string
}


const Resume = () => {

  // ? Dynamic Scroll
  const [scrollY, setScrollY] = useState<number>(0);
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundPosition = `center ${scrollY * 0.1}px`; // TODO Control Amount

  // ? Detail for Extraction - Map()
  const socialLink: ListItemType[] = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/chan-vimean" },
    { icon: <FaGithubSquare />, link: "https://github.com/ChanVimean" },
    { icon: <FaTelegram />, link: "https://t.me/chanvimean9" }
  ]

  const contactList: ListItemType[] = [
    { text: "089 804 644", icon: <LiaPhoneSolid /> },
    { text: "vimeanchan0901@gmail.com", icon: <MdAlternateEmail /> },
    { text: "House 13E0 St.60 Khan Dangkao Phnom Penh Cambodia", icon: <LuMapPinned /> }
  ];

  const skillList: ListItemType[] = [
    { text: "React (JS & TS) | Node Express" },
    { text: "Tailwind CSS & Bootstrap" },
    { text: "SQL/NoSQL MySQL & MongoDB" },
    { text: "Figma (UX/UI) & Canva" },
    { text: "Adobe Premiere Pro, Photoshop" }
  ];

  const educationList: DetailType[] = [
    {
      major: "Bachelor of Information technology",
      school: "Royal University of Law and Economic (RULE)",
      date: "2024 - Present",
      detail: "Currently a sophomore majoring in Information Technology at Royal University of Law and Economic (RULE). Learning the art of problem-solving and mastering both Front-End and Full-Stack development. RULE's strong academic foundation ffuels my passion for innovation tech solutions in a fast-evolving industry."
    },
    {
      major: "English GEP 12 and Diploma",
      school: "Austrlian Centre for Education (ACE)",
      date: "2019 - 2023",
      detail: "Completed English studies at ACE, Toul Tum Poung, Phnom Penh, earning a GEP 12 cerification and a Diploma of Reading. Achieved an IELTS Band 5.5, show casting my proficiency abd dedication to continuous language improvement."
    },
  ];

  const courseList: DetailType[] = [
    {
      major: "Full-Stack Web Development",
      school: "Etec Center",
      date: "2023 - 2024",
      detail: "Covered Front-End foundations, RESTful APIs, and databases using HTML, CSS, JS, Bootstrap, Express, Flask, MySQL."
    },
    {
      major: "Web Framework (React JS)",
      school: "Etec Center",
      date: "2024 - 2025",
      detail: "Built interactive, scalable apps using React JS and JSON Server, focusing on state management and component-based architecture. Extra Styling materiel Tailwind CSS & Bootstrap. Covered the old and new version of React."
    },
    {
      major: "UX/UI Design",
      school: "ICT Professional Training Center",
      date: "2025 - Present",
      detail: "Designed user-friendly interfaces with Figma, emphasizing usability, accessibility, and modern design principles. Focused on delivering a seamless and intuitivep user experience."
    },
    {
      major: "C# Programming",
      school: "ICT Professional Training Center",
      date: "2025 - Present",
      detail: "Covered C# from basic to advaned, including Back-End development with ASP.NET and system application development."
    }
  ];

  const referenceList: ReferenceType[] = [
    {
      name: "Nhanh Nhim",
      job: "Director of ICT Center",
      phone: "070 295 027",
      email: "nhanhnhim3@gmail.com"
    },
    {
      name: "Kung Noraksmey",
      job: "Instructor at Etec Center",
      phone: "010 406 414",
      email: "krisjenxz@gmail.com"
    }
  ]

  return (
    <div
      style={{
        backgroundImage: "url('UranusRing.jpg')",
        backgroundPosition: backgroundPosition,
        backgroundAttachment: "fixed",
        backgroundSize: "fill"
      }}
      className="flex flex-col lg:flex-row w-full h-auto text-slate-800
        px-4 py-16
        md:p-16
        lg:px-32 lg:py-24"
    >

      <aside className="w-full lg:w-1/4 bg-sky-200/90 p-4 space-y-8">
        <div className="mx-auto rounded-full overflow-hidden flex flex-col items-center justify-center text-center
          h-28 w-28 md:h-32 md:w-32"
        >
          <img
            className="w-full h-full object-cover object-top"
            src="MyProfile.jpg"
            alt="Profile" />
        </div>
        <h1 className="font-bold text-center text-3xl">Chan Vimean</h1>
        <p className="text-center font-medium">
          Hi, my name is Chan Vimean and I'm a web developer
          and UX/UI designer. Welcome to my personal website!
        </p>
        <ul className="flex w-full justify-center space-x-2">
          {socialLink.map((social, index) =>
            <li key={index} className="text-xl md:text-2xl">
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            </li>
          )}
        </ul>
        <section className="flex flex-col items-center lg:items-start">
          <h2 className="flex items-center space-x-3 lg:space-x-6 font-semibold text-2xl">
            <FaPhoneAlt />
            <span>Contact</span>
          </h2>
          <hr className="mb-4" />
          <ul>
            {contactList.map((contact, index) =>
              <li key={index} className="flex items-center space-x-2">
                <span className="text-lg">
                  {contact.icon}
                </span>
                <span>{contact.text}</span>
              </li>
            )}
          </ul>
        </section>
        <section className="flex flex-col items-center lg:items-start">
          <h2 className="flex items-center space-x-6 font-semibold text-2xl">
            <BsFillPuzzleFill />
            <span>Skills</span>
          </h2>
          <hr className="mb-4" />
          <ul className="space-y-1">
            {skillList.map((skill, index) =>
              <li key={index}>
                {skill.text}
              </li>
            )}
          </ul>
        </section>
      </aside>

      <main className="w-full lg:w-3/4 bg-sky-50/90 py-4 px-8 space-y-8">

        <section className="flex flex-col md:flex-row justify-between">
          <article className="w-full md:w-1/2 lg:w-2/3 space-y-4">
            <h1 className="font-bold text-5xl">Chan Vimean</h1>
            <h3 className="font-medium">Web Developer & UX/UI Designer</h3>
            <p>
              Creative and problem-solving IT student with a passion for Front-End development
              and UX/UI design. Skilled in JavaScript, Figma, and Full-Stack tech, always
              prioritizing user experience over chaotic coding. Independent learner, trend-savy,
              and driven to craft intuitive digital solutions.
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
                alt="Profile" />
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

        <section className="flex flex-col md:flex-row space-y-10 md:space-y-0">
          <article className="w-full lg:w-1/2 px-4">
            <h1 className="flex items-center space-x-4 font-semibold text-2xl">
              <span><IoSchool /></span>
              <span>Education</span>
            </h1>
            <hr className="mb-4" />
            <ul className="space-y-8">
              {educationList.map((edu, index) =>
                <li key={index}>
                  <h2 className="font-medium">{edu.major}</h2>
                  <div className="flex justify-between">
                    <h3 className="font-medium italic text-slate-600">{edu.school}</h3>
                    <p className="text-slate-400">{edu.date}</p>
                  </div>
                  <p>{edu.detail}</p>
                </li>
              )}
            </ul>
          </article>
          <article className="w-full lg:w-1/2 px-4">
            <h1 className="flex items-center space-x-4 font-semibold text-2xl">
              <span><IoSchool /></span>
              <span>Courses</span>
            </h1>
            <hr className="mb-4" />
            <ul className="space-y-8">
              {courseList.map((coruse, index) =>
                <li key={index}>
                  <h2 className="font-medium">{coruse.major}</h2>
                  <div className="flex justify-between">
                    <h3 className="font-medium italic text-slate-600">{coruse.school}</h3>
                    <p className="text-slate-400">{coruse.date}</p>
                  </div>
                  <p>{coruse.detail}</p>
                </li>
              )}
            </ul>
          </article>
        </section>

        <section>
          <h1 className="flex items-center space-x-4 font-semibold text-2xl">
            <span><GiOpenBook /></span>
            <span>References</span>
          </h1>
          <hr className="mb-4" />
          <ul className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {referenceList.map((ref, index) =>
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
            )}
          </ul>
        </section>

      </main>

    </div>
  )
}

export default Resume