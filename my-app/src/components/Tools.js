// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Figma from "../assets/imgs/Figma.svg";
import Indesign from "../assets/imgs/indesign.svg";
// import Photoshop from "../assets/imgs/photoshop.svg";
import Notion from "../assets/imgs/notion.svg";
import VSCode from "../assets/imgs/vscode.svg";

import "../App.css";

export default function Tools() {
  const tools = [
    { name: "Figma", icon: Figma },
    { name: "InDesign", icon: Indesign },
    { name: "Notion", icon: Notion },
    { name: "VS Code", icon: VSCode },
  ];

  return (
    <section className="tools-container">
      <h2 className="tools-title">Tools</h2>
      <div className="tools-grid">
        {tools.map((tool) => (
          <div key={tool.name} className="tool-card">
            <img src={tool.icon} alt={tool.name} className="tool-icon" />
            <p className="tool-name">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
