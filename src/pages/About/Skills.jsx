import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaJava
} from "react-icons/fa";

import {
  SiUnity,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPhp
} from "react-icons/si";

function Skills() {
  return (
    <div className="skills" id="skills">

      <h2>My Skills</h2>

      <div className="skills-container">

        {/* Frontend */}
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skill-icons">
            <div><FaHtml5 /> <span>HTML</span></div>
            <div><FaCss3Alt /> <span>CSS</span></div>
            <div><FaJs /> <span>JavaScript</span></div>
            <div><FaReact /> <span>React</span></div>
            <div><SiTailwindcss /> <span>Tailwind</span></div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-category">
          <h3>Backend</h3>
          <div className="skill-icons">
            <div><FaNodeJs /> <span>Node.js</span></div>
            <div><SiExpress /> <span>Express</span></div>
            <div><SiPhp /> <span>PHP</span></div>
            <div><SiMysql /> <span>MySQL</span></div>
            <div><SiMongodb /> <span>MongoDB</span></div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-category">
          <h3>Tools & Others</h3>
          <div className="skill-icons">
            <div><FaGitAlt /> <span>Git</span></div>
            <div><FaGithub /> <span>GitHub</span></div>
            <div><FaFigma /> <span>Figma</span></div>
            <div><SiFirebase /> <span>Firebase</span></div>
            <div><SiUnity /> <span>Unity</span></div>
            <div><FaJava /> <span>Java</span></div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Skills;