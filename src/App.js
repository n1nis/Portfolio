import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import MainAbout from "./components/MainAbout.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/About" element={<MainAbout />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/*" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
