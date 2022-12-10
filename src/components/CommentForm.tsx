import { useState } from 'react'

import styles from './CommentForm.module.css'

interface CommentFormProps {
  onCreateComment: (comment: string) => void;
}

export function CommentForm({ onCreateComment }: CommentFormProps) {
  const [newCommentText, setNewCommentText] = useState('');

  function handleNewCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('');
    setNewCommentText(e.target.value);
  }

  function handleNewCommentInvalid(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Enter your reply');
  }

  function handleCrateNewComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onCreateComment(newCommentText)
    setNewCommentText('');
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
      <strong>Leave your feedback</strong>

      <textarea
        required
        name="comment"
        placeholder="Leave a reply"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
      />

      <footer>
        <button disabled={isNewCommentEmpty} type="submit">Publish</button>
      </footer>
    </form>
  )
}