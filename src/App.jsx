import Nav from "./component/Nav";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import Contact from "./pages/Contect";

export default function App() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <Nav />

      <Home />
      <About />
      <Projects />
      <Skill />
      <Contact />

      <Footer />
    </div>
  );
}
