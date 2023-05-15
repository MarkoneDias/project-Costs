import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Company from "./components/pages/Company/Company";
import Contact from "./components/pages/Contact/Contact";
import NewProject from "./components/pages/New_Projetct/NewProject";
import NavBar from "./components/layouts/navBar";
import Footer from "./components/layouts/Footer";
import Projects from "./components/pages/Projects/Projects";
import Container from "./components/layouts/Container";
import Project from "./components/pages/Project/Project";

export default function App() {
  return (
    <>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
