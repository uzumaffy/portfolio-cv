import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Service from "./pages/services";
import Testimony from "./pages/testimony";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Skills from "./pages/skills";
import Error from"./pages/error";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Skills />} />
        <Route path="/services" element={<Service />} />
        <Route path="/" element={<Portfolio />} />
        <Route path="/testimony" element={<Testimony />} />
        <Route path="/" element={<Contact/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
