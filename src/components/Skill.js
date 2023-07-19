import React from "react";

const Skill = ({ skill, progress, classname }) => {
  const classes = `flex flex-row justify-between items-center ${classname} h-10 p-1 font-large pl-2 pr-2 lg:text-xl `;
  return (
    <div className=" w-full h-10 bg-neutral-200 dark:bg-neutral-600">
      <div className={classes}>
        <div>{skill}</div>
        <div>{progress}</div>
      </div>
    </div>
  );
};

export default Skill;
