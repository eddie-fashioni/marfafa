import "./PendingInvites.scss";

function PendingInvites() {
  return (
    <section className="invites">
      <div className="invites-title">
        <span className="invites-title__text">Pending invites</span>
      </div>
      <div className="invites-carousel">
        <div className="invites-card">
          <div className="invites-container">
            <div className="invites-avatar">
              <span className="invites-avatar__initials">JS</span>
            </div>
            <div className="invites-details">
              <span className="invites-details__name">Julie Smith</span>
              <span className="invites-details__date">07.08.2022</span>
            </div>
          </div>
          <div className="invites-button">
            <button className="invites-button__resend">Resend</button>
          </div>
        </div>
        <div className="invites-card">
          <div className="invites-container">
            <div className="invites-avatar">
              <span className="invites-avatar__initials">SW</span>
            </div>
            <div className="invites-details">
              <span className="invites-details__name">Sam Wang</span>
              <span className="invites-details__date">08.15.2022</span>
            </div>
          </div>
          <div className="invites-button">
            <button className="invites-button__resend">Resend</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PendingInvites;
