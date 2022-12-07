import styles from './Header.module.css'

import logoImg from '../../assets/feed-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Logo Feed" />
    </header>
  )
}