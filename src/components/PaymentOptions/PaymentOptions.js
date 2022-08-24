import "./PaymentOptions.scss";
import visa from "../../assets/icons/visa.svg";
import submit from "../../assets/icons/submit.svg";

const PaymentOptions = () => {
  return (
    <section className="payment-options">
      <div className="payment-options__title">
        <span className="payment-options__title--text">Payment</span>
      </div>
      <div className="payment-options__top">
        <div className="payment-options__answers">
          <span className="payment-options__answers--text">Answers</span>
          <span className="payment-options__answers--number">1/4</span>
        </div>
        <div className="payment-options__authorized">
          <span className="payment-options__authorized--text">Authorized</span>
          <span className="payment-options__authorized--number">$160.50</span>
        </div>
      </div>
      <div className="payment-options__middle">
        <div className="payment-options__subtotal">
          <span className="payment-options__subtotal--text">Subtotal</span>
          <span className="payment-options__subtotal--type">2 items</span>
          <span className="payment-options__subtotal--number">$40.00</span>
        </div>
        <div className="payment-options__shipping">
          <span className="payment-options__shipping--text">Shipping</span>
          <span className="payment-options__shipping--type">Standard</span>
          <span className="payment-options__shipping--number">$7.50ea</span>
        </div>
        <div className="payment-options__taxes">
          <span className="payment-options__taxes--text">Taxes</span>
          <span className="payment-options__taxes--number">$5.50</span>
        </div>
        <div className="payment-options__total">
          <span className="payment-options__total--text">Total</span>
          <span className="payment-options__total--number">$53.00</span>
        </div>
      </div>
      <div className="payment-options__bottom">
        <div className="payment-options__contact">
          <span className="payment-options__contact--text">
            Payment details
          </span>
          <span className="payment-options__contact--name">Alexis Shan</span>
        </div>
        <div className="payment-options__card">
          <img className="payment-options__icon" src={visa} alt="visa logo" />
          <span className="payment-options__card--text">ending in 1234</span>
        </div>
        <div className="payment-options__button">
          <img
            className="payment-options__submit"
            src={submit}
            alt="submit button"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;
