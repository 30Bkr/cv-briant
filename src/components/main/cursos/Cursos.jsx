import CursosCard from "./CursosCard";
import { data } from "@/data";
import styles from './cursos.module.css'
export default function Cursos(){

  return(
    <section className={styles.contenedor}>
      <h2>Conocimientos y Cursos Aprobados</h2>
      <div className={styles.contenedor2}>
        {data.map((datos)=>{
          return(
            <CursosCard data={datos} key={datos.title}/>
          )
        })}
      </div>
    </section>
  )
}