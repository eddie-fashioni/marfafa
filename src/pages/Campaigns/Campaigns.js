import AllCampaigns from "../../components/AllCampaigns/AllCampaigns";
import CampaignSummary from "../../components/CampaignSummary/CampaignSummary";
import CampaignTable from "../../components/CampaignTable/CampaignTable";
import "./Campaigns.scss";

function Campaigns() {
  return (
    <div className="campaign-background">
      <div className="header-bottom header-campaign">
        <div className="header-greeting">
          <span className="header-greeting__message">Campaigns</span>
        </div>
        <div className="header-button">
          <button className="header-button__campaign">New campaign</button>
        </div>
      </div>
      <CampaignSummary />
      <AllCampaigns />
      <CampaignTable />
    </div>
  );
}

export default Campaigns;
