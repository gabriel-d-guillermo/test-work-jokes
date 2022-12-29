import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import View from "./pages/View";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random/category/:category" element={<View />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
