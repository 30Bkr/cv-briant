import styles from './Header.module.css'

export default function Header(){
  return(
    <header className={styles.header}>
      <ul>
        <li>Inicio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}