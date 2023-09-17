import { useState } from "react";
import wallpaper from "../assets/wallpaper.jpg";

const About = () => {
  const [onSkills, setOnSkill] = useState(true);
  const [onExperience, setOnExperience] = useState(false);
  const [onEducation, setOnEducation] = useState(false);

  const onSkillsClickHandler = () => {
    setOnSkill(true);
    setOnExperience(false);
    setOnEducation(false);
  };

  const onExperienceClickHandler = () => {
    setOnSkill(false);
    setOnExperience(true);
    setOnEducation(false);
  };

  const onEducationClickHandler = () => {
    setOnSkill(false);
    setOnExperience(false);
    setOnEducation(true);
  };

  const skillsJSX = (
    <div className="flex flex-wrap gap-2 text-sm md:text-base lg:text-lg">
      <p className="p-2 rounded-lg bg-[#222222] hover:bg-[#333] w-fit">HTML</p>
      <p className="p-2 rounded-lg bg-[#222222] hover:bg-[#333] w-fit">CSS</p>
      <p className="p-2 rounded-lg bg-[#222222] hover:bg-[#333] w-fit">
        Javascript
      </p>
      <p className="p-2 rounded-lg bg-[#222222] hover:bg-[#333] w-fit">
        React.js
      </p>
      <p className="p-2 rounded-lg bg-[#222222] hover:bg-[#333] w-fit">
        TailwindCSS
      </p>
    </div>
  );

  const experienceJSX = (
    <ol className="relative border-l border-gray-200">
      <li className="mb-2 md:mb-3 lg:mb-4 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        <time className="mb-1 text-xs md:text-sm lg:text-base">
          Desember 2022 - Sekarang
        </time>
        <h3 className="text-base md:text-lg lg:text-xl text-[#3bc9db]">
          PT. Putra Inti Lumayan
        </h3>
        <p className="mb-4 text-sm md:text-base lg:text-lg">IT</p>
      </li>
      <li className="ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        <time className="mb-1 text-xs md:text-sm lg:text-base">
          Juli 2021 - September 2021
        </time>
        <h3 className="text-base md:text-lg lg:text-xl text-[#3bc9db]">
          BPBD Provinsi Bali
        </h3>
        <p className="text-sm md:text-base lg:text-lg">Data Entry</p>
      </li>
    </ol>
  );

  const educationJSX = (
    <ol className="relative border-l border-gray-200">
      <li className="mb-2 md:mb-3 lg:mb-4 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        <time className="mb-1 text-xs md:text-sm lg:text-base">
          2018 - 2022
        </time>
        <h3 className="text-base md:text-lg lg:text-xl text-[#3bc9db]">
          Institut Teknologi dan Bisnis STIKOM Bali
        </h3>
        <p className="mb-4 text-sm md:text-base lg:text-lg">Sistem Komputer</p>
      </li>
      <li className="ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        <time className="mb-1 text-xs md:text-sm lg:text-base">
          2015 - 2018
        </time>
        <h3 className="text-base md:text-lg lg:text-xl text-[#3bc9db]">
          SMA (SLUA) Saraswati 1 Denpasar
        </h3>
        <p className="text-sm md:text-base lg:text-lg">IPA</p>
      </li>
    </ol>
  );

  return (
    <div
      id="about"
      className="text-lg grid grid-cols-none grid-rows-1 lg:grid-cols-2 lg:grid-rows-none gap-10 items-start text-white pt-28"
    >
      <div
        className="flex flex-col justify-center items-center w-full"
        data-aos="fade-right"
      >
        <div className="max-w-[520px] h-auto p-5">
          <img
            src={wallpaper}
            alt="Profile Picture"
            width={500}
            height={250}
            className="rounded-3xl w-10/12 m-auto"
          />
        </div>
      </div>
      <div className="flex flex-col w-full" data-aos="fade-left">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3bc9db]">
          About Me
        </h1>
        <div className="text-base md:text-lg lg:text-xl flex flex-col gap-5 mt-10">
          <p className="text-justify">
            Saya merupakan fresh graduate dari Institut Teknologi dan Bisnis
            STIKOM Bali dengan jurusan Sistem Komputer. Saya suka belajar hal
            baru tentang teknologi untuk pengembangkan skill serta memiliki
            minat dalam pemrograman dan sedang mencari kesempatan berkarir
            sebagai Frontend Web Developer.
          </p>
          <ul className="flex gap-5 text-base md:text-lg lg:text-xl  select-none">
            <li
              onClick={onSkillsClickHandler}
              className={`cursor-pointer ${
                onSkills && "border-b-4 border-[#3bc9db]"
              }`}
            >
              Skills
            </li>
            <li
              onClick={onExperienceClickHandler}
              className={`cursor-pointer ${
                onExperience && "border-b-4 border-[#3bc9db]"
              }`}
            >
              Experience
            </li>
            <li
              onClick={onEducationClickHandler}
              className={`cursor-pointer ${
                onEducation && "border-b-4 border-[#3bc9db]"
              }`}
            >
              Education
            </li>
          </ul>
          <div className="flex flex-col gap-5">
            {onSkills
              ? skillsJSX
              : onExperience
              ? experienceJSX
              : onEducation
              ? educationJSX
              : skillsJSX}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
