import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <p className="para">
          {config.about.description.replace(" For me, Coding is art.", "")}
        </p>
        <p className="para" style={{ color: "var(--accentColor)" }}>For me, Coding is art.</p>
      </div>
    </div>
  );
};

export default About;
