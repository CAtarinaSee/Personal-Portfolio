import "../App.css";
import "../assets/css/variables.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YU from "../assets/imgs/YU-01.svg";
import Moodreads from "../assets/imgs/moodreads.png";

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
      image: YU, // Change this image
      link: "https://nasapictureoftheday.netlify.app/",
    },
  ];

  // const photography = [
  //   {
  //     title: "Golden Hour",
  //     image: process.env.PUBLIC_URL + "/imgs/photo1.jpg",
  //   },
  //   {
  //     title: "City Lights",
  //     image: process.env.PUBLIC_URL + "/imgs/photo2.jpg",
  //   },
  // ];

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
        <p>Programadora super junior, designer junior e muito mais.</p>
      </section>

      <a
        href="https://res.cloudinary.com/dx5vcvl6i/image/upload/v1742648083/CatarinaSCV.jpg"
        download="CatarinaSeemann.pdf"
        className="CVbutton"
      >
        Download CV
      </a>

      {/* Projetos */}
      <section className="projects">
        <h2>Os meus Projetos</h2>
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

      {/* Sessões de Fotografia 
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
      </section> */}
    </div>
  );
}

export default Home;
