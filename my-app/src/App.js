import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";

function App() {
  // Configuração do Cloudinary
  const cld = new Cloudinary({ cloud: { cloudName: "dx5vcvl6i" } });

  // Criar imagem otimizada
  const img = cld
    .image("cld-sample-5") // Substituir pelo nome real da imagem no Cloudinary
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home cloudinaryImage={<AdvancedImage cldImg={img} />} />}
        />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
