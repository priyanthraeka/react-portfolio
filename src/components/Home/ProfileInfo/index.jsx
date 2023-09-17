import Button from "../../Button";

const index = () => {
  return (
    <div
      className="flex justify-center lg:items-start items-center flex-col gap-10"
      data-aos="fade-right"
    >
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
  );
};

export default index;
