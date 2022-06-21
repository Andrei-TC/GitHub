import React from "react";
import "../data.json";
import ReplyCard from "./reply";
import "./comments-list";

function RepliesList({ currentUserName, replies }) {
  const replys = replies;
  function getReplies() {
    if (replys.length === 0) return null;

    for (let i = 0; i < replys.length; i++) {
      if (replys === null) return replys.Remove();
      return replys;
    }
  }
  const arrayReplies = getReplies();

  return (
    <React.Fragment>
      <div className="comments-list-container grid reply">
        {Array.isArray(arrayReplies)
          ? arrayReplies.map((replies) => (
              <ReplyCard
                key={replies.id}
                replies={replies}
                upvoteScore={replies.score}
                currentUserName={currentUserName}
              ></ReplyCard>
            ))
          : null}
      </div>
    </React.Fragment>
  );
}

export default RepliesList;
