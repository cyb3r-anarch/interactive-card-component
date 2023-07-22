import React from "react";
import starIcon from "../assets/icon-star.svg";
import styles from "./Card.module.css";

function Card({ handleClick, activeBtn, handleSubmit }) {
  return (
    <form className={styles["card-container"]} onSubmit={handleSubmit}>
      <div className={styles["star-icon"]}>
        <img src={starIcon} alt="Star Icon" />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={styles["rating-container"]}>
        <div
          onClick={() => handleClick(1)}
          className={`${styles.btn} ${activeBtn === 1 ? styles.clicked : ""}`}
        >
          1
        </div>
        <div
          onClick={() => handleClick(2)}
          className={`${styles.btn} ${activeBtn === 2 ? styles.clicked : ""}`}
        >
          2
        </div>
        <div
          onClick={() => handleClick(3)}
          className={`${styles.btn} ${activeBtn === 3 ? styles.clicked : ""}`}
        >
          3
        </div>
        <div
          onClick={() => handleClick(4)}
          className={`${styles.btn} ${activeBtn === 4 ? styles.clicked : ""}`}
        >
          4
        </div>
        <div
          onClick={() => handleClick(5)}
          className={`${styles.btn} ${activeBtn === 5 ? styles.clicked : ""}`}
        >
          5
        </div>
      </div>
      <button className={styles["submit-btn"]} type="submit">
        SUBMIT
      </button>
    </form>
  );
}

export default Card;
