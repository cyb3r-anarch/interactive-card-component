import ThankYouCard from "./components/ThankYouCard";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [activeBtn, setActiveBtn] = useState(null);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  const handleClick = (btnValue) => {
    setActiveBtn(btnValue);
  };

  const handleSubmit = () => {
    setRatingSubmitted(true);
  };
  return (
    <>
      {ratingSubmitted ? (
        <ThankYouCard rating={activeBtn} />
      ) : (
        <Card
          handleClick={handleClick}
          activeBtn={activeBtn}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default App;
