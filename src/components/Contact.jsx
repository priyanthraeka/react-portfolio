import Button from "./Button";
import svg from "../assets/contact.svg";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col pt-20 text-white">
      <h1 className="text-5xl font-bold text-[#3bc9db]">Get In Touch!</h1>
      <div className="text-lg grid grid-cols-none grid-rows-1  lg:grid-cols-2 lg:grid-rows-none gap-10 mt-10 items-start">
        <div className="flex justify-start items-center w-full">
          <form className="flex flex-col gap-5 w-full text-black">
            <input
              type="text"
              placeholder="Nama"
              className="border-b-4 border-[#3bc9db] p-5 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Email"
              className="border-b-4 border-[#3bc9db] p-5  focus:outline-none"
              required
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Pesan"
              className="border-b-4 border-[#3bc9db] p-5  focus:outline-none resize-none"
              required
            ></textarea>
            <div className="flex justify-end">
              <Button title="Send message" />
            </div>
          </form>
        </div>
        <div className="hidden lg:flex flex-col justify-center items-center p-5">
          <img src={svg} alt="Hai" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
