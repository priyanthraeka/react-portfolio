import todo from "../assets/todo.png";
import djaje from "../assets/djaje.png";
import randomQuoteMachine from "../assets/random-quote-machine.png";
import drumMachine from "../assets/drum-machine.png";

export const NAV_LINKS = [
  {
    href: "#home",
    title: "Home",
  },
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

export const PROJECTS = [
  {
    title: "Todo List",
    image: todo,
    viewLink: "https://priyanthraeka.github.io/todo-list/",
    githubLink: "https://github.com/priyanthraeka/todo-list",
    description:
      "Aplikasi Todo List yang dibuat dengan menggunakan Javascript dan Bootstrap.",
    techStack: ["HTML", "Bootstrap", "Javascript"],
    animationDelay: "100",
  },
  {
    title: "Djaje Clone",
    image: djaje,
    viewLink: "https://djaje-clone.vercel.app/",
    githubLink: "https://github.com/priyanthraeka/djaje-clone",
    description: "Aplikasi ini adalah cloning dari djaje.com",
    techStack: ["HTML", "TailwindCSS", "NextJS", "ReactJS"],
    animationDelay: "200",
  },
  {
    title: "Random Quote Machine",
    image: randomQuoteMachine,
    viewLink: "https://random-quote-machine-tan.vercel.app/",
    githubLink: "https://github.com/priyanthraeka/random-quote-machine",
    description: "Project dari freeCodeCamp",
    techStack: ["HTML", "TailwindCSS", "ReactJS"],
    animationDelay: "300",
  },
  {
    title: "Drum Machine",
    image: drumMachine,
    viewLink: "https://drum-machine-pearl-beta.vercel.app/",
    githubLink: "https://github.com/priyanthraeka/drum-machine",
    description: "Project dari freeCodeCamp",
    techStack: ["HTML", "TailwindCSS", "ReactJS", "Zustand"],
    animationDelay: "400",
  },
];

export const SKILLS = ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS"];

export const EXPERIENCES = [
  {
    start: "Desember 2022",
    end: "",
    company: "PT. Putra Inti Lumayan",
    role: "IT",
  },
  {
    start: "Juli 2021",
    end: "September 2021",
    company: "BPBD Provinsi Bali",
    role: "Data Entry",
  },
];
