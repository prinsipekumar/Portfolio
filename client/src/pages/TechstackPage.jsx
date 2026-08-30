import "../styles/TechstackPage.css";
import { TechstackList } from "../utils/TechstackList";
import { Zoom } from "react-awesome-reveal";

const TechstackPage = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <Zoom>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
        </Zoom>
        <p className="pb-3 text-center">
          👉 Spans programming languages, frameworks, databases, front-end and
          back-end tools, along with APIs that power modern web applications and
          reflects my ability to integrate creativity with technical precision,
          delivering solutions that balance performance and design.
        </p>
        <div className="row">
          {TechstackList.map((tech) => (
            <div key={tech._id} className="col-md-12 col-xl-6 col-xxl-4">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechstackPage;
