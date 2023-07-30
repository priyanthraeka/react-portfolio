import wedding from "../assets/wedding.jpg";
import todo from "../assets/todo.png";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "Wedding App",
    image: wedding,
    viewLink: "https://wedding-website-neon.vercel.app/dika-ewikk",
    githubLink: "https://wedding-website-neon.vercel.app/dika-ewikk",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sunt, optio veniam facilis, vero blanditiis fugiat voluptatum corrupti, quaerat similique pariatur quos voluptatem dolorum qui est eius neque harum recusandae.",
    techStack: ["HTML", "CSS", "Javascript", "React", "TailwindCSS"],
  },
  {
    title: "Todo List",
    image: todo,
    viewLink: "https://priyanthraeka.github.io/todo-list/",
    githubLink: "https://github.com/priyanthraeka/todo-list",
    description: "Simple Todo List",
    techStack: ["HTML", "Bootstrap", "Javascript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col pt-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-[#3bc9db]">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-around gap-10 w-full">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            image={project.image}
            viewLink={project.viewLink}
            githubLink={project.githubLink}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
