import profilePic from "../assets/profile.png";

const Home = () => {
  return (
    <div
      id="home"
      className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none w-full text-white h-screen"
    >
      <div className="flex justify-center lg:items-start items-center flex-col gap-2 pt-20">
        <div>
          <h1 className="font-bold text-4xl md:text-5xl">Hello, I&apos;m</h1>
          <h2 className="font-bold text-5xl md:text-6xl">
            <span className="text-[#3bc9db]">Eka </span>Priyanthara
          </h2>
          <p className="text-base md:text-lg ms-1">
            A front-end web developer based from Indonesia.
          </p>
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
