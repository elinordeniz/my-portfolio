import {
    FaGithub,
    FaLinkedinIn,
    FaMailBulk,
    FaFileDownload,
  } from "react-icons/fa";
  import main from '../data/main.json'
  
  const Hero = () => {
    return (
      <main id="home" className="max-w-[1400px] mx-auto bg-blue-50 dark:bg-slate-600 dark:text-slate-100 scroll-mt-20">
        {/* Container  */}
        {/* w-full p-6 my-12 scroll-mt-20 */}
        <section
          id="hero"
          className=" flex flex-col p-10 my-12 scroll-mt-20 lg:flex lg:flex-row max-w-[1400px] mx-auto justify-center items-center"
        >
          <div className=" px-8 flex flex-col space-y-2">
            <p className="text-lg">{main.hero.p1}</p>
            <h1 className="text-7xl font-bold">{main.hero.h1}</h1>
            <h2 className="text-5xl  py-4 font-bold text-gray-900">
            {main.hero.h2}
            </h2>
            <p className="flex flex-col max-w-[600px] leading-8 font-extralight">
            {main.hero.p2}
            </p>
  
            <div className="flex space-x-5 py-5 sm: justify-center md:justify-center lg-justify-start xl:justify-start">
              <a href={main.linkedin}>
                <FaLinkedinIn size={30} />
              </a>
              <a href={main.github}>
                <FaGithub size={30} />
              </a>
              <a href={main.email}>
                <FaMailBulk size={30} />
              </a>
              <a href={main.cv} download>
                <FaFileDownload size={30} />
              </a>
            </div>
          </div>
          <div className="drop-shadow-xxl">
            <img
              className="mt-10 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-[100%] m-2 opacity-70 drop-shadow-xxl"
              src={main.hero.img}
              alt=""
            />
          </div>
        </section>
      </main>
    );
  };
  
  export default Hero;
  