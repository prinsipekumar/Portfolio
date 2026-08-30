import "../styles/ProjectsPage.css";
import ShyChat from "../assets/images/ShyChat.png";
import myflix from "../assets/images/myflix.png";
import BookLib from "../assets/images/BookLib.png";
import Portfolio from "../assets/images/Portfolio.png";
import codeditor from "../assets/images/code-editor.png";
import { Zoom } from "react-awesome-reveal";

const ProjectsPage = () => {
  return (
    <>
      <div className="container project" id="projects">
        <Zoom>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Recent Projects
          </h2>
          <hr />
        </Zoom>
        <p className="pb-3 text-center">
          👉 Here are some of my recent projects with{" "}
          <strong>source code</strong> and <strong>live links</strong>. These
          works demonstrate my proficiency as well as my focus and reflects my
          commitment to clean code, scalability, and delivering practical
          solutions that enhance user experience.
        </p>
        <div className="row" id="ads">
          <div className="col-md-12 col-xl-6 mb-4 col-xxl-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full-Stack</span>
                <img src={ShyChat} alt="ShyChat" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-bagde">Node</span>
                <span className="card-detail-bagde">React</span>
                <span className="card-detail-bagde">Express</span>
                <span className="card-detail-bagde">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">ShyChat</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/prinsipekumar/ShyChat"
                >
                  Source Code
                </a>
                <a className="ad-btn btn-demo" href="/">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-6 col-xxl-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full-Stack</span>
                <img src={myflix} alt="myflix" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-bagde">Node</span>
                <span className="card-detail-bagde">React</span>
                <span className="card-detail-bagde">Express</span>
                <span className="card-detail-bagde">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">myflix</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/prinsipekumar/myflix"
                >
                  Source Code
                </a>
                <a
                  className="ad-btn btn-demo"
                  href="https://myflix-1-6hxh.onrender.com"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-6 col-xxl-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full-Stack</span>
                <img src={BookLib} alt="BookLib" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-bagde">Node</span>
                <span className="card-detail-bagde">React</span>
                <span className="card-detail-bagde">Express</span>
                <span className="card-detail-bagde">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">BookLib</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/prinsipekumar/BookLib"
                >
                  Source Code
                </a>
                <a
                  className="ad-btn btn-demo"
                  href="https://booklib-m5en.onrender.com"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-6 col-xxl-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full-Stack</span>
                <img src={Portfolio} alt="Portfolio" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-bagde">Node</span>
                <span className="card-detail-bagde">React</span>
                <span className="card-detail-bagde">Express</span>
                <span className="card-detail-bagde">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Portfolio</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/prinsipekumar/Portfolio"
                >
                  Source Code
                </a>
                <a
                  className="ad-btn btn-demo"
                  href="https://prinsipekumar.is-a.dev"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-6 col-xxl-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src={codeditor} alt="code-editor" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-bagde">HTML</span>
                <span className="card-detail-bagde">CSS</span>
                <span className="card-detail-bagde">JavaScript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Code-Editor</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/prinsipekumar/code-editor"
                >
                  Source Code
                </a>
                <a
                  className="ad-btn btn-demo"
                  href="https://prinsipekumar.github.io/code-editor"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
