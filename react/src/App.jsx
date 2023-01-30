import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <Router>
      <nav>
      <button><Link to="addproduct"> ADD </Link></button>
      <button>Mass Delete</button>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addproduct" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
