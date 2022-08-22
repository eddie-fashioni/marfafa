import "./CampaignSummary.scss";
import arrow from "../../assets/icons/arrow.svg";

const CampaignSummary = () => {
  return (
    <section className="summary">
      <div className="summary-section summary-section__border">
        <span className="summary-title">All campaigns</span>
        <img className="summary-arrow__icon" src={arrow} alt="arrow icon" />
      </div>
      <div className="summary-section summary-section__border">
        <span className="summary-title">Active</span>
        <img className="summary-arrow__icon" src={arrow} alt="arrow icon" />
      </div>
      <div className="summary-section summary-section__border">
        <span className="summary-title">Processing</span>
        <img className="summary-arrow__icon" src={arrow} alt="arrow icon" />
      </div>
      <div className="summary-section">
        <span className="summary-title">Archive</span>
        <img className="summary-arrow__icon" src={arrow} alt="arrow icon" />
      </div>
    </section>
  );
};

export default CampaignSummary;
