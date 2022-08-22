import ActiveCampaigns from "../../components/ActiveCampaigns/ActiveCampaigns";
import CampaignStats from "../../components/CampaignStats/CampaignStats";
import PendingInvites from "../../components/PendingInvites/PendingInvites";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <>
      <CampaignStats />
      <PendingInvites />
      <ActiveCampaigns />
    </>
  );
}

export default Dashboard;
