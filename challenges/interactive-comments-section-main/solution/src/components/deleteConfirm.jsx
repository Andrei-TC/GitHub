function DeleteConfirmation({ onDiag, deteleAction, comment, deletePopUpX }) {
  return (
    <div className="confirmDelete-container-backgorund">
      <div className="confirmDelete-container flex">
        <div className="confirmDelete-text flex">
          <p className="deleteTitle">Delete comment</p>
          <p className="deleteText">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
        </div>
        <div className="confirmDelete-actions flex">
          <button
            className="delete-confirm"
            onClick={() => {
              onDiag(true);
              deteleAction(comment.id, true);
            }}
          >
            Yes, Delete
          </button>
          <button
            className="delete-cancel"
            onClick={() => {
              onDiag(false);
              deletePopUpX();
            }}
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
