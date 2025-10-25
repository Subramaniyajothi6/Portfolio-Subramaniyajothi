import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import SkillsProgress from "../components/SkillsProgress";
import Frameworks from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing " id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov-1.webp"
            alt="Developer workspace"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            loading="lazy"
            decoding="async" />
          <div className="z-10">
            <p className="headtext">Hi, I'm Subramaniyajothi</p>
            <p className="subtext">
              Full-stack developer specializing in React and Node.js, building dynamic web applications with seamless frontend-backend integration and responsive design.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-3xl sm:text-4xl md:text-5xl text-gray-500">
              FULL-STACK FLOW
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%", }}
              text="REST APIs"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="GSAP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Responsive Design"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="State Management"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "8%", left: "60%" }}
              text="Comp Architecture"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", bottom: "10%", left: "50%" }}
              text="JWT Auth"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "35%", right: "5%" }}
              text="Form Validation"
              containerRef={grid2Container}
            />

          </div>
        </div>



        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in India, eager to collaborate on remote projects
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">

          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5 "
        >
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <div className=" flex flex-col gap-1 ">
              <p className="subtext">
                I specialize in full-stack MERN development, building responsive React interfaces and scalable Node.js APIs with MongoDB databases.
              </p>
            </div>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>




      </div>
    </section >
  )
};

export default About;
