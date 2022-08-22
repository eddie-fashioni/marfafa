// import AllCampaigns from "../../components/AllCampaigns/AllCampaigns";
// import CampaignSummary from "../../components/CampaignSummary/CampaignSummary";
import "./CampaignDetails.scss";
import activeheader from "../../assets/icons/active-header.svg";

function CampaignDetails() {
  return (
    <>
      <div className="header-bottom">
        <div className="header-greeting">
          <div className="header-container">
            <span className="header-greeting__campaign">Friday drinks</span>
            <img className="header-icon" src={activeheader} alt="active icon" />
          </div>
          <span className="header-greeting__company">Client: Sid Lee TO</span>
        </div>
      </div>
    </>
  );
}

export default CampaignDetails;
