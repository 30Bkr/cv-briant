import styles from './Presentacion.module.css'
import Image from "next/image";

export default function Presentacion(){
  return (
    <section className={styles.presentacion} id='inicio'>
      <div className={styles.presentacion_block0}>
        <div className={styles.presentacion_block1}>
          <h1>Briant Alessandro Carrillo Sanchez </h1>
          <h2>Front-end Developer</h2>
          <div className={styles.presentacion_sticks}>
            <p>⭐25 años</p>
            <p>📖Estudiante</p>
            <p>⚽Deportista</p>
            <p>⛰️Amante de la vida</p>
          </div>
        </div>
        <div  className={styles.presentacion_block2}>  
          <Image 
            src='/images/briantFT1.png'
            alt='Briant Carrillo'
            width={300} 
            height={400}
          />
        </div>
      </div>
    </section>
  )
}