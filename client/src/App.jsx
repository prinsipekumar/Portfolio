import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { EducationPage } from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import TechstackPage from "./pages/TechstackPage";
import WorkexperiencePage from "./pages/WorkexperiencePage";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav";
import { Toaster } from "react-hot-toast";

function App() {
  const [theme] = useTheme();

  return (
    <>
      <Toaster />
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <AboutPage />
          <EducationPage />
          <TechstackPage />
          <ProjectsPage />
          <WorkexperiencePage />
          <ContactPage />
        </div>
        <div className="footer pb-3">
          <h4 className="text-center">
            🌐
            <a
              className="text-decoration-none"
              href="https://prinsipekumar.is-a.dev"
              target="_blank"
              rel="noreferrer"
            >
              prinsipekumar.is-a.dev
            </a>{" "}
            &copy; {new Date().getFullYear()}
          </h4>
        </div>
      </div>
      <ScrollToTop
        className="scroll-to-top"
        smooth
        style={{ backgroundColor: "#64748b", borderRadius: "16px" }}
      />
    </>
  );
}

export default App;
