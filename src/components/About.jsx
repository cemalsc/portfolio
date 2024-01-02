import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Cemal </span> 👋
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm an aspiring full-stack developer.{" "}
            <br className="sm:block hidden" /> I enjoy building web
            applications. <br className="sm:block hidden" />
            My focus is currently React (Next.js).{" "}
            <br className="sm:block hidden" />I'm always open to learning new
            technologies.
          </p>
        </div>
    </>
  );
};

export default SectionWrapper(About, "about");
