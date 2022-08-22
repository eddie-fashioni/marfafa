import "./AllCampaigns.scss";
import { Link } from "react-router-dom";
import active from "../../assets/icons/active.svg";
import fulfilled from "../../assets/icons/fulfilled.svg";

const AllCampaigns = () => {
  return (
    <section className="allcampaign">
      <div className="allcampaign-title">
        <span className="allcampaign-title__text">All campaigns</span>
      </div>
      <div className="allcampaign-details">
        <Link to="/campaigndetails" className="allcampaign-link">
          <div className="allcampaign-container">
            <div className="allcampaign-container__top">
              <span className="allcampaign-name">Friday drinks</span>
              <img
                className="allcampaign-icon"
                src={active}
                alt="active icon"
              />
            </div>
            <span className="allcampaign-company">Sid Lee TO</span>
            <span className="allcampaign-recipients">4 recipients</span>
            <span className="allcampaign-date">07.22.2022 - 08.24.2022</span>
          </div>
        </Link>
        <div className="allcampaign-container">
          <div className="allcampaign-container__top">
            <span className="allcampaign-name">Networking event</span>
            <img className="allcampaign-icon" src={active} alt="active icon" />
          </div>
          <span className="allcampaign-company">Monday Girl Social</span>
          <span className="allcampaign-recipients">30 recipients</span>
          <span className="allcampaign-date">08.01.2022 - 08.15.2022</span>
        </div>
        <div className="allcampaign-container">
          <div className="allcampaign-container__top">
            <span className="allcampaign-name">Summer Conference</span>
            <img className="allcampaign-icon" src={active} alt="active icon" />
          </div>
          <span className="allcampaign-company">437</span>
          <span className="allcampaign-recipients">12 recipients</span>
          <span className="allcampaign-date">06.30.2022 - 07.08.2022</span>
        </div>
        <div className="allcampaign-container">
          <div className="allcampaign-container__top">
            <span className="allcampaign-name">Golf Tournament</span>
            <img
              className="allcampaign-icon__fulfilled"
              src={fulfilled}
              alt="fulfilled icon"
            />
          </div>
          <span className="allcampaign-company">Videotron</span>
          <span className="allcampaign-recipients">9 recipients</span>
          <span className="allcampaign-date">02.01.2022 - 14.02.2022</span>
        </div>
      </div>
    </section>
  );
};

export default AllCampaigns;
