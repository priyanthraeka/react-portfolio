import wallpaper from "../../../assets/wallpaper.jpg";

const ProfilePicture = () => {
  return (
    <div className="max-w-[520px] h-auto p-5">
      <img
        src={wallpaper}
        alt="Profile Picture"
        width={500}
        height={250}
        className="rounded-3xl w-10/12 m-auto"
      />
    </div>
  );
};

export default ProfilePicture;
