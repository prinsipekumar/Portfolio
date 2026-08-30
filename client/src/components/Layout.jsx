import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import HomePage from "../pages/HomePage";
import "../styles/Layout.css";
import { useState } from "react";
import Menu from "./Menu";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? <FaToggleOn size={30} /> : <FaToggleOff size={30} />}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <HomePage />
        </div>
      </div>
    </>
  );
};

export default Layout;
