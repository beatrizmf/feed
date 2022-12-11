import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { CommentForm } from './CommentForm'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface CommentInterface {
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

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
  comments: CommentInterface[]
}

export function Post({ content, author, comments, publishedAt }: PostProps) {
  const [localComments, setLocalComments] = useState(comments)

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function createComment(newCommentText: string) {
    setLocalComments(existentsComments =>
      [
        ...existentsComments,
        {
          ...existentsComments[0],
          id: Math.random(),
          content: newCommentText
        }
      ]
    )
  }

  function deleteComment(commentId: number) {
    setLocalComments(existentsComments =>
      existentsComments.filter(comment => comment.id !== commentId)
    )
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <Avatar
            src={author.avatarUrl}
            alt="avatar from author"
          />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <CommentForm onCreateComment={createComment} />

      <div className={styles.commentList}>
        {localComments.map(comment =>
          <Comment
            key={comment.id}
            comment={comment}
            onDeleteComment={deleteComment}
          />
        )}
      </div>
    </article>
  )
}
