import styles from './myself.module.css';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
export default function Myself(){
  return(
    <section className={styles.todo} id='about'>
      <div className={styles.contenedor}>
        <div className={styles.contenedor1}>
          <h3>Hola!!👋😁Soy Briant Carrillo, es un placer conocerte.</h3>
          <h2>Sí estás aquí es porque quieres saber quién soy y qué puedo ser capaz de hacer, ¿cierto?</h2>
          <p>Soy una persona que se define por su honestidad, autodisciplina y responsabilidad. Mi perseverancia es una de mis mayores fortalezas, impulsándome a superar obstáculos y alcanzar metas con determinación. Soy un apasionado del aprendizaje, siempre cuestionando y buscando comprender el por qué de las cosas. La competitividad es parte de mi naturaleza, disfrutando de los desafíos que ponen a prueba mis habilidades y me llevan a superarme constantemente. Me estoy preparado para enfrentar nuevos retos y demostrar de qué estoy hecho en cualquier entorno laboral.</p>
          <h4>Actualmente estoy estudiando ingeniería informática y programación en Platzi.com</h4>
        </div>
        <div className={styles.contenedor2}>
          <div className={styles.habilidades}>  
            <h3>Habilidades</h3>
            <ul>
              <li>Creatividad</li>
              <li>Dedicación</li>
              <li>Adaptabilidad</li>
              <li>Iniciativa</li>
            </ul>
          </div>
          <div className={styles.redes}>
            <h3>Redes Sociales</h3>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/briant-carrillo-537641185/" target='_blank'>
                  <FaLinkedin size={32}/>
                </a>
              </li>
              <li>
                <a href="https://github.com/30Bkr" target='_blank'>
                  <FaGithub size={32}/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/briant.alessandro/" target='_blank'>
                  <FaFacebook size={32}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}