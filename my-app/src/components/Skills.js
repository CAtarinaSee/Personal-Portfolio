import "../App.css";
import "../assets/css/variables.css";
import "../assets/css/skills.css";

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h3>Skills e Experiência:</h3>
        <div className="skills-content">
          <div className="skills-left">
            <h4>Design:</h4>
            <ul>
              <li>User research</li>
              <li>Wireframing</li>
              <li>Prototipagem</li>
            </ul>

            <h4>Programação:</h4>
            <ul>
              <li>HTML, CSS</li>
              <li>Javascript</li>
              <li>React.js</li>
              {/* <li>Phyton</li>
              <li>C</li> */}
            </ul>
          </div>
          <div className="skills-right">
            <p>
              <span>2024 - Atual</span> Universidade Aveiro <br />
              <em>mestrado em comunicação e tecnologias web</em>
            </p>
            <p>
              <span>2020 - 2023</span> Universidade Lusófona do Porto <br />
              <em>licenciatura Ciência da Comunicação</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
