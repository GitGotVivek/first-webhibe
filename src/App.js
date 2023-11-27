import "./App.css";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
      {/* <Login/>
      <Register/>
      <Home/> */}
    </div>
  );
}

export default App;
