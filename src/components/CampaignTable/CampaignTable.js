import "./CampaignTable.scss";

const CampaignTable = () => {
  return (
    <section className="table">
      <div className="table-container">
        <div className="table-row">
          <div className="table-options">
            <span className="table-options__text">All</span>
          </div>
          <div className="table-options">
            <span className="table-options__text">Active</span>
          </div>
          <div className="table-options">
            <span className="table-options__text">Processing</span>
          </div>
          <div className="table-options">
            <span className="table-options__text">Archive</span>
          </div>
        </div>
        <div className="table-row">
          <div className="table-headers">
            <span className="table-headers__text">Campaign</span>
          </div>
          <div className="table-headers">
            <span className="table-headers__text">Client</span>
          </div>
          <div className="table-headers">
            <span className="table-headers__text">Date created</span>
          </div>
          <div className="table-headers">
            <span className="table-headers__text">Expiry date</span>
          </div>
        </div>
        <div className="table-row">
          <div className="table-info table-info__name">
            <span className="table-info__text">Friday drinks</span>
          </div>
          <div className="table-info">
            <span className="table-info__text">Sid Lee TO</span>
          </div>
          <div className="table-info">
            <span className="table-info__text">07.22.2022</span>
          </div>
          <div className="table-info">
            <span className="table-info__text">08.24.2022</span>
          </div>
        </div>
        <div className="table-row">
          <div className="table-info table-info__name">
            <span className="table-info__text">Networking event</span>
          </div>
          <div className="table-info">
            <span className="table-info__text">Monday Girl Social</span>
          </div>
          <div className="table-info">
            <span className="table-info__text">08.01.2022</span>
          </div>
          <div className="table-info">
            <span className="table-info__text">08.15.2022</span>
          </div>
        </div>
        <div className="table-row">
          <div className="table-info table-info__name">
            <span className="table-info__text">Summer Conference</span>
          </div>
          <div className="table-info">
            <span className="table-info__text">437</span>
          </div>
          <div className="table-info">
            <span className="table-info__text">06.30.2022</span>
          </div>
          <div className="table-info">
            <span className="table-info__text">07.08.2022</span>
          </div>
        </div>
        <div className="table-row">
          <div className="table-info table-info__name">
            <span className="table-info__text">Golf Tournament</span>
          </div>
          <div className="table-info">
            <span className="table-info__text">Videotron</span>
          </div>
          <div className="table-info">
            <span className="table-info__text">02.01.2022</span>
          </div>
          <div className="table-info">
            <span className="table-info__text">14.02.2022</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignTable;
