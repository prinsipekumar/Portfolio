import { Fade } from "react-awesome-reveal";
import { useTheme } from "../context/ThemeContext";
import "../styles/HomePage.css";
import TypeWriter from "typewriter-effect";
import Resume from "../assets/docs/Prince_Kumar_Resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const HomePage = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade direction="right">
            <h2>Hi👋I'm a</h2>
            <h1>
              <TypeWriter
                options={{
                  strings: [
                    "Full-Stack Developer",
                    "MERN Stack Developer",
                    "Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade direction="up">
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9631982092"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href={Resume}
                download="Prince_kumar_Resume.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default HomePage;
