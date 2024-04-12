import styles from './myself.module.css';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
export default function Myself(){
  return(
    <section className={styles.todo}>
      <div className={styles.contenedor}>
        <div className={styles.contenedor1}>
          <h3>Hola!!👋😁Soy Briant Carrillo, es un placer conocerte.</h3>
          <h2>Sí estás aquí es porque quieres saber quién soy y qué puedo ser capaz de hacer, ¿No es cierto?</h2>
          <p>Realmente es díficil saber al 100% quién eres! Pero sí te puedo decir cuales son mis cualidades y la verdad es que soy una persona extremandamente honesta, tengo autodisciplina, soy responsable y una de mis mejores cualidades es la perseverancia, soy una persona competitiva por ende me encantan los retos ya que ahí es cuando notamos de lo que somos capaces y al mismo tiempo solemos superarnos. Me encanta aprender, cuestionar el por qué de las cosas y hasta no conseguir entender la respuesta a mi pregunta no paro de pensar en ello.</p>
          <h4>Actualmente estoy estudiando ingeniería informatica y programación en Platzi.com</h4>
        </div>
        <div className={styles.contenedor2}>
          <div>
            <h3>Habilidades</h3>
            <ul>
              <li>Creatividad</li>
              <li>Dedicación</li>
              <li>Adaptabilidad</li>
              <li>Iniciativa</li>
            </ul>
          </div>
          <div>
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