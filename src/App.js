import "./App.css";
import Navbar from "./components/Navbar";
import SkillShell from "./pages/SkillShell";
import Advice from "./pages/Advice";
import Blog from "./pages/Blog";
import GridLanding from "./components/Gridlanding";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<GridLanding />} />
          <Route path="/SkillShell/:skill" element={<SkillShell />} />
          <Route path="/SkillShell" element={<SkillShell />} />
          <Route path="/Advice" element={<Advice />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="*" element={<GridLanding />} />
=======
          <Route path= "/react-project/" element={<GridLanding />} />
          <Route path="/react-project/SkillShell/:skill" element={<SkillShell />} />
          <Route path="/react-project/#/SkillShell" element={<SkillShell />} />
          <Route path="/react-project/#/Advice" element={<Advice />} />
          <Route path="/react-project/#/Blog" element={<Blog />} />
          <Route path="/react-project/#/" element={<GridLanding />} />
>>>>>>> parent of 9b89900e5 (playing with pages)
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
