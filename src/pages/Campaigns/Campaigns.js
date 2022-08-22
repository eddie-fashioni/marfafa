import AllCampaigns from "../../components/AllCampaigns/AllCampaigns";
import CampaignSummary from "../../components/CampaignSummary/CampaignSummary";
import "./Campaigns.scss";

function Campaigns() {
  return (
    <>
      <CampaignSummary />
      <AllCampaigns />
    </>
  );
}

export default Campaigns;
