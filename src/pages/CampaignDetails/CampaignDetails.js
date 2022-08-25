// import AllCampaigns from "../../components/AllCampaigns/AllCampaigns";
// import CampaignSummary from "../../components/CampaignSummary/CampaignSummary";
import "./CampaignDetails.scss";
import { useState } from "react";
import activeheader from "../../assets/icons/active-header.svg";
import CampaignOptions from "../../components/CampaignOptions/CampaignOptions";
import AddedRecipients from "../../components/AddedRecipients/AddedRecipients";
import RecipientsInfo from "../../components/RecipientsInfo/RecipientsInfo";

function CampaignDetails() {
  const [showPayment, setShowPayment] = useState(false);
  const showPaymentHandle = () => {
    setShowPayment(true);
  };
  const hidePaymentHandle = () => {
    setShowPayment(false);
  };
  return (
    <>
      <div className="header-bottom">
        <div className="header-greeting">
          <div className="header-container">
            <span className="header-greeting__campaign">Friday drinks</span>
            <img className="header-icon" src={activeheader} alt="active icon" />
          </div>
          <span className="header-greeting__company">Client: Sid Lee TO</span>
        </div>
      </div>
      <CampaignOptions
        clicked={showPaymentHandle}
        hide={hidePaymentHandle}
        paymentOpen={showPayment}
      />
      {!showPayment && (
        <div className="details-hide details-show">
          <AddedRecipients />
          <RecipientsInfo />
        </div>
      )}
    </>
  );
}

export default CampaignDetails;
