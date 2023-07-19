import Logos from './Logos'
import {FaSafari} from 'react-icons/fa'

const Project = ({name, detail, img, github, demo, techs}) => {
  return (
    <div className='pb-5 overflow-auto my-2 border-2 border-pink-400 border-opacity-5 max-w-[500px] h-auto hover:bg-pink-50 transition-all shadow-md dark:hover:bg-slate-400'>
    <img src={img} alt="" className='w-full h-auto dark:opacity-70' />
    <h1 className='text-3xl text-center mt-5 font-semibold'>{name}</h1>
    <Logos techs={techs} />
    <div  className='text-center justify-center items-center my-3 italic p-3 sm:h-[150px] lg:h-[120px] overflow-auto'>{detail}</div>
    <div className='flex space-x-5 my-3 mt-4 justify-center items-center '>
       <a href={github} target='_blank' rel="noreferrer"> <button className='px-3 py-2 lg:text-xl border-2 rounded-3xl border-pink-500  hover:bg-pink-500 hover:text-white transition-all'>&#60; /&#62;  Source Code</button></a>
       <a href={demo} target='_blank' rel="noreferrer"><button className='flex px-3 py-2 justify-center items-center gap-2 lg:text-xl border-2 rounded-3xl border-pink-400  hover:bg-pink-500 hover:text-white transition-all'><FaSafari className='text-xxl' /> Live Demo</button></a>
    </div>

</div>
  )
}

export default Project