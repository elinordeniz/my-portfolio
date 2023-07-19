import about from "../data/about.json";
import main from "../data/main.json";
import TimeLine from "./TimeLine";
import Skill from "./Skill";

const About = () => {
  return (
    <section
    id="about"
      className="flex max-w-[1400px] mx-auto p-8 my-8 justify-center items-center bg-pink-50 dark:bg-slate-600 dark:text-slate-100 scroll-mt-20"
    >
      {/* about text and photo */}
      <div  className="flex flex-col max-w-[1400px] justify-center overflow-auto ">
        <div
          
          className="flex flex-col lg:flex-row justify-center items-center "
        >
          <img
            src="elif3.png"
            alt=""
            className="w-[350px] h-auto rounded-3xl "
          />

          <div className="lg:ml-10 ">
            <h1 className="text-4xl font-bold mb-4 mt-12 text-center lg:text-left">
              About <span className="text-pink-500"> ME</span>
            </h1>
            <p className="text-gray-600 antialiased text-xl font-light tracking-wider leading-8 dark:text-slate-100">
              {about.aboutText}
            </p>
            <div className="flex mt-7 space-x-6 justify-center lg:justify-start">
              <a href="#contact">
                <button className="px-7 py-2 border-2 border-pink-500 rounded-lg text-lg font-semibold hover:text-white hover:bg-pink-500 transition-all">
                  {" "}
                  Hire Me
                </button>
              </a>
              <a href={main.cv} download>
                <button className="px-3 py-2 border-2 border-pink-500 rounded-lg text-lg font-semibold hover:text-white hover:bg-pink-500 transition-all">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* skills and educ */}
        <div
          id="ts"
          className="w-full flex flex-col lg:flex-row py-6 lg:justify-between mt-8 scroll-mt-24"
        >
          <div id="timeline" className="max-w-[450px] lg:w-[600px] p-5 scroll-mt-28 ">
            <h1 className="text-3xl font-semibold tracking-wide mb-5">
              TimeLine
            </h1>

            <ol className="border-l border-neutral-300 dark:border-neutral-500 ">
              <li>
                {about.timeline.map((tl, key) => (
                  <TimeLine key={key} {...tl} />
                ))}
              </li>
            </ol>
          </div>

          <div
            id="skills"
            className="max-w-[400px] lg:w-[600px] space-y-9  p-5 scroll-mt-28  "
          >
            <h1 className="text-3xl font-semibold tracking-wide mb-10">
              Skills
            </h1>
            {about.skills.map((skill, key) => (
              <Skill key={key} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
