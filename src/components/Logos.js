import { IoLogoNodejs, IoLogoReact, IoLogoJavascript } from "react-icons/io5";
import { SiMui, SiTailwindcss, SiRedux, SiMongodb, SiSass, SiExpress } from "react-icons/si";

const Logos = ({ techs }) => {
  const logos = {
    react: <IoLogoReact className="text-[45px] text-blue-400 font-bold" />,
    node: <IoLogoNodejs className="text-[45px] text-green-700 font-bold" />,
    mui: <SiMui className="text-[42px] text-blue-600 font-bold" />,
    js: (
      <IoLogoJavascript className="text-[42px] text-yellow-400 font-bold bg-black" />
    ),
    rtk: <SiRedux className="text-[45px] text-purple-600 font-bold" />,
    mongo: <SiMongodb className="text-[45px] text-green-400 font-bold" />,
    tailwind: <SiTailwindcss className="text-[45px] text-blue-300 font-bold" />,
    sass: <SiSass className="text-[45px] text-pink-400 font-bold" />,
    express: <SiExpress className="text-[45px] text-gray-700 font-bold" />,


  };

  return (
    <div className="flex justify-center  items-center  my-4 flex-wrap lg:flex-nowrap px-6 space-x-6  lg:space-y-0">
      {techs.map((logo, key) => {
        if (logos.hasOwnProperty(logo)) {
          return <span className="py-2" key={key}>{logos[logo]}</span>;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Logos;
