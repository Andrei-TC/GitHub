import CommentsList from "./components/comments-list";
import React from "react";

function App() {
  return (
    <div className="container">
      <CommentsList currentUserName="juliusomo" />
    </div>
  );
}

export default App;
