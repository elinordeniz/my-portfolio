import React from 'react'

const TimeLine = ({date,title, desc, details}) => {
  return (
    <>
    <div className="flex-start flex items-center pt-3">
    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
    <p className="text-sm text-neutral-500 dark:text-neutral-300">
      {date}
    </p>
  </div>
  <div className="mb-6 ml-4 mt-2">
    <h4 className="mb-1.5 text-xl font-semibold">
     {title}
    </h4>
    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
      {desc}
      <span className="italic font-semibold">
        <br /> 
        {details}
      </span>
    </p>
  </div>
  </>
  )
}

export default TimeLine