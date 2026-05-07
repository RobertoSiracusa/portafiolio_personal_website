import { Link } from "react-router-dom";
import { useT } from "../i18n/LanguageProvider";
import "./MyWorks.css";

const MyWorks = () => {
  const t = useT();
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          {t.ui.myWorks.back}
        </Link>
        <h1>
          {t.ui.myWorks.allTitle} <span>{t.ui.myWorks.works}</span>
        </h1>
        <p>{t.ui.myWorks.subtitle}</p>
      </div>

      <div className="myworks-grid">
        {t.projects.map((project, index) => (
          <div className="myworks-card" key={project.id} data-cursor="disable">
            <div className="myworks-card-number">0{index + 1}</div>
            <div className="myworks-card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="myworks-card-info">
              <h3>{project.title}</h3>
              <p className="myworks-card-category">{project.category}</p>
              <p className="myworks-card-description">{project.description}</p>
              <p className="myworks-card-tech">{project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
