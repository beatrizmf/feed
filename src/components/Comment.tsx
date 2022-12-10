import styles from './Comment.module.css'

import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

interface CommentProps {
  comment: {
    id: number
    author: {
      avatarUrl: string
      name: string
      role: string
    }
    content: string
    kudosCount: number
    publishedAt: Date
  }
  onDeleteComment: (commentId: number) => void
}

export function Comment({
  comment: { id, author, content, kudosCount },
  onDeleteComment
}: CommentProps) {
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
          <button className={styles.kudosButton}>
            <ThumbsUp />
            Kudos <span>{kudosCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
