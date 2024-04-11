import styles from './cursosCard.module.css'
import Image from "next/image";

export default function CursosCard( { data } ){
  return(
    <div className={styles.contenedor}>
      <div className={styles.contenedor_image}>
        <Image 
          width={60}
          height={60}
          alt='curso'
          src={data.image}
        />
      </div>
      <div className={styles.contenedor_text}>
        <p className={styles.title}>{data.title}</p>
        <div className={data.nivel === 'Básico' ?styles.contenedor_text2: styles.contenedor_text3}>
          <p>Nivel: </p>
          <p>{data.nivel}</p>
        </div>
      </div>
    </div>
  )
}