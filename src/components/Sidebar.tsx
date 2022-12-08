import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://static.dw.com/image/18825549_605.jpg"
        alt="cover"
      />

      <div className={styles.profile}>
        <Avatar
          src="https://github.com/beatrizmf.png"
          alt="your avatar"
        />

        <strong>Beatriz Felix</strong>
        <span>Software Engineer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
