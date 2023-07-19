import {useState, useEffect} from 'react'
import {
FaBars,
FaTimes
} from "react-icons/fa";

const Navbar = ({setDarkMode}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleDarkMode = ()=>{
       console.log("clicked")
      setDarkMode(p=> !p)
    }
    const toggleMenu = (e) => {
      e.preventDefault();
      e.stopPropagation()
      setIsMenuOpen((prev) => !prev);
    };
    
    useEffect(()=>{

        document.body.addEventListener('click', () => {
          setIsMenuOpen(false)
        })


     // !isMenuOpen && main.removeEventListener("click",setFun())}

    })
  return (
    <header className="sticky top-0 bg-white z-10 dark:bg-slate-800 " >
        <section className='max-w-4xl mx-auto flex p-4 justify-between items-center '>
      <div className="flex items-center gap-2 ">
        <a href="#home"><img className="w-[90px] h-[90px] bg-pink-400 rounded-full drop-shadow-black-xl" src="elif.png" alt="" /></a>
        <a href="#home"><span className="text-3xl font-bold text-pink-400 ml-4">elinor.</span></a>
      </div>
      <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm upper dark:text-pink-100">
        <li>
          <a href="#home">Homepage</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button onClick={toggleDarkMode} ><img
        src="sun.png"
        alt=""
        className="hidden md:block w-10 cursor-pointer"
      /> </button>
      <div
        onClick={toggleMenu}
        className="space-y-1 md:hidden cursor-pointer z-20"
      >
       {isMenuOpen ? <FaTimes className='text-pink-100' size={40} /> : <FaBars className='text-gray-700  dark:text-pink-100' size={30}/>}
      </div>
      <ul
        className={
          isMenuOpen
            ? "bg-pink-500 dark:bg-slate-800 dark:text-pink-100 font-semibold tracking-widest absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center "
            : "hidden"
        }
      >
        <li>
          <a href="#home">Homepage</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#timeline">Ed & Ex</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        
        <li>
          <a href="#cont">Contact</a>
        </li>
      </ul>

    </section>
  </header>
  )
}

export default Navbar