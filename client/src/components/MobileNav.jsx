import "../styles/MobileNav.css";
import { TiThMenuOutline, TiThMenu } from "react-icons/ti";
import {
  FcHome,
  FcAbout,
  FcBusinessman,
  FcEngineering,
  FcGraduationCap,
  FcOpenedFolder,
  FcBusinessContact,
} from "react-icons/fc";
import { Link } from "react-scroll";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <TiThMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <TiThMenuOutline
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}
          <span className="mobile-nav-title">
            🌐
            <a
              style={{ color: "#f29f67" }}
              className="text-decoration-none"
              href="https://prinsipekumar.is-a.dev"
              target="_blank"
              rel="noreferrer"
            >
              prinsipekumar.is-a.dev
            </a>
          </span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcGraduationCap />
                    Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcEngineering />
                    Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcOpenedFolder />
                    Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="work-exp"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBusinessman />
                    Work Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
