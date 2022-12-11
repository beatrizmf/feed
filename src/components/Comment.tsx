import { useState } from 'react'

import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'
import { RelativeTimeToNow } from './RelativeTimeToNow'

import styles from './Comment.module.css'

interface Author {
  avatarUrl: string
  name: string
  role: string
}

interface CommentInterface {
  id: number
  author: Author
  content: string
  likesCount: number
  publishedAt: Date
}

interface CommentProps {
  comment: CommentInterface
  onDeleteComment: (commentId: number) => void
}

export function Comment ({
  comment: { id, author, content, likesCount, publishedAt },
  onDeleteComment
}: CommentProps) {
  const [localLikesCount, setLocalLikesCount] = useState(likesCount)

  function handleLikeComment () {
    setLocalLikesCount(existentsLike => existentsLike + 1)
  }

  function handleDeleteComment () {
    onDeleteComment(id)
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
              <RelativeTimeToNow fromDate={publishedAt} />
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
          <button
            onClick={handleLikeComment}
            className={styles.likeButton}
          >
            <ThumbsUp />
            Like <span>{localLikesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
