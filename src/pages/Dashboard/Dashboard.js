import ActiveCampaigns from "../../components/ActiveCampaigns/ActiveCampaigns";
import CampaignStats from "../../components/CampaignStats/CampaignStats";
import PendingInvites from "../../components/PendingInvites/PendingInvites";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="desktop-background">
      <div className="header-bottom header-dashboard">
        <div className="header-greeting">
          <span className="header-greeting__message">Hello, John</span>
        </div>
        <div className="header-button">
          <button className="header-button__campaign">New campaign</button>
        </div>
      </div>
      <div className="desktop-container">
        <CampaignStats />
        <div className="desktop-container__right">
          <PendingInvites />
          <ActiveCampaigns />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
