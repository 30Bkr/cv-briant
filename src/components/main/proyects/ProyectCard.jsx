import Image from "next/image";
import styles from './ProyectCard.module.css'
import Link from 'next/link'
export default function ProyectCard( object ){
  const { info } = object;
  return(
    
        <div className={styles.proyect_container} >
          <Link href={info.link} target="_blank">
            <Image 
              width={300}
              height={150}
              src={info.image}
              alt={info.title}
            />
            <div className={styles.proyect_container_text}>
              <h2>{info.title}</h2>
              <p>{info.content}</p>
            </div>
          </Link>
        </div>
  
  )
}