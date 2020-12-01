import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          El Chaturanga es un juego.
        </h1>

        <p>
          Es curioso como van cambiando las cosas que nos parecen interesantes, a medida que nosotros mismos cambiamos. Hace tres años "Chaturanga" me habría llamado la atención solo porque suena raro, a pesar de que la che en el Español es bastante común, Chaturanga tiene una sonoridad particular para nosotros, o por lo menos para mí. Y como yo sé que todas y todos saben de qué les estoy hablando, les voy a contar algo que aprendí hace poco.
        </p>
        <p>
          Chaturanga es el nombre de un juego de mesa que apareció en la India en el año 400 A.C, es el ancestro del ajedrez y como éste se jugaba en un tablero de 8 casjllas de ancho por ocho de largo, aunque no necesariamente blancas y negras como en el ajedrez moderno. Cuenta la leyenda que el juego surgió con el fin de aclarar los hechos de una batalla de sucesión al trono entre dos hermanos. Un grupo de sabios decidió entonces, representar la batalla en un tablero de madera con estatuillas que representaban a los protagonistas de la contienda y así reproducir los sucesos del campo de batalla. Chaturanga puede ser traducido como "cuatro miembros" por sus raíces en Sánscrito "Chatur" cuatro y "Anga" miembro o extremidad. Hasta aquí esto no parece tener mucho sentido con el juego, bueno, fue nombrado así porque en la India Antigua el ejército estaba conformado por la infantería, la caballería, la elefantería (Si, como en las películas y como en Age of Empires el ejército Indio contaba con elefantes dentro de sus ejércitos) y la carrocería. El Chaturanga sufrió un largo proceso de occidentalización, hasta evolucionar en el ajedrez moderno, impulsado por los intercambios comerciales entre Asia y Europa, pasando por los Persas y los Árabes y es así como los que alguna vez fueron elefantes hoy son alfiles, (Obispos en la traducción inglesa), los carruajes pasaron a ser torres, y una especie de ministro que acompañaba al rey se convirtió en la reina, la ficha más versátil y poderosa del tablero.
        </p>
        <p>
          Todo hasta aquí muy interesante, pero ¿Y el yoga? Para este punto estoy seguro que todos ya hicimos las conexiones pertinentes, y sabemos que cuando estamos en un Chaturanga estamos apoyados en nuestros cuatro miembros muy cerca del suelo. El número cuatro en el nombre de la pose, no es gratis, ni lo fue para los indios en su momento, significaba estabilidad y solidez. Cuatro son los lados que tiene un cuadrado, los puntos cardinales, es mucho más estable una mesa que un trípode, la idea de tener cuatro paredes como símbolo de protección, 
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  )
}
