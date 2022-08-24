import "./CampaignTable.scss";

const CampaignTable = () => {
  return (
    <table className="table">
      <thead className="table-options">
        <td className="table-options__all">All</td>
        <td>Active</td>
        <td>Processing</td>
        <td>Archive</td>
      </thead>
      <thead className="table-headers">
        <td>Campaign</td>
        <td>Client</td>
        <td>Date created</td>
        <td className="table-end">Expiry date</td>
      </thead>
      <tbody>
        <td className="table-event">Friday drinks</td>
        <td className="table-company">Sid Lee TO</td>
        <td className="table-startdate">07.22.2022</td>
        <td className="table-expirydate">08.24.2022</td>
      </tbody>
      <tbody>
        <td className="table-event">Networking event</td>
        <td className="table-company">Monday Girl Social</td>
        <td className="table-startdate">08.01.2022</td>
        <td className="table-expirydate">08.15.2022</td>
      </tbody>
      <tbody>
        <td className="table-event">Summer Conference</td>
        <td className="table-company">437</td>
        <td className="table-startdate">06.30.2022</td>
        <td className="table-expirydate">07.08.2022</td>
      </tbody>
      <tbody>
        <td className="table-event">Golf Tournament</td>
        <td className="table-company">Videotron</td>
        <td className="table-startdate">02.01.2022</td>
        <td className="table-expirydate">14.02.2022</td>
      </tbody>
    </table>

    // <section className="table">
    //   <div className="table-container">
    //     <div className="table-row">
    //       <div className="table-options">
    //         <span className="table-options__text">All</span>
    //       </div>
    //       <div className="table-options">
    //         <span className="table-options__text">Active</span>
    //       </div>
    //       <div className="table-options">
    //         <span className="table-options__text">Processing</span>
    //       </div>
    //       <div className="table-options">
    //         <span className="table-options__text">Archive</span>
    //       </div>
    //     </div>
    //     <div className="table-row">
    //       <div className="table-headers">
    //         <span className="table-headers__text">Campaign</span>
    //       </div>
    //       <div className="table-headers">
    //         <span className="table-headers__text">Client</span>
    //       </div>
    //       <div className="table-headers">
    //         <span className="table-headers__text">Date created</span>
    //       </div>
    //       <div className="table-headers">
    //         <span className="table-headers__text">Expiry date</span>
    //       </div>
    //     </div>
    //     <div className="table-row">
    //       <div className="table-info table-info__name">
    //         <span className="table-info__text">Friday drinks</span>
    //       </div>
    //       <div className="table-info">
    //         <span className="table-info__text">Sid Lee TO</span>
    //       </div>
    //       <div className="table-info">
    //         <span className="table-info__text">07.22.2022</span>
    //       </div>
    //       <div className="table-info">
    //         <span className="table-info__text">08.24.2022</span>
    //       </div>
    //     </div>
    //     <div className="table-row">
    //       <div className="table-info table-info__name">
    //         <span className="table-info__text">Networking event</span>
    //       </div>
    //       <div className="table-info">
    //         <span className="table-info__text">Monday Girl Social</span>
    //       </div>
    //       <div className="table-info">
    //         <span className="table-info__text">08.01.2022</span>
    //       </div>
    //       <div className="table-info">
    //         <span className="table-info__text">08.15.2022</span>
    //       </div>
    //     </div>
    //     <div className="table-row">
    //       <div className="table-info table-info__name">
    //         <span className="table-info__text">Summer Conference</span>
    //       </div>
    //       <div className="table-info">
    //         <span className="table-info__text">437</span>
    //       </div>
    //       <div className="table-info">
    //         <span className="table-info__text">06.30.2022</span>
    //       </div>
    //       <div className="table-info">
    //         <span className="table-info__text">07.08.2022</span>
    //       </div>
    //     </div>
    //     <div className="table-row">
    //       <div className="table-info table-info__name">
    //         <span className="table-info__text">Golf Tournament</span>
    //       </div>
    //       <div className="table-info">
    //         <span className="table-info__text">Videotron</span>
    //       </div>
    //       <div className="table-info">
    //         <span className="table-info__text">02.01.2022</span>
    //       </div>
    //       <div className="table-info">
    //         <span className="table-info__text">14.02.2022</span>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default CampaignTable;
