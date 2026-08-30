import { FcGraduationCap } from "react-icons/fc";
import "../styles/EducationPage.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Zoom } from "react-awesome-reveal";

export const EducationPage = () => {
  return (
    <>
      <div className="education" id="education">
        <Zoom>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Education Details
          </h2>
          <hr />
        </Zoom>
        <VerticalTimeline lineColor="#049483">
          <VerticalTimelineElement
            className="vertical-timeline-element-work"
            contentStyle={{ background: "#fdf8f5", color: "#27272a" }}
            contentArrowStyle={{ borderRight: "7px solid  #fdf8f5" }}
            date="2022 - 2023"
            iconStyle={{ background: "#ea580c", color: "#ffffff" }}
            icon={<FcGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              Advance Diploma in Computer Application (ADCA)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              iMas Computer Education
            </h4>
            <p className="verticle-timeline-element-paragraph">
              Computer fundamentals, Office applications, and Practical IT
              skills
              <br />
              <strong>Grade: A+ (87%)</strong>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-work"
            contentStyle={{ background: "#fdf8f5", color: "#27272a" }}
            contentArrowStyle={{ borderRight: "7px solid  #fdf8f5" }}
            date="2023 - 2026"
            iconStyle={{ background: "#ea580c", color: "#ffffff" }}
            icon={<FcGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Computer Applications (BCA)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Aryabhatta Knowledge University
            </h4>
            <p className="verticle-timeline-element-paragraph">
              Specializing in computer science fundamentals, web technologies,
              and database management
              <br />
              <strong>CGPA: 9.05</strong>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
