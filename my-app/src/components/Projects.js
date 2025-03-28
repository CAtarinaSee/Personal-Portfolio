import React from "react";
import "../App.css";
import "../assets/css/variables.css";
import moodreads from "../assets/imgs/moodreads.png";
import nasa from "../assets/imgs/nasa.png";

function Projects() {
  const projects = [
    {
      title: "YU",
      image:
        "https://res.cloudinary.com/dx5vcvl6i/image/upload/v1742500542/fgkfawjtxzbrlmsljvi0.svg",
      link: "https://yu-mctw.vercel.app/",
    },
    {
      title: "Moodreads",
      image: moodreads,
      link: "https://moodreads.netlify.app/",
    },
    {
      title: "Nasa",
      image: nasa,
      link: "https://nasapicturesexplore.netlify.app/",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-carousel">
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
      </div>
    </section>
  );
}

export default Projects;
