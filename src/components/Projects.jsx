import ProjectItem from "./ProjectItem";
import { PROJECTS as projects } from "../utils/constants";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col pt-28 text-white">
      <h1
        className="text-4xl md:text-5xl font-bold text-[#3bc9db]"
        data-aos="fade-up"
      >
        My Projects
      </h1>
      <div className="flex justify-center items-start">
        <div className="mt-10 grid grid-flow-row lg:grid-cols-2 2xl:grid-cols-3 justify-center align-center gap-10">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              image={project.image}
              viewLink={project.viewLink}
              githubLink={project.githubLink}
              description={project.description}
              techStack={project.techStack}
              animationDelay={project.animationDelay}
            />
          ))}
        </div>
      </div>
      {/* <div className="w-fit mx-auto mt-10">
        <Button title="Load More" />
      </div> */}
    </div>
  );
};

export default Projects;
