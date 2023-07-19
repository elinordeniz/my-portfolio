import Project from "./Project";
import projects from "../data/projects.json";
const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col max-w-[1400px] p-8 my-8 scroll-mt-32 bg-orange-50 mx-auto items-center justify-center transition-all dark:bg-slate-600 dark:text-slate-100 "
    >
     <h1 className="pb-10 text-center font-semibold text-4xl">Projects</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-x-[5rem] sm:gap-y-[5rem] overflow-auto">
        {projects.map((project, key) => (
          <Project key={key} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
