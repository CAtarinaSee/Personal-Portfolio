import React from "react";
import Slider from "react-slick";
import "../App.css";
import "../assets/css/variables.css";

function Projects() {
  const projects = [
    {
      title: "YU",
      image:
        "https://res.cloudinary.com/dx5vcvl6i/image/upload/v1742500542/fgkfawjtxzbrlmsljvi0.svg",
      link: "https://yu-mctw.vercel.app/",
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
    <section className="projects-section">
      {/*<h2 className="projects-title">Meus Projetos</h2>
      <p className="projects-description">
        Aqui estão alguns dos meus projetos recentes. Clique para saber mais!
      </p> */}
      <div className="projects-carousel">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <h3 className="project-title">{project.title}</h3>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
