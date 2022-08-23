import "./CampaignOptions.scss";
import { useState } from "react";
import arrow from "../../assets/icons/arrow.svg";
import PaymentOptions from "../../components/PaymentOptions/PaymentOptions";
import RecipientsInfo from "../RecipientsInfo/RecipientsInfo";

const CampaignOptions = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isCampaignOpen, setIsCampaignOpen] = useState(true);
  const onClick = () => setIsPaymentOpen(true) && setIsCampaignOpen(false);
  return (
    <section className="options">
      <div onClick={onClick} className="options-section options-payment">
        <span className="options-title">View payment</span>
        <img className="options-arrow__icon" src={arrow} alt="arrow icon" />
      </div>
      {isPaymentOpen && <PaymentOptions />}
      {isCampaignOpen}
      <div className="options-stats">
        <div className="options-section">
          <span className="options-title">Answers</span>
          <span className="options-title">1/4</span>
        </div>
        <div className="options-section">
          <span className="options-title">Days left</span>
          <span className="options-title">21</span>
        </div>
      </div>
      <div className="options-section options-recipients">
        <span className="options-title">Add recipients</span>
        <img className="options-arrow__icon" src={arrow} alt="arrow icon" />
      </div>
    </section>
  );
};

export default CampaignOptions;
