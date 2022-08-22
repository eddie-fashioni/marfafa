import "./CampaignStats.scss";

const CampaignStats = () => {
  return (
    <section className="stats">
      <div className="stats-section">
        <span className="stats-title">Active campaigns</span>
        <span className="stats-figure">3</span>
      </div>
      <div className="stats-section stats-section__middle">
        <span className="stats-title">Total sales</span>
        <span className="stats-figure">$888</span>
      </div>
      <div className="stats-section">
        <span className="stats-title">Performance</span>
        <span className="stats-figure">78%</span>
      </div>
    </section>
  );
};

export default CampaignStats;
