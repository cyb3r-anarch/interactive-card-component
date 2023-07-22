import tyImage from "../assets/illustration-thank-you.svg";
import styles from "./ThankYouCard.module.css";
function ThankYouCard(props) {
  return (
    <form className={styles["card-container"]}>
      <div className={styles["rating-container"]}>
        <img src={tyImage} alt="" />
        <div className={styles["rating"]}>
          <p>You Selected {props.rating} out of 5</p>
        </div>
      </div>
      <h2 className={styles["centered"]}>Thank you!</h2>
      <p className={styles["desc"]}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </form>
  );
}

export default ThankYouCard;
