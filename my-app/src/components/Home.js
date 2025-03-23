import "../App.css";
import "../assets/css/variables.css";
import "../assets/css/projects.css";
import YU from "../assets/imgs/YU-01.svg";
import Moodreads from "../assets/imgs/moodreads.png";
import Skills from "./Skills";
import Tools from "./Tools";

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
      image: YU, // Atualizar imagem correta
      link: "https://nasapicturesexplore.netlify.app/",
    },
  ];

  return (
    <div className="home-container">
      <section className="hero">
        <h1>Bem-vindo ao meu Portfólio</h1>
        <p>Programadora super junior, designer junior e muito mais.</p>

        <a
          href="https://res.cloudinary.com/dx5vcvl6i/image/upload/v1742648083/CatarinaSCV.jpg"
          download="CatarinaSeemann.pdf"
          className="CVbutton"
        >
          Download CV
        </a>
      </section>

      <Skills />
      <Tools />

      {/* Projetos */}
      <section className="projects-section">
        <div className="projects-header">
          <h2>Os meus projetos:</h2>
          <a href="#" className="view-all">
            ver todos:
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <a href={project.link} className="view-netlify">
                view in netlify
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
