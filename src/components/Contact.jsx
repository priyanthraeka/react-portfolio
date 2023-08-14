import {
  BsEnvelope,
  BsGeoAlt,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import Button from "./Button";
import ContactForm from "./ContactForm/ContactForm";

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
            <BsEnvelope size={27} color="#3bc9db" />
            <a
              href="mailto:priyantharaeka067@gmail.com"
              className="hover:text-[#3bc9db] text-base md:text-lg lg:text-xl"
            >
              priyantharaeka067@gmail.com
            </a>
          </p>
          <p className="text-lg flex items-center gap-5">
            <BsGeoAlt size={27} color="#3bc9db" />
            <a
              href="https://goo.gl/maps/xWfsCxJpKnJmL2kM7"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3bc9db] text-base md:text-lg lg:text-xl"
            >
              Denpasar, Bali
            </a>
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.twitter.com/priyanthraeka"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3bc9db] duration-300"
            >
              <BsTwitter size={27} />
            </a>
            <a
              href="https://www.github.com/priyanthraeka"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3bc9db] duration-300"
            >
              <BsGithub size={27} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3bc9db] duration-300"
            >
              <BsLinkedin size={27} />
            </a>
          </div>
          <div className="mt-10">
            <a
              href="https://drive.google.com/file/d/1DJN-ACvBZoIiVP2N2U9SsIOB7OWWPeRb/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button title="Unduh CV" />
            </a>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
