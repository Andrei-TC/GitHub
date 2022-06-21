import React from "react";
import CommentUpvote from "./comment-upvote";

const Replys = ({ upvoteScore, replies, currentUserName }) => {
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(replies.createdAt) > fiveMinutes;
  const canReply = currentUserName !== replies.user.username;
  const canEdit = currentUserName === replies.user.username && !timePassed;
  const canDelete = currentUserName === replies.user.username && !timePassed;
  const isUserName = currentUserName === replies.user.username;
  return (
    <div className="comment-container grid reply-c ">
      <div className="user-info flex">
        <img
          className="user-avatar"
          src={replies.user.image}
          alt="avatar"
        ></img>
        <p className="user-name">
          {replies.user.username}{" "}
          {isUserName && <span className="userBadge">you</span>}
        </p>
        <p className="created-at">{replies.createdAt}</p>
      </div>
      <p className="comment-text">{replies.content}</p>
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
  );
};

export default Replys;
