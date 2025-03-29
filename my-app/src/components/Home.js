import React from "react";
//import { Link } from "react-router-dom";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import "../assets/css/variables.css";
// import "../assets/css/projects.css";
import YU from "../assets/imgs/YU-01.svg";
import Moodreads from "../assets/imgs/moodreads.png";
import Skills from "./Skills";
import Tools from "./Tools";
import hearts from "../assets/imgs/hearts.png";
import rodas from "../assets/imgs/Rodas.png";
import Footer from "./Footer";

// Definindo os projetos
function Home() {
  const projects = [
    {
      title: "YU",
      image: YU,
      link: "https://yu-mctw.vercel.app/",
    },
    {
      title: "MoodReads",
      image: Moodreads,
      link: "https://moodreads.netlify.app/",
    },
    {
      title: "Nasa Picture of the Day",
      image: YU, // Substitua pela imagem correta
      link: "https://nasapicturesexplore.netlify.app/",
    },
  ];

  // Configurações do Slider
  const sliderSettings = {
    dots: true, // Indicadores de página
    infinite: true, // Loop infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Mostrar apenas um projeto por vez
    slidesToScroll: 1, // Rolar um projeto por vez
    autoplay: true, // Habilitar autoplay
    autoplaySpeed: 3000, // Intervalo entre os slides (em ms)
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>
          Bem-vindo ao meu
          <img src={hearts} alt="Corações decorativos" className="hearts" />
          <img src={rodas} alt="Rodas decorativas" className="rodas" />
          <br />
          Portfólio!
        </h1>
      </header>
      <div>
        <button
          className="cv-button"
          onClick={() =>
            window.open(
              "https://res.cloudinary.com/dx5vcvl6i/image/upload/v1742648083/CatarinaSCV.jpg"
            )
          }
        >
          Download CV
        </button>
      </div>
      <Skills />
      <Tools />
      {/* Projetos em Slider */}
      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`Imagem do projeto ${project.title}`}
              className="project-image"
            />
            <h3>{project.title}</h3>
            {project.link ? (
              <a
                href={project.link}
                className="view-netlify"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Netlify
              </a>
            ) : (
              <span className="disabled-link">View in Netlify</span>
            )}
          </div>
        ))}
      </Slider>
      <Footer />
    </div>
  );
}

export default Home;
