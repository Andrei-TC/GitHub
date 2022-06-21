import { useState } from "react";

const ReplyComment = ({ submitLabel, handleSubmit }) => {
  const [text, setText] = useState("");
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text, "./images/image-juliusomo.png", "juliusomo");
    setText("");
  };

  return (
    <div className="comment-container grid send-comment-container">
      <form onSubmit={onSubmit} className="grid">
        <textarea
          name="replyCommentArea"
          id="replyCommentArea"
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="replyCommentAction flex">
          <img src="./images/image-juliusomo.png" alt="avatar" />
          <button className="replyBtn" disabled={isTextareaDisabled}>
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReplyComment;
