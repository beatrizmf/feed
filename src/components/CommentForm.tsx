import { useState } from "react";

import styles from "./CommentForm.module.css";

interface CommentFormProps {
  onCommentCreate: (comment: string) => void;
}

export function CommentForm({ onCommentCreate }: CommentFormProps) {
  const [newCommentText, setNewCommentText] = useState('');

  function handleNewCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(e.target.value);
  }

  function handleCrateNewComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onCommentCreate(newCommentText)
    setNewCommentText('');
  }

  return (
    <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
      <strong>Leave your feedback</strong>

      <textarea
        name="comment"
        value={newCommentText}
        onChange={handleNewCommentChange}
        placeholder="Leave a reply"
      />

      <footer>
        <button type="submit">Publish</button>
      </footer>
    </form>
  )
}