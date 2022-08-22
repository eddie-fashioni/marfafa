import AllCampaigns from "../../components/AllCampaigns/AllCampaigns";
import CampaignSummary from "../../components/CampaignSummary/CampaignSummary";
import "./Campaigns.scss";

function Campaigns() {
  return (
    <>
      <div className="header-bottom">
        <div className="header-greeting">
          <span className="header-greeting__message">Campaigns</span>
        </div>
        <div className="header-button">
          <button className="header-button__campaign">New campaign</button>
        </div>
      </div>
      <CampaignSummary />
      <AllCampaigns />
    </>
  );
}

export default Campaigns;
