import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import SkillShell from "./pages/SkillShell";
import Profile from "./pages/Profile";
import Advice from "./pages/Advice";
import Blog from "./pages/Blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home}/>
        <Route path="/SkillShell" exact component={SkillShell}/>
        <Route path="/Profile" exact component={Profile}/>
        <Route path="/Advice" exact component={Advice}/>
        <Route path="/Blog" exact component={Blog}/>
      </Routes>
      </Router>
    
       </div>
  );
}

export default App;
