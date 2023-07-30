import Button from "./Button";

const About = () => {
  return (
    <div id="about" className="flex flex-col pt-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-[#3bc9db]">
        About Me
      </h1>
      <div className="text-base lg:text-lg flex flex-col gap-3 mt-10">
        <p className="text-justify">
          Saya merupakan fresh graduate dari Institut Teknologi dan Bisnis
          STIKOM Bali dengan jurusan Sistem Komputer. Saya suka belajar hal baru
          tentang teknologi untuk pengembangkan skill serta memiliki minat dalam
          pemrograman dan sedang mencari kesempatan berkarir sebagai Frontend
          Web Developer.
        </p>
        <p className="text-justify">
          Saya mulai belajar pengembangan web pada Desember 2022 dan terus
          belajar secara konsisten setelahnya. Dalam 6 bulan perjalanan, saya
          telah belajar beberapa teknologi seperti HTML, CSS, Javascript, React,
          dan TailwindCSS serta membuat beberapa proyek dengan menggunakan
          teknologi tersebut.
        </p>
        <div className="mt-5">
          <Button title="Curriculum Vitae" />
        </div>
      </div>
    </div>
  );
};

export default About;
