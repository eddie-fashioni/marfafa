import "./NavBar.scss";
import { Link, NavLink } from "react-router-dom";
import dashboard from "../../assets/icons/nav-dashboard.svg";
import campaigns from "../../assets/icons/nav-campaigns.svg";
import assets from "../../assets/icons/nav-assets.svg";
import settings from "../../assets/icons/nav-settings.svg";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-link">
        <NavLink to="/" className="nav-link__dashboard">
          <img
            className="nav-icon nav-icon__dashboard"
            src={dashboard}
            alt="dashboard icon"
          />
          Dashboard
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink to="/campaigns" className="nav-link__campaigns">
          <img
            className="nav-icon nav-icon__campaigns"
            src={campaigns}
            alt="campaigns icon"
          />
          Campaigns
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink to="/" className="nav-link__assets">
          <img
            className="nav-icon nav-icon__assets"
            src={assets}
            alt="assets icon"
          />
          Assets
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink to="/" className="nav-link__settings">
          <img
            className="nav-icon nav-icon__settings"
            src={settings}
            alt="settings icon"
          />
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
