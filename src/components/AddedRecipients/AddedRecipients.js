import "./AddedRecipients.scss";
import remove from "../../assets/icons/remove.svg";
import orderstatus from "../../assets/icons/orderstatus.svg";
import rectangle from "../../assets/icons/rectangle.svg";

const AddedRecipients = () => {
  return (
    <section className="recipients">
      <div className="recipients-name">
        <span className="recipients-name__text">Julie Smith</span>
        <img
          className="recipients-icon"
          src={orderstatus}
          alt="order status icon"
        />
      </div>
      <div className="recipients-item">
        <div className="recipients-containerleft">
          <div className="recipients-item__icon">
            <img
              className="recipients-item__rectangle"
              src={rectangle}
              alt="grey rectangle"
            />
          </div>
          <div className="recipients-item__id">
            <span className="recipients-item__name">T-Shirt</span>
            <span className="recipients-item__number">SKU: 1029</span>
          </div>
        </div>
        <div className="recipients-containerright">
          <div className="recipients-item__details">
            <span className="recipients-item__size">Size: S</span>
            <span className="recipients-item__color">Colour: Black</span>
          </div>
          <div className="recipients-item__cost">
            <span className="recipients-item__size">$20.00</span>
          </div>
          <div className="recipients-item__remove">
            <img className="recipients-item__cross" src={remove} alt="cross" />
          </div>
        </div>
      </div>
      <div className="recipients-item">
        <div className="recipients-containerleft">
          <div className="recipients-item__icon">
            <img
              className="recipients-item__rectangle"
              src={rectangle}
              alt="grey rectangle"
            />
          </div>
          <div className="recipients-item__id">
            <span className="recipients-item__name">Baseball cap</span>
            <span className="recipients-item__number">SKU: 1147</span>
          </div>
        </div>
        <div className="recipients-containerright">
          <div className="recipients-item__details">
            <span className="recipients-item__size">Size: OS</span>
            <span className="recipients-item__color">Colour: Black</span>
          </div>
          <div className="recipients-item__cost">
            <span className="recipients-item__size">$20.00</span>
          </div>
          <div className="recipients-item__remove">
            <img className="recipients-item__cross" src={remove} alt="cross" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddedRecipients;
