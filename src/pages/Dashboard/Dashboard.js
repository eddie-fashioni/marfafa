import CampaignStats from "../../components/CampaignStats/CampaignStats";
import PendingInvites from "../../components/PendingInvites/PendingInvites";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <>
      <CampaignStats />
      <PendingInvites />
    </>
  );
}

export default Dashboard;
