import "./styles/About.css";
import { useT } from "../i18n/LanguageProvider";

const About = () => {
  const t = useT();
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{t.about.title}</h3>
        <p className="para">{t.about.description}</p>
        <p className="para" style={{ color: "var(--accentColor)" }}>{t.about.motto}</p>
      </div>
    </div>
  );
};

export default About;
