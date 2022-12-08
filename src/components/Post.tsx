interface Post {
  title: string
  body: string
}

import { Comment } from './Comment';

import styles from './Post.module.css'

export function Post() {


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/beatrizmf.png"
            alt="avatar from author"
          />

          <div className={styles.authorInfo}>
            <strong>Beatriz Felix</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉<a href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
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