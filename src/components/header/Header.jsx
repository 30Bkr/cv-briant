'use client'
import Link from 'next/link'
import styles from './Header.module.css'
import { IoMenuOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { useState } from 'react';

export default function Header(){
  const [open, setOpen] = useState(false)
  const style= { color:'yellow', width: '40px', height: '40px', background:'transparent'}
  return(
    
    <header className={styles.header}>
      <div className={styles.uno}>
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
              Courses
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
      </div>

        {
          !open?(
          <button className={styles.mobile} onClick={()=>setOpen(true)}>

            <IoMenuOutline style={style} />
          </button>

          ):(
          <button className={styles.mobile} onClick={()=>setOpen(false)}>
            <IoIosCloseCircleOutline style={style}/>
          </button>
          )
        }
        {
          open &&(
            <div className={styles.menu}>
              <ul>
                <li>
                  <Link href='/#inicio' onClick={()=>setOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/#about' onClick={()=>setOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href='/#cursos' onClick={()=>setOpen(false)}>
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href='/#proyectos' onClick={()=>setOpen(false)}>
                    Proyects
                  </Link>
                </li>
                <li>
                  <a href='https://wa.me/+584149105229' target='_blank' onClick={()=>setOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )
        }
    </header>
  )
}