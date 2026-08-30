import "../styles/AboutPage.css";
import AboutImg from "../assets/images/profile.png";
import { Zoom } from "react-awesome-reveal";
const AboutPage = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-12 col-xl-12 col-lg-12 col-xs-12 col-xxl-6 about-img">
            <img src={AboutImg} alt="Profile" />
          </div>
          <div className="col-md-12 col-xl-12 col-lg-12 col-xs-12 col-xxl-6 about-content">
            <Zoom>
              <h1 className="text-uppercase">About me</h1>
            </Zoom>
            <p>
              I'm Prince, a <strong>Full-Stack Developer</strong> who thrives on
              building modern, scalable, and secure web applications. With
              expertise across both frontend and backend, I enjoy turning
              complex ideas into seamless digital experiences.
            </p>
            <p>
              My skill set spans{" "}
              <strong>
                HTML, CSS, JavaScript, React, Express, Node.js, MongoDB, SQL,
                Postman, Git/GitHub, REST APIs, WebSockets, Zustand, Tailwind
                CSS, Bootstrap, JWT, bcrypt, Jasmine, AWS, Cloudinary and
                deployment platforms like Render, Sevalla and Vercel
              </strong>
              . This diverse toolkit allows me to design responsive interfaces,
              manage state efficiently, implement robust authentication systems,
              and deliver production-ready solutions.
            </p>
            <p>
              I believe in writing clean, maintainable code and crafting
              architectures that scale. Whether it's debugging tricky flows,
              optimizing performance, or experimenting with new frameworks, I'm
              always eager to learn and push boundaries. My ultimate goal is to
              grow as a developer who can deliver{" "}
              <strong>end-to-end solutions</strong> - from database design to
              polished UI while keeping user experience at the core.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
