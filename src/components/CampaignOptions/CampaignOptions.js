import "./CampaignOptions.scss";
import arrow from "../../assets/icons/arrow.svg";
import PaymentOptions from "../../components/PaymentOptions/PaymentOptions";

const CampaignOptions = ({ clicked, paymentOpen, hide }) => {
  return (
    <section className="options">
      {!paymentOpen && (
        <div onClick={clicked} className="options-section options-payment">
          <span className="options-title">View payment</span>
          <img className="options-arrow__icon" src={arrow} alt="arrow icon" />
        </div>
      )}
      {paymentOpen && (
        <div onClick={hide} className="options-section options-details">
          <span className="options-title">View details</span>
          <img className="options-arrow__icon" src={arrow} alt="arrow icon" />
        </div>
      )}
      {paymentOpen && <PaymentOptions />}
      {!paymentOpen && (
        <div className="options-show options-hide">
          <div className="options-stats">
            <div className="options-section options-border">
              <span className="options-title">Answers</span>
              <span className="options-number">1/4</span>
            </div>
            <div className="options-section options-border">
              <span className="options-title">Days left</span>
              <span className="options-number">21</span>
            </div>
          </div>
          <div className="options-section options-recipients">
            <span className="options-title">Add recipients</span>
            <img className="options-arrow__icon" src={arrow} alt="arrow icon" />
          </div>
        </div>
      )}
    </section>
  );
};

export default CampaignOptions;
