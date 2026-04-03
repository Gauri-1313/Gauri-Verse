import "./Project.css";

import img1 from "../../assets/images/E-commerce.png";
import img2 from "../../assets/images/Portfolio.jpeg";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/Bank.png";
import img5 from "../../assets/images/emp.png";

const projects = [
  {
    title: "E-Commerce Website",
    img: img1,
    desc: "Modern online store with product filtering, cart, and payment system.",
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Gauri-1313/E-Commerce.git",
    liveDemo: "#"
  },

  {
    title: "Portfolio Website",
    img: img2,
    desc: "Personal portfolio to showcase my design and coding projects.",
    skills: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/Gauri-1313/Gauri-Verse.git",
    liveDemo: "#"
  },

  {
    title: "Weather App",
    img: img3,
    desc: "Responsive app showing real-time weather data using API integration.",
    skills: ["HTML", "CSS", "API"],
    github: "https://github.com/Gauri-1313/WeatherForecast.git",
    liveDemo: "https://gentle-rugelach-d18f95.netlify.app/"
  },

  {
    title: "Bank Management Dashboard",
    img: img4,
    desc: "Clean and simple dashboard design for a banking application.",
    skills: ["HTML", "Tailwind", "JavaScript"],
    github: "https://github.com/Gauri-1313/Bank-Management-System.git",
    liveDemo: "# "
  },

  {
    title: "Employee Directory Dashboard",
    img: img5,
    desc: "Sleek dashboard design for managing employee information and performance.",
    skills: ["HTML", "CSS", "GSAP"],
    github: "https://github.com/Gauri-1313/Employee-Management-System.git",
    liveDemo: "#"
  }
];

export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
              
            </div>
               <div className="btns">

              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>

              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>

            </div> 
            

          </div>

        ))}

      </div>

    </section>

  );

}