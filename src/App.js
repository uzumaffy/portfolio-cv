import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Servicepage from "./pages/Services";
import Testimonypage from "./pages/Testimony";
import Contactpage from "./pages/Contact";
import Portfoliopage from "./pages/Portfolio";
import Skillspage from "./pages/Skills";
import Errorpage from"./pages/Error";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Skills" element={<Skillspage />} />
        <Route path="/Services" element={<Servicepage />} />
        <Route path="/Portfolio" element={<Portfoliopage />} />
        <Route path="/Testimony" element={<Testimonypage />} />
        <Route path="/Contact" element={<Contactpage/>} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
