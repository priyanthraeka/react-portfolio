import wedding from "../assets/wedding.png";
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
    title: "Wedding App",
    image: wedding,
    viewLink: "https://wedding-website-neon.vercel.app/dika-ewikk",
    githubLink: "https://wedding-website-neon.vercel.app/dika-ewikk",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sunt, optio veniam facilis, vero blanditiis fugiat voluptatum corrupti, quaerat similique pariatur quos voluptatem dolorum qui est eius neque harum recusandae.",
    techStack: ["HTML", "CSS", "Javascript", "React"],
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-11/12 lg:w-7/12 m-auto pt-20 text-white flex flex-col"
    >
      <h1 className="text-5xl font-bold text-[#3bc9db]">My Projects</h1>
      <div className="flex flex-wrap justify-center lg:justify-between gap-10 w-full">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            image={project.image}
            viewLink={project.viewLink}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
