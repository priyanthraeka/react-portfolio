/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsGithub } from "react-icons/bs";

const ProjectItem = (props) => {
  const { title, image, viewLink, githubLink, description, techStack } = props;
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
      className="mt-10 max-w-[500px] rounded-md"
      onMouseOver={onHoverHandler}
      onMouseLeave={onLeaveHandler}
    >
      <div className="p-10 rounded-3xl bg-[#222222]">
        <img
          src={image}
          alt={title}
          className={`w-[548px] h-[280px] rounded-lg transition-all ${
            onMouseOver && "scale-105 duration-300"
          }`}
        />
      </div>
      <div className="flex items-center justify-between gap-3 mt-7">
        <a
          href={viewLink}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-4xl block hover:text-[#3bc9db] w-fit"
        >
          {title}
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-4xl block hover:text-[#3bc9db] w-fit"
        >
          <BsGithub size={25} />
        </a>
      </div>
      <p className="text-lg mt-5">{description}</p>
      <div className="flex flex-wrap mt-5 gap-2">
        {techStack.map((item, index) => (
          <div
            key={index}
            className="rounded-md py-2 px-4 text-base text-white bg-[#222222] text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
