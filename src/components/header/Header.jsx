import Link from 'next/link'
import styles from './Header.module.css'

export default function Header(){
  return(
    <header className={styles.header}>
      <ul>
        <li>
          <Link href='/#inicio'>
            Inicio
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
        {/* <li>
          <Link href='/#proyectos'>
            Proyectos
          </Link>
        </li>
        <li>
          <Link href='/#contact'>
            Contact
          </Link>
        </li> */}
      </ul>
    </header>
  )
}