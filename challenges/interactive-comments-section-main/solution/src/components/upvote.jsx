import { useState } from "react";
const Upvote = ({ score, updateCommentScore, commentId }) => {
  const [scoreAction, setScoreAction] = useState(score);
  const [pressbuttonedPlus, setPressedButtonPlus] = useState();
  const [pressbuttonedMinus, setPressedButtonMinus] = useState();
  const isButtonDisabledPlus = pressbuttonedPlus === true;
  const isButtonDisabledMinus = pressbuttonedMinus === true;

  const incrScore = () => {
    score = scoreAction + 1;

    setScoreAction(score);
    updateCommentScore(score, commentId);
    setPressedButtonPlus(true);
    if (isButtonDisabledMinus) {
      score = scoreAction + 2;
      setScoreAction(score);
      setPressedButtonMinus(false);
    }
  };
  const descScore = () => {
    score = scoreAction - 1;
    setScoreAction(score);
    updateCommentScore(score, commentId);
    setPressedButtonMinus(true);
    if (isButtonDisabledPlus) {
      score = scoreAction - 2;
      setScoreAction(score);
      setPressedButtonPlus(false);
    }
  };

  return (
    <div className="user-action-rating flex">
      <button
        className="rating-plus rBtn"
        onClick={incrScore}
        disabled={isButtonDisabledPlus}
      >
        +
      </button>

      <p className="rating-points grid">{scoreAction}</p>

      <button
        className="rating-minus rBtn"
        onClick={descScore}
        disabled={isButtonDisabledMinus}
      >
        -
      </button>
    </div>
  );
};

export default Upvote;
