import "./ActiveCampaigns.scss";

const ActiveCampaigns = () => {
  return (
    <section className="campaign">
      <div className="campaign-title">
        <span className="campaign-title__text">Active campaigns</span>
      </div>
      <div className="campaign-details">
        <div className="campaign-container">
          <span className="campaign-name">Summer conference</span>
          <span className="campaign-company">437</span>
        </div>
        <span className="campaign-date">07.08.2022</span>
      </div>
      <div className="campaign-details">
        <div className="campaign-container">
          <span className="campaign-name">Networking event</span>
          <span className="campaign-company">Monday Girl Social</span>
        </div>
        <span className="campaign-date">08.15.2022</span>
      </div>
      <div className="campaign-details">
        <div className="campaign-container">
          <span className="campaign-name">Friday drinks</span>
          <span className="campaign-company">Sid Lee TO</span>
        </div>
        <span className="campaign-date">08.24.2022</span>
      </div>
    </section>
  );
};

export default ActiveCampaigns;
