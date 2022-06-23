import React from "react";
import UpVote from "./upvote";
import moment from "moment";
import CommentForm from "./commentForm";
import { useState } from "react";
import DeleteConfirmation from "./deleteConfirm";

const Comment = ({
  comment,
  currentUserName,
  replies,
  addComment,
  deleteComment,
  updateComment,
  activeComment,
  setActiveComment,
  parentId = null,
  updateCommentScore,
}) => {
  const canReply = currentUserName !== comment.username;
  const canEdit = currentUserName === comment.username;
  const canDelete = currentUserName === comment.username;
  const isUserName = currentUserName === comment.username;
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;

  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  let commentReplyingTo = "";
  const replyId = parentId ? parentId : comment.id;

  if (activeComment) {
    if (comment.id === activeComment.id) commentReplyingTo = comment.username;
  }
  const [showReplies, setShowReplies] = useState(true);
  const [showReplyLabel, setReplyLabel] = useState("Replies ▼");
  const seeReply = "Replies ▼";
  const collapeReply = "Replies ▲";
  const [deleteConfirm, setDeleteConfirm] = useState({
    isLoading: false,
  });
  const deletePopUp = () => {
    setDeleteConfirm({ isLoading: true });
  };
  const deletePopUpX = () => {
    setDeleteConfirm({ isLoading: false });
  };
  let ifTrue = null;
  const areYouSureDelete = (option) => {
    ifTrue = option;
    return ifTrue;
  };
  const hideRepliesFunc = () => {
    setShowReplies(!showReplies);
    if (showReplyLabel === seeReply) {
      setReplyLabel(collapeReply);
    } else {
      setReplyLabel(seeReply);
    }
  };

  return (
    <React.Fragment>
      {deleteConfirm.isLoading && (
        <DeleteConfirmation
          onDiag={areYouSureDelete}
          deteleAction={deleteComment}
          comment={comment}
          deletePopUpX={deletePopUpX}
        />
      )}
      <div className="comment-container grid">
        <div className="user-info flex">
          <img className="user-avatar" src={comment.image} alt="avatar"></img>
          <p className="user-name">
            {comment.username}{" "}
            {isUserName && <span className="userBadge">you</span>}
          </p>
          <p className="created-at">{moment(comment.createdAt).fromNow()}</p>
        </div>
        {!isEditing && (
          <p className="comment-text">
            {comment.replyingTo !== null && (
              <span className="replyingTo">
                {"@" + comment.replyingTo + " "}
              </span>
            )}
            {comment.body}
          </p>
        )}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => setActiveComment(null)}
          />
        )}
        {!isEditing && (
          <div className="user-action flex">
            <UpVote
              score={comment.score}
              updateCommentScore={updateCommentScore}
              commentId={comment.id}
            />
            <div className="user-action-buttons flex">
              {canReply && (
                <button
                  className="comment-button send"
                  onClick={() =>
                    setActiveComment({ id: comment.id, type: "replying" })
                  }
                >
                  Reply
                </button>
              )}
              {canEdit && (
                <button
                  className="comment-button edit"
                  onClick={() =>
                    setActiveComment({ id: comment.id, type: "editing" })
                  }
                >
                  Edit
                </button>
              )}
              {canDelete && (
                <button
                  className="comment-button delete"
                  onClick={(set) => {
                    deletePopUp(set);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      {replies.length > 0 && (
        <button
          className="see-comments"
          type="button"
          onClick={hideRepliesFunc}
        >
          {showReplyLabel}
        </button>
      )}
      {isReplying && (
        <CommentForm
          submitLabel="Reply"
          handleSubmit={(text) => addComment(text, replyId, commentReplyingTo)}
        />
      )}
      {replies.length > 0 && (
        <React.Fragment>
          {showReplies && (
            <div className="comment-container grid reply-c">
              {replies.map((reply) => (
                <Comment
                  comment={reply}
                  key={reply.id}
                  currentUserName={currentUserName}
                  replies={[]}
                  deleteComment={deleteComment}
                  updateComment={updateComment}
                  parentId={comment.id}
                  addComment={addComment}
                  activeComment={activeComment}
                  setActiveComment={setActiveComment}
                  updateCommentScore={updateCommentScore}
                />
              ))}
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Comment;
