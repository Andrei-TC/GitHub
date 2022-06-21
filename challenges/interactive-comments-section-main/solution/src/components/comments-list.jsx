import React, { useEffect, useState } from "react";
import GetComments from "../data.json";
import Comment from "./comment-card";
import SendComment from "./send-comment";
import {
  getComments as getCommentsApi,
  createComment as creatCommentApi,
} from "../api";

function Comments_list({ currentUserName }) {
  const [allComments, setBackendComments] = useState([]);
  const rootAllComments = allComments.filter((firstComment) =>
    firstComment.hasOwnProperty("replies")
  );
  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);
  const addComment = (text, image, username) => {
    creatCommentApi(text, image, username).then((comment) => {
      setBackendComments([...rootAllComments, comment]);
    });
    console.log(creatCommentApi(text));
  };

  return (
    <React.Fragment>
      <div className="comments-list-container grid">
        {rootAllComments.map((firstComment) => (
          <Comment
            key={firstComment.id}
            comment={firstComment}
            replies={firstComment.replies}
            upvoteScore={firstComment.score}
            currentUserName={currentUserName}
          ></Comment>
        ))}
      </div>
      <SendComment submitLabel="Write" handleSubmit={addComment} />
    </React.Fragment>
  );
}

export default Comments_list;
