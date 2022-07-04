import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Services";
import Testimony from "./pages/Testimony";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Error from"./pages/Error";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Testimony" element={<Testimony />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
