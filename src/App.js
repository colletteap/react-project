import "./App.css";
import Navbar from "./components/Navbar";
import SkillShell from "./pages/SkillShell";
import Advice from "./pages/Advice";
import Blog from "./pages/Blog";
import GridLanding from "./components/Gridlanding";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path= "/react-project/" element={<GridLanding />} />
          <Route path= "/react-project/SkillShell/:skill" element={<SkillShell />} />
          <Route path= "/react-project/SkillShell" element={<SkillShell />} />
          <Route path= "/react-project/Advice" element={<Advice />} />
          <Route path= "/react-project/Blog" element={<Blog />} />
          <Route path= "/react-project//" element={<GridLanding />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
