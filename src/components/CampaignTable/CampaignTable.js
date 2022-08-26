import "./CampaignTable.scss";
import { Link } from "react-router-dom";
import active from "../../assets/icons/active.svg";
import fulfilled from "../../assets/icons/fulfilled.svg";

const CampaignTable = () => {
  return (
    <table className="table">
      <thead className="table-options">
        <td className="table-options__all">All</td>
        <td>Active</td>
        <td>Processing</td>
        <td>Archive</td>
      </thead>
      <tbody className="table-headers">
        <td>Campaign</td>
        <td>Client</td>
        <td>Date created</td>
        <td className="table-end">Expiry date</td>
        <td className="table-desktop">Recipients</td>
        <td className="table-desktop">Status</td>
      </tbody>
      <tbody className="tablerow">
        <Link to="/campaigndetails" className="table-link">
          <td className="table-event">Friday drinks</td>
        </Link>
        <td className="table-company">Sid Lee TO</td>
        <td className="table-startdate">07.22.2022</td>
        <td className="table-expirydate">08.24.2022</td>
        <td className="table-recipients">4</td>
        <img className="table-icon" src={active} alt="active icon" />
      </tbody>
      <tbody className="tablerow">
        <td className="table-event">Networking event</td>
        <td className="table-company">Monday Girl Social</td>
        <td className="table-startdate">08.01.2022</td>
        <td className="table-expirydate">08.15.2022</td>
        <td className="table-recipients">30</td>
        <img className="table-icon" src={active} alt="active icon" />
      </tbody>
      <tbody className="tablerow">
        <td className="table-event">Summer Conference</td>
        <td className="table-company">437</td>
        <td className="table-startdate">06.30.2022</td>
        <td className="table-expirydate">07.08.2022</td>
        <td className="table-recipients">12</td>
        <img className="table-icon" src={active} alt="active icon" />
      </tbody>
      <tbody className="tablerow">
        <td className="table-event">Golf Tournament</td>
        <td className="table-company">Videotron</td>
        <td className="table-startdate">02.01.2022</td>
        <td className="table-expirydate">14.02.2022</td>
        <td className="table-recipients">9</td>
        <img className="table-icon" src={fulfilled} alt="fulfilled icon" />
      </tbody>
    </table>
  );
};

export default CampaignTable;
