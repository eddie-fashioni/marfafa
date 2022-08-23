import "./RecipientsInfo.scss";
import unanswered from "../../assets/icons/unanswered.svg";

const RecipientsInfo = () => {
  return (
    <section className="recipientsinfo">
      <div className="recipientsinfo-card">
        <div className="recipientsinfo-container">
          <div className="recipientsinfo-container__left">
            <div className="recipientsinfo-avatar">
              <span className="recipientsinfo-avatar__initials">SW</span>
            </div>
            <div className="recipientsinfo-details">
              <span className="recipientsinfo__name">Sam Wang</span>
              <span className="recipientsinfo__email">swang@sidlee.com</span>
            </div>
          </div>
          <div className="recipientsinfo-status">
            <img
              className="recipientsinfo__unanswered"
              src={unanswered}
              alt="unanswered icon"
            />
          </div>
        </div>
        <div className="recipientsinfo-button">
          <button className="recipientsinfo-button__reminder">
            Send reminder
          </button>
        </div>
      </div>
      <div className="recipientsinfo-card">
        <div className="recipientsinfo-container">
          <div className="recipientsinfo-container__left">
            <div className="recipientsinfo-avatar">
              <span className="recipientsinfo-avatar__initials">KP</span>
            </div>
            <div className="recipientsinfo-details">
              <span className="recipientsinfo__name">Kim Parada</span>
              <span className="recipientsinfo__email">kparada@sidlee.com</span>
            </div>
          </div>
          <div className="recipientsinfo-status">
            <img
              className="recipientsinfo__unanswered"
              src={unanswered}
              alt="unanswered icon"
            />
          </div>
        </div>
        <div className="recipientsinfo-button">
          <button className="recipientsinfo-button__reminder">
            Send reminder
          </button>
        </div>
      </div>
      <div className="recipientsinfo-card">
        <div className="recipientsinfo-container">
          <div className="recipientsinfo-container__left">
            <div className="recipientsinfo-avatar">
              <span className="recipientsinfo-avatar__initials">MM</span>
            </div>
            <div className="recipientsinfo-details">
              <span className="recipientsinfo__name">Marc Mitchell</span>
              <span className="recipientsinfo__email">
                mmitchell@sidlee.com
              </span>
            </div>
          </div>
          <div className="recipientsinfo-status">
            <img
              className="recipientsinfo__unanswered"
              src={unanswered}
              alt="unanswered icon"
            />
          </div>
        </div>
        <div className="recipientsinfo-button">
          <button className="recipientsinfo-button__reminder">
            Send reminder
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecipientsInfo;
