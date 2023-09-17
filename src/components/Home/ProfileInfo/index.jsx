import Button from "../../Button";

const index = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">
        Hello, I&apos;m
      </h1>
      <h2 className="font-bold text-4xl md:text-6xl lg:text-7xl">
        <span className="text-[#3bc9db]">Eka </span>
        Priyanthara
      </h2>
      <p className="text-sm md:text-base lg:text-xl ms-2">
        A front-end web developer based from Indonesia.
      </p>
      <div className="animate-bounce mt-8 ms-2">
        <a href="#contact">
          <Button title="Contact Me" />
        </a>
      </div>
    </div>
  );
};

export default index;
