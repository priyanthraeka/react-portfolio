import Button from "./Button";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-11/12 lg:w-7/12 m-auto pt-20 text-white flex flex-col"
    >
      <h1 className="text-5xl font-bold text-[#3bc9db]">Get In Touch!</h1>
      <div className="text-lg grid grid-cols-2 gap-10 mt-10 items-start">
        <div className="flex justify-start items-center w-full">
          <form className="flex flex-col gap-5 w-full text-black">
            <input
              type="text"
              placeholder="Nama"
              className="border-b-4 border-[#3bc9db] p-5"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-b-4 border-[#3bc9db] p-5"
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Pesan"
              className="border-b-4 border-[#3bc9db] p-5 resize-none"
            ></textarea>
            <div className="flex justify-end">
              <Button title="Send message" />
            </div>
          </form>
        </div>
        <div>
          I started learning web development in January and have been
          consistently learning since then. During my 5-month journey, I&apos;ve
          been able to learn technologies such as HTML, CSS, and JavaScript ,
          and I&apos;ve been able to build projects using them.
        </div>
      </div>
    </div>
  );
};

export default Contact;
