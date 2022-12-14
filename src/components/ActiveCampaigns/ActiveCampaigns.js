import "./ActiveCampaigns.scss";
import { Link } from "react-router-dom";

const ActiveCampaigns = () => {
  return (
    <section className="campaign">
      <div className="campaign-title">
        <span className="campaign-title__text">Active campaigns</span>
      </div>
      <div className="campaign-details">
        <div className="campaign-container container-one">
          <span className="campaign-name">Summer conference</span>
          <span className="campaign-company">437</span>
        </div>
        <span className="campaign-date">07.08.2022</span>
      </div>
      <div className="campaign-details">
        <div className="campaign-container container-two">
          <span className="campaign-name">Networking event</span>
          <span className="campaign-company">Monday Girl Social</span>
        </div>
        <span className="campaign-date">08.15.2022</span>
      </div>
      <Link to="/campaigndetails" className="allcampaign-link">
        <div className="campaign-details">
          <div className="campaign-container container-three">
            <span className="campaign-name">Friday drinks</span>
            <span className="campaign-company">Sid Lee TO</span>
          </div>
          <span className="campaign-date">08.24.2022</span>
        </div>
      </Link>
    </section>
  );
};

export default ActiveCampaigns;
