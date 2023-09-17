import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";

const Home = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-none grid-rows-2 lg:grid-cols-2 lg:grid-rows-none w-full text-white h-screen"
    >
      <div
        className="flex justify-center lg:items-start items-center flex-col gap-10"
        data-aos="fade-right"
      >
        <ProfileInfo />
      </div>
      <div
        className="flex items-start lg:items-center justify-center"
        data-aos="fade-left"
      >
        <ProfilePicture />
      </div>
    </section>
  );
};

export default Home;
