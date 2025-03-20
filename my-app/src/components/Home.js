import "../App.css";
import "../assets/css/variables.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const projects = [
    {
      title: "YU",
      image: process.env.PUBLIC_URL + "/imgs/YU-01.svg",
      link: "https://yu-mctw.vercel.app/",
    },
    {
      title: "MoodReads",
      image: process.env.PUBLIC_URL + "/imgs/MoodReads.svg",
      link: "https://moodreads.vercel.app/",
    },
  ];

  const photography = [
    {
      title: "Golden Hour",
      image: process.env.PUBLIC_URL + "/imgs/photo1.jpg",
    },
    {
      title: "City Lights",
      image: process.env.PUBLIC_URL + "/imgs/photo2.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      {/* Introdução */}
      <section className="hero">
        <h1>Bem-vindo ao meu Portfólio</h1>
        <p>
          Sou um desenvolvedor web apaixonado por criar interfaces incríveis.
        </p>
      </section>

      {/* About Me */}
      <section className="about">
        <h2>Sobre Mim</h2>
        <p>
          Sou um desenvolvedor front-end focado em criar experiências
          interativas e dinâmicas. Adoro transformar ideias em realidade
          digital.
        </p>
      </section>

      {/* Projetos */}
      <section className="projects">
        <h2>Meus Projetos</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <h3>{project.title}</h3>
              </a>
            </div>
          ))}
        </Slider>
      </section>

      {/* Sessões de Fotografia */}
      <section className="photography">
        <h2>Fotografia</h2>
        <Slider {...settings}>
          {photography.map((photo, index) => (
            <div key={index} className="photo-card">
              <img
                src={photo.image}
                alt={photo.title}
                className="photo-image"
              />
              <h3>{photo.title}</h3>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Home;
