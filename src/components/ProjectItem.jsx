/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsGithub } from "react-icons/bs";

const ProjectItem = (props) => {
  const {
    title,
    image,
    viewLink,
    githubLink,
    description,
    techStack,
    animationDelay,
  } = props;
  const [onMouseOver, setOnMouseOver] = useState(false);

  const onHoverHandler = () => {
    setOnMouseOver(true);
    console.log("masuk");
  };

  const onLeaveHandler = () => {
    setOnMouseOver(false);
    console.log("keluar");
  };

  return (
    <div
      className="max-w-[480px] rounded-md p-2"
      onMouseOver={onHoverHandler}
      onMouseLeave={onLeaveHandler}
      data-aos="fade-up"
      data-aos-delay={animationDelay}
    >
      <div className="p-10 rounded-3xl bg-[#222222]">
        <img
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className={`aspect-video rounded-lg object-fill transition-all ${
            onMouseOver && "scale-105 duration-300"
          }`}
        />
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between gap-3 mt-7">
          <a
            href={viewLink}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-xl md:text-2xl lg:text-3xl block hover:text-[#3BC9DB] w-fit"
          >
            {title}
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#3BC9DB] block md:hidden"
          >
            <BsGithub size={25} />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#3BC9DB] hidden md:block"
          >
            <BsGithub size={30} />
          </a>
        </div>
        <p className="text-base md:text-lg lg:text-xl mt-5">{description}</p>
        <ul className="flex flex-wrap mt-5 gap-2">
          {techStack.map((item, index) => (
            <li
              key={index}
              className="rounded-md py-2 px-4 text-sm md:text-base lg:text-lg text-white bg-[#222222] hover:bg-[#333] text-center"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;
