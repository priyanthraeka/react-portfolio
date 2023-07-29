import profilePic from "../assets/profile.png";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Button from "./Button";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen pt-16 grid grid-cols-none grid-rows-2 lg:grid-cols-2 lg:grid-rows-none justify-center lg:justify-start w-11/12 lg:w-7/12 m-auto text-white"
    >
      <div className="flex justify-center flex-col gap-2">
        <h1 className="font-bold text-5xl">Hello, I&apos;m</h1>
        <h2 className="font-bold text-6xl">
          <span className="text-[#3bc9db]">Eka</span> Priyanthara
        </h2>
        <p className="text-lg ms-1">
          A front-end web developer based from Indonesia.
        </p>
        <div className="flex gap-4 items-center mt-5">
          <a href="mailto:priyantharaeka067@gmail.com" className="w-fit ms-1">
            <Button title="Contact me" />
          </a>
          <a href="#" className="ms-3">
            <BsTwitter size={25} />
          </a>
          <a href="#">
            <BsGithub size={25} />
          </a>
          <a href="#">
            <BsLinkedin size={25} />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={profilePic}
          alt="Profile Picture"
          width={200}
          height={200}
          className="bg-slate-200 rounded-full h-[470px] w-[470px]"
        />
      </div>
    </div>
  );
};

export default Home;
