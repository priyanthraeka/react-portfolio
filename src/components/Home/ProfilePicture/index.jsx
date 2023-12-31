import imgUrl from "../../../assets/profile.png";

const index = () => {
  return (
    <div
      className="flex items-start lg:items-center justify-center"
      data-aos="fade-left"
    >
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
  );
};

export default index;
