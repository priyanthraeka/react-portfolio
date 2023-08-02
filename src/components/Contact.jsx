import {
  BsEnvelope,
  BsGithub,
  BsLinkedin,
  BsPinMap,
  BsTwitter,
} from "react-icons/bs";
import Button from "./Button";

const Contact = () => {
  return (
    <div
      id="contact"
      className="text-lg grid grid-cols-none grid-rows-1 lg:grid-cols-2 lg:grid-rows-none gap-10 mt-10 items-start text-white pt-20"
    >
      <div className="flex flex-col w-full">
        <h1 className="text-5xl font-bold text-[#3bc9db]">Contact Me</h1>
        <div className="flex flex-col gap-5 mt-10 ms-1">
          <p className="text-lg flex items-center gap-5">
            <BsEnvelope size={25} color="#3bc9db" />
            <a
              href="mailto:priyantharaeka067@gmail.com"
              className="hover:text-[#3bc9db]"
            >
              priyantharaeka067@gmail.com
            </a>
          </p>
          <p className="text-lg flex items-center gap-5">
            <BsPinMap size={25} color="#3bc9db" />
            <a
              href="https://goo.gl/maps/xWfsCxJpKnJmL2kM7"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3bc9db]"
            >
              Denpasar, Bali
            </a>
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://twitter.com/priyanthraeka"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3bc9db] duration-300"
            >
              <BsTwitter size={25} />
            </a>
            <a
              href="https://github.com/priyanthraeka"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3bc9db] duration-300"
            >
              <BsGithub size={25} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3bc9db] duration-300"
            >
              <BsLinkedin size={25} />
            </a>
          </div>
          <div className="mt-10">
            <Button title="Download CV" />
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-5 w-full text-black">
        <input
          type="text"
          placeholder="Nama"
          className="border-b-4 border-[#3bc9db] p-5 focus:outline-none w-full"
          required
        />
        <input
          type="text"
          placeholder="Email"
          className="border-b-4 border-[#3bc9db] p-5  focus:outline-none w-full"
          required
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Pesan"
          className="border-b-4 border-[#3bc9db] p-5  focus:outline-none w-full resize-none"
          required
        ></textarea>
        <div className="flex justify-end">
          <Button title="Send message" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
