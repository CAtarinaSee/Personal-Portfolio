import { Link } from "react-router-dom";
import "../App.css";
import "../assets/css/variables.css";
import "../assets/css/projects.css";
import YU from "../assets/imgs/YU-01.svg";
import Moodreads from "../assets/imgs/moodreads.png";
import Skills from "./Skills";
import Tools from "./Tools";
import hearts from "../assets/imgs/hearts.png";
import rodas from "../assets/imgs/Rodas.png";

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
      image: YU, // Replace with the correct image
      link: "https://nasapicturesexplore.netlify.app/",
    },
  ];

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

      {/* Projetos */}
      <section className="projects-section">
        <div className="projects-header">
          <h2>Os meus projetos:</h2>
          <Link to="/projects" className="view-all">
            Ver todos
          </Link>
        </div>
        <div className="projects-grid">
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
        </div>
      </section>
    </div>
  );
}

export default Home;
