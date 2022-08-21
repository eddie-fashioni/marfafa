import "./PageHeader.scss";
//import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.jpg";
import wordmark from "../../assets/icons/wordmark.jpg";
import bell from "../../assets/icons/bell.jpg";
import avatar from "../../assets/icons/avatar.jpg";
import add from "../../assets/icons/add.jpg";

const PageHeader = () => {
  return (
    <section className="header">
      <div className="header-top">
        <div className="header-logo">
          <img className="header-logo__icon" src={logo} alt="marfafa logo" />
          <img
            className="header-logo__wordmark"
            src={wordmark}
            alt="marfafa wordmark"
          />
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
      <div className="header-bottom">
        <div className="header-greeting">
          <span className="header-greeting__message">Hello, John</span>
        </div>
        <div className="header-button">
          <img className="header-button__icon" src={add} alt="plus icon" />
          <button className="header-button__campaign">New Campaign</button>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
