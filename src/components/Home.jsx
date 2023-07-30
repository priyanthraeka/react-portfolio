import profilePic from "../assets/profile.png";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Button from "./Button";

const Home = () => {
  return (
    <div
      id="home"
      className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none w-full text-white h-screen"
    >
      <div className="flex justify-center flex-col gap-2 pt-20">
        <h1 className="font-bold text-4xl md:text-5xl">Hello, I&apos;m</h1>
        <h2 className="font-bold text-5xl md:text-6xl">
          <span className="text-[#3bc9db]">Eka </span>Priyanthara
        </h2>
        <p className="text-base md:text-lg ms-1">
          A front-end web developer based from Indonesia.
        </p>
        <div className="flex gap-4 items-center mt-5">
          <a href="mailto:priyantharaeka067@gmail.com" className="w-fit ms-1">
            <Button title="Contact me" />
          </a>
          <a href="#" className="ms-3 hover:text-[#3bc9db] duration-300">
            <BsTwitter size={25} />
          </a>
          <a href="#" className="hover:text-[#3bc9db] duration-300">
            <BsGithub size={25} />
          </a>
          <a href="#" className="hover:text-[#3bc9db] duration-300">
            <BsLinkedin size={25} />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="max-h-[470px] max-w-[470px] p-5">
          <img
            src={profilePic}
            alt="Profile Picture"
            width={450}
            height={450}
            className="bg-slate-200 rounded-full w-10/12 md:w-10/12 lg:w-full m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
