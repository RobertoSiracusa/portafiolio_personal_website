import "./styles/Career.css";
import { useT } from "../i18n/LanguageProvider";

const Career = () => {
  const t = useT();
  const getDisplayYear = (period: string) => {
    if (period.includes("Present") || period.includes("Presente")) return t.ui.career.now;
    if (period.includes(" - ")) {
      return period.split(" - ")[0];
    }
    return period;
  };
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          {t.ui.career.titleMy} <span>{t.ui.career.titleAnd}</span>
          <br /> {t.ui.career.titleExp}
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {t.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{getDisplayYear(exp.period)}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
