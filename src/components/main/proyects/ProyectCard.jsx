import Image from "next/image";
import styles from './ProyectCard.module.css'
export default function ProyectCard( object ){
  const { info } = object;
  return(
    <div className={styles.proyect_container}>
    <Image 
        width={300}
        height={150}
        src={info.image}
        alt={info.title}
    />
    <h2>{info.title}</h2>
    <p>{info.content}</p>
  </div>
  )
}