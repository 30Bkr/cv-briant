import styles from './myself.module.css';

export default function Myself(){
  return(
    <section className={styles.contenedor}>
      <div className={styles.contenedor1}>
        <h2>Hola!!👋😁</h2>
        <p>Soy Briant Carrillo, es un placer conocerte.</p>
        <p>Sí estás aquí es porque quieres saber quién soy y qué puedo ser capaz de hacer, ¿No es cierto?</p>
        <p>Realmente es díficil saber al 100% quién eres! Pero sí te puedo decir cuales son mis cualidades y la verdad es que soy una persona extremandamente honesta, tengo autodisciplina, soy responsable y una de mis mejores cualidades es la perseverancia, soy una persona competitiva por ende me encantan los retos ya que ahí es cuando notamos de lo que somos capaces y al mismo tiempo solemos superarnos. Me encanta aprender, cuestionar el por qué de las cosas y hasta no conseguir entender la respuesta a mi pregunta no paro de pensar en ello.</p>
        <p>Actualmente estoy estudiando ingeniería informatica y programación en Platzi</p>
      </div>
      <div className={styles.contenedor2}>
        <div>
          <h3>Habilidades</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h3>Redes Sociales</h3>
          <ul>
            <li>Linked-in</li>
            <li>Git Hub</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>
    </section>
  )
}