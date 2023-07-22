import classNames from 'classnames';

const Skill = ({ skill, progress, classname }) => {
  const variants={
    a: "bg-orange-500 w-[90%] text-black",
    b: "bg-blue-500 w-[70%] text-white",
    c: "bg-yellow-400 w-[90%] text-black",
    d: "bg-blue-400 w-[80%] text-white",
    e: "bg-green-700 w-[75%] text-white",
    f: "bg-blue-300 w-[75%] text-black",
    g: "bg-green-300 w-[65%] text-black",
    h: "bg-purple-400 w-[65%] text-white",
    i: "bg-blue-900 w-[70%] text-white",
    j: "bg-blue-800 w-[85%] text-white"
  }
  const classes = classNames("flex flex-row justify-between items-center p-4 h-12 pl-2 pr-2 lg:text-xl dark:bg-neutral-700 ", variants[classname])

  return (

    <div className="w-full h-12 bg-neutral-200 dark:bg-neutral-600 ">
      <div className={classes}>
        <div>{skill}</div>
        <div>{progress}</div>
      </div>
    </div>
  );
};

export default Skill;
