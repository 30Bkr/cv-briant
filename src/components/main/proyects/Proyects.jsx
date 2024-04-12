import Image from "next/image"
import styles from './Proyects.module.css'
import ProyectCard from "./ProyectCard"

const proyectos = [
  {
    title:'Landing Page',
    image:'/images/LandingPageComprimido.png',
    content: 'Landing Page creada con HTML, CSS y JavaScript con fines educativos',
  },
  {
    title:'DashBoard',
    image:'/images/DashboardComprimido.png',
    content: 'Dashboard creado con Next.js, Tailwind con fines educativos',
  },
  {
    title:'Proyecto',
    image:'/images/ProyectoComprimido.png',
    content: 'Proyecto personal con fines educativos creado con next y',
  }
]
export default function Proyects(){
  return(
    <section className={styles.contenedor}> 
      <div className={styles.proyects}>
        {proyectos.map((object)=>(
          <ProyectCard info={object} key={proyectos.findIndex(name=> name.title === object.title)}/>
        ))}
      </div>
    </section>
  )
}