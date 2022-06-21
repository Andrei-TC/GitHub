import CommentUpvote from "./comment-upvote";
import Replys from "./reply-list";
import React from "react";
import { timeSince } from "../api";

function Comment_card({ comment, upvoteScore, currentUserName, replies }) {
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canReply = Boolean(currentUserName);
  const canEdit = currentUserName === comment.user.username && !timePassed;
  const canDelete = currentUserName === comment.user.username && !timePassed;
  const isUserName = currentUserName === comment.user.username;

  return (
    <React.Fragment>
      <div className="comment-container grid">
        <div className="user-info flex">
          <img
            className="user-avatar"
            src={comment.user.image}
            alt="avatar"
          ></img>
          <p className="user-name">
            {comment.user.username}{" "}
            {isUserName && <span className="userBadge">you</span>}
          </p>
          <p className="created-at">{comment.createdAt}</p>
        </div>
        <p className="comment-text">{comment.content}</p>
        <div className="user-action flex">
          <CommentUpvote score={upvoteScore} />
          <div className="user-action-buttons flex">
            {canReply && <button className="comment-button send">Reply</button>}
            {canEdit && <button className="comment-button edit">Edit</button>}
            {canDelete && (
              <button className="comment-button delete">Delete</button>
            )}
          </div>
        </div>
      </div>
      {replies.length > 0 && (
        <Replys currentUserName="juliusomo" replies={replies} />
      )}
    </React.Fragment>
  );
}

export default Comment_card;
