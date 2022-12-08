import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/beatrizmf.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Beatriz Felix</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button className={styles.deleteCommentButton} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button className={styles.kudosButton}>
            <ThumbsUp />
            Kudos <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}