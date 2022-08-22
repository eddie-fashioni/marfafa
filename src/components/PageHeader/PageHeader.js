import "./PageHeader.scss";
//import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import bell from "../../assets/icons/bell.svg";
import avatar from "../../assets/icons/avatar.svg";

const PageHeader = () => {
  return (
    <section className="header">
      <div className="header-top">
        <div className="header-logo">
          <img className="header-logo__icon" src={logo} alt="marfafa logo" />
        </div>
        <div className="header-container">
          <div className="header-bell">
            <img
              className="header-bell__icon"
              src={bell}
              alt="notification bell icon"
            />
          </div>
          <div className="header-avatar">
            <img
              className="header-avatar__icon"
              src={avatar}
              alt="avatar initial"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
