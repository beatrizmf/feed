import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

interface PostProps {
  content: { type: string; content: string; }[]
  author: {
    avatarUrl: string
    name: string
    role: string
  };
  publishedAt: Date;
}

export function Post({ content, author, publishedAt }: PostProps) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

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
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea placeholder="Leave a reply" />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
