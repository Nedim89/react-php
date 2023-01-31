import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addproduct" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
