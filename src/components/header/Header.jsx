import Link from 'next/link'
import styles from './Header.module.css'

export default function Header(){
  return(
    <header className={styles.header}>
      <ul>
        <li>
          <Link href='/#inicio'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/#about'>
            About
          </Link>
        </li>
        <li>
          <Link href='/#cursos'>
            Cursos
          </Link>
        </li>
        <li>
          <Link href='/#proyectos'>
            Proyects
          </Link>
        </li>
        <li>
          <a href='https://wa.me/+584149105229' target='_blank'>
            Contact
          </a>
        </li>
      </ul>
    </header>
  )
}