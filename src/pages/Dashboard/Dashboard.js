import ActiveCampaigns from "../../components/ActiveCampaigns/ActiveCampaigns";
import CampaignStats from "../../components/CampaignStats/CampaignStats";
import PendingInvites from "../../components/PendingInvites/PendingInvites";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <>
      <div className="header-bottom">
        <div className="header-greeting">
          <span className="header-greeting__message">Hello, John</span>
        </div>
        <div className="header-button">
          <button className="header-button__campaign">New campaign</button>
        </div>
      </div>
      <CampaignStats />
      <PendingInvites />
      <ActiveCampaigns />
    </>
  );
}

export default Dashboard;
