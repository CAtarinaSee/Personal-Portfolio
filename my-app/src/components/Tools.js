import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  //   faAdobe,
  //   faNotion,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import "./../assets/css/tools.css";

export default function Tools() {
  const tools = [
    { name: "Figma", icon: faFigma },
    { name: "Photoshop", icon: faFigma }, // Change this icon
    { name: "InDesign", icon: faFigma }, // Change this icon
    { name: "Notion", icon: faFigma }, // Change this icon
    { name: "VS Code", icon: faMicrosoft }, // Change this
  ];

  return (
    <section className="tools-container">
      <h2 className="tools-title">Tools</h2>
      <div className="tools-grid">
        {tools.map((tool) => (
          <div key={tool.name} className="tool-card">
            <FontAwesomeIcon icon={tool.icon} className="tool-icon" />
          </div>
        ))}
      </div>
    </section>
  );
}
