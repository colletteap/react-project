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
          <Route path="/" element={<GridLanding />} />
          <Route path="/SkillShell/:skill" element={<SkillShell />} />
          <Route path="/SkillShell" element={<SkillShell />} />
          <Route path="/Advice" element={<Advice />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
