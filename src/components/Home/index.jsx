import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";

const Home = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-none grid-rows-2 lg:grid-cols-2 lg:grid-rows-none w-full text-white h-screen"
    >
      <ProfileInfo />
      <ProfilePicture />
    </section>
  );
};

export default Home;
