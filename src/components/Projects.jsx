import wedding from "../assets/wedding.jpg";
import todo from "../assets/todo.png";
import djaje from "../assets/djaje.png";
import randomQuoteMachine from "../assets/random-quote-machine.png";
import drumMachine from "../assets/drum-machine.png";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "Wedding App",
    image: wedding,
    viewLink: "https://wedding-website-neon.vercel.app/dika-ewikk",
    githubLink: "https://wedding-website-neon.vercel.app/dika-ewikk",
    description: "Aplikasi undangan pernikahan online.",
    techStack: ["HTML", "CSS", "Javascript", "React", "TailwindCSS"],
  },
  {
    title: "Todo List",
    image: todo,
    viewLink: "https://priyanthraeka.github.io/todo-list/",
    githubLink: "https://github.com/priyanthraeka/todo-list",
    description:
      "Aplikasi Todo List yang dibuat dengan menggunakan Javascript dan Bootstrap.",
    techStack: ["HTML", "Bootstrap", "Javascript"],
  },
  {
    title: "Djaje Clone",
    image: djaje,
    viewLink: "https://djaje-clone.vercel.app/",
    githubLink: "https://github.com/priyanthraeka/djaje-clone",
    description: "Aplikasi ini adalah cloning dari djaje.com",
    techStack: ["HTML", "TailwindCSS", "NextJS", "ReactJS"],
  },
  {
    title: "Random Quote Machine",
    image: randomQuoteMachine,
    viewLink: "https://random-quote-machine-tan.vercel.app/",
    githubLink: "https://github.com/priyanthraeka/random-quote-machine",
    description: "Project dari freeCodeCamp",
    techStack: ["HTML", "TailwindCSS", "ReactJS"],
  },
  {
    title: "Drum Machine",
    image: drumMachine,
    viewLink: "https://drum-machine-pearl-beta.vercel.app/",
    githubLink: "https://github.com/priyanthraeka/drum-machine",
    description: "Project dari freeCodeCamp",
    techStack: ["HTML", "TailwindCSS", "ReactJS", "Zustand"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col pt-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-[#3bc9db]">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
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
