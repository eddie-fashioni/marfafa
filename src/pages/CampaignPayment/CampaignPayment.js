import "./CampaignPayment.scss";
import activeheader from "../../assets/icons/active-header.svg";
import CampaignOptions from "../../components/CampaignOptions/CampaignOptions";
import AddedRecipients from "../../components/AddedRecipients/AddedRecipients";
import RecipientsInfo from "../../components/RecipientsInfo/RecipientsInfo";

function CampaignPayment() {
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
      <CampaignOptions />
      <AddedRecipients />
      <RecipientsInfo />
    </>
  );
}

export default CampaignPayment;
