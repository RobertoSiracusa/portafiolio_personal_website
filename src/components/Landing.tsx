import "./styles/Landing.css";
import { useT } from "../i18n/LanguageProvider";

const Landing = () => {
  const t = useT();
  const nameParts = t.developer.fullName.split(" ");
  const firstName = nameParts[0] || t.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{t.ui.landing.hello}</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            {t.ui.landing.an && <h3>{t.ui.landing.an}</h3>}
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{t.ui.landing.role1}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{t.ui.landing.role2}</div>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
