import Header from ".//Header";
import ProductList from ".//ProductList";
import About from ".//About";
import Contact from ".//Contact";
import { useState} from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddProduct from ".//AddProduct";
import EditProduct from ".//EditProduct";

function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Router>
            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
