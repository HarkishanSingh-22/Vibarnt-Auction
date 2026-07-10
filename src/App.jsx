import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import AuthLayout from "./Layout/AuthLayout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Search from "./Pages/Search";
import Premium from "./Pages/Premium";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="premium" element={<Premium />} />
          <Route path="contact" element={<Contact />} />
        </Route>

       
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;