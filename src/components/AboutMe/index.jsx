import ProfilePicture from "./ProfilePicture";
import ProfileAbout from "./ProfileAbout";

const About = () => {
  return (
    <div
      id="about"
      className="text-lg grid grid-cols-none grid-rows-1 lg:grid-cols-2 lg:grid-rows-none gap-10 items-start text-white pt-28"
    >
      <div
        className="flex flex-col justify-center items-center w-full"
        data-aos="fade-right"
      >
        <ProfilePicture />
      </div>
      <div className="flex flex-col w-full" data-aos="fade-left">
        <ProfileAbout />
      </div>
    </div>
  );
};

export default About;
