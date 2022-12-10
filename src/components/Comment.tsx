import { useState } from 'react'

import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

interface CommentProps {
  comment: {
    id: number
    author: {
      avatarUrl: string
      name: string
      role: string
    }
    content: string
    likesCount: number
    publishedAt: Date
  }
  onDeleteComment: (commentId: number) => void
}

export function Comment({
  comment: { id, author, content, likesCount },
  onDeleteComment
}: CommentProps) {
  const [localLikesCount, setLocalLikesCount] = useState(likesCount);

  function handleLikeComment() {
    setLocalLikesCount(localLikesCount + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src={author.avatarUrl}
        alt="avatar from comment author"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button
              onClick={handleDeleteComment}
              className={styles.deleteCommentButton}
              title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment} className={styles.likeButton}>
            <ThumbsUp />
            Likes <span>{likesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
