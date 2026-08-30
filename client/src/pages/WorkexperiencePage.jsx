import { FcBusinessman } from "react-icons/fc";
import "../styles/WorkexperiencePage.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Zoom } from "react-awesome-reveal";

const WorkexperiencePage = () => {
  return (
    <>
      <div className="work" id="work-exp">
        <div className="container work-exp">
          <Zoom>
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
              Work Experience
            </h2>
            <hr />
          </Zoom>
          <VerticalTimeline lineColor="#049483">
            <VerticalTimelineElement
              className="vertical-timeline-element-work"
              contentStyle={{ background: "#fdf8f5", color: "#27272a" }}
              contentArrowStyle={{ borderRight: "7px solid  #fdf8f5" }}
              date="2025 - 2026"
              iconStyle={{ background: "#ea580c", color: "#ffffff" }}
              icon={<FcBusinessman />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Self Practice & Project Development
              </h4>
              <p className="verticle-timeline-element-paragraph">
                Built multiple frontend projects including{" "}
                <strong>
                  Food Server Shop, Profile Cards, Rock Paper Scissors Game and
                  Code Editor
                </strong>{" "}
                website
                <br />
                <br />
                Practiced frontend tools by developing real world applications
                with <strong>responsive layouts</strong> and key functionalities
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element-work"
              contentStyle={{ background: "#fdf8f5", color: "#27272a" }}
              contentArrowStyle={{ borderRight: "7px solid  #fdf8f5" }}
              date="2026 - Present"
              iconStyle={{ background: "#ea580c", color: "#ffffff" }}
              icon={<FcBusinessman />}
            >
              <h3 className="vertical-timeline-element-title">
                Full-Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Self Practice & Project Development
              </h4>
              <p className="verticle-timeline-element-paragraph">
                Built multiple full stack and frontend projects including{" "}
                <strong>
                  Netflix clone, Book Library app, Realtime chatting app,
                  Portfolio and Code Editor
                </strong>{" "}
                website with <strong>MERN stack</strong>
                <br />
                <br />
                Practiced <strong>
                  React, Node.js, Express, and MongoDB
                </strong>{" "}
                by developing real world applications with{" "}
                <strong>responsive layouts </strong>
                and interactive UI effects
                <br />
                <br />
                Deployed projects on{" "}
                <strong>Render, Vercel, Sevalla and GitHub</strong>, gaining
                experience in hosting, version control, and debugging
                <br />
                <br />
                Continuously learning through{" "}
                <strong>
                  self study, online resources, and hands on experimentation
                </strong>
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkexperiencePage;
