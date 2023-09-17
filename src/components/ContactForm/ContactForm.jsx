import { useRef } from "react";
import Button from "../Button";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "https://portfolio-5c896-default-rtdb.firebaseio.com/message.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div data-aos="fade-left">
      <form
        className="flex flex-col gap-5 w-full text-black"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Nama"
          className="border-b-4 border-[#3bc9db] p-5 focus:outline-none w-full"
          required
          ref={nameRef}
        />
        <input
          type="email"
          placeholder="Email"
          className="border-b-4 border-[#3bc9db] p-5 focus:outline-none w-full"
          required
          ref={emailRef}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Pesan"
          className="border-b-4 border-[#3bc9db] p-5 focus:outline-none w-full resize-none"
          required
          ref={messageRef}
        ></textarea>
        <div className="flex justify-end">
          <Button title="Kirim pesan" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
