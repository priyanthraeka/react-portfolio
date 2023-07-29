const Button = (props) => {
  const { title } = props;

  return (
    <button
      className="border border-[#3bc9db] rounded-lg px-5 py-2 text-base text-white w-fit"
      type="submit"
    >
      {title}
    </button>
  );
};

export default Button;
