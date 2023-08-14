import imgUrl from "../assets/profile.png";
import Button from "./Button";

const Home = () => {
  return (
    <section
      id="home"
      className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none w-full text-white h-screen"
    >
      <div className="flex justify-center lg:items-start items-center flex-col gap-10 pt-20">
        <div>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">
            Hello, I&apos;m
          </h1>
          <h2 className="font-bold text-4xl md:text-6xl lg:text-7xl">
            <span className="text-[#3bc9db]">Eka </span>
            Priyanthara
          </h2>
          <p className="text-sm md:text-base lg:text-xl ms-1">
            A front-end web developer based from Indonesia.
          </p>
          <div className="animate-bounce mt-8 ms-1">
            <a href="#contact">
              <Button title="Contact Me" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-start lg:items-center justify-center">
        <div className="max-h-[500px] max-w-[500px] p-5">
          <img
            src={imgUrl}
            alt="Profile Picture"
            width={450}
            height={450}
            className="bg-slate-200 rounded-full w-10/12 md:w-10/12 lg:w-full m-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
