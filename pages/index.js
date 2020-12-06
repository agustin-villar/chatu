import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🧘🏼‍♀️ | Jugando Chaturanga</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🧘🏼‍♀️<br />Jugando Chaturanga
        </h1>
        <hr />

        <p>
          Hace dos años, mas o menos, no tenía idea de lo que era un "Chaturanga", la palabra como tal  quizás me habría llamado la atención solo porque suena raro, eso a pesar de que nuestra idioma está lleno de palabras como chirimoya, charro, Churra, chévere, changos, en fin "che" por todos lados, pero Chaturanga tiene un sonido particular para nosotros, medio distante, o por lo menos para mí es así. Sin embargo, esa palabra que antes se me hacía medio extraña, ahora me llama la atención por otra razón, ya no es tan rara, ya hace parte de mi vida casi que diariamente. Tal vez ustedes puedan sentirse identificadas e identificados con está situación, por eso les voy a contar algo que aprendí hace poco, cuando me encontré con otro Chaturanga que me tomó por sorpresa. 
        </p>

        <p>
          Resulta que Chaturanga además de ser esa pose que todas y todos disfrutamos tanto, es también un juego de mesa que surgió en la India alrededor del año 400 A.C, es el padre del ajedrez y se jugaba también en un tablero de ocho casillas de ancho por ocho de largo, todas del mismo color y no blancas y negras como las conocemos hoy en día. Cuenta la leyenda, que el juego surgió con el fin de reproducir los hechos ocurridos durante una batalla de sucesión al trono entre dos hermanos, con el objetivo de esclarecer algunos detalles turbios del enfrentamiento. Un grupo de sabios decidió recrear la confrontación en un tablero de madera, en el cual colocaron estatuillas que representaban a los protagonistas de la contienda. Aunque los detalles de la evolución del Chaturanga no son del todo claros, se sabe que se convirtió  en uno de los pasatiempos preferidos por los mercaderes marítimos de la India Antigua, dispersándose gracias a las rutas comerciales a través de Asia Occidental hasta llegar a Europa.
        </p>

        <p>
          Chaturanga traduce "cuatro miembros" por sus raíces en Sánscrito<sup><a href="#1">1</a></sup> "Chatur" cuatro y "Anga" miembros,  el juego fue nombrado así ya que el ejército Indio estaba conformado por la infantería, la caballería, la elefantería<sup><a href="#2">2</a></sup> y los carruajes, estas cuatro divisiones estaban representadas en el tablero junto con el rey y el general del ejército, el cual no podía alejarse de su rey más de una casilla de distancia. El Chaturanga sufrió un largo proceso de occidentalización, dando origen a lo que hoy conocemos como ajedrez, como resultado los que alguna vez fueron elefantes se convirtieron en alfiles<sup><a href="#3">3</a></sup>, los carruajes pasaron a ser torres, y el general del ejército que siempre estaba al lado del rey, finalmente se convirtió en la reina que puede moverse a su antojo por todo el tablero, posicionándose como la ficha más versátil y poderosa del juego.
        </p>

        <div className={`${styles['sanscrit-gradient']} ${styles.banner}`} style={{ height: '400px' }}>
          <img src="/img/chaturanga.svg" width="500"/>
          <h3>Así se escribe Chaturanga en Sánscrito 🤓</h3>
        </div>

        <p>
          El yoga también proviene de la India, las poses que Nati nos ha enseñado: kapotasana, malasana, lolasana y todo ese repertorio de "Asanas"  fueron originalmente nombradas en Sánscrito, un idioma que tiene más de 3000 años de antigüedad (Bueno, el pancake no tanto 🥞<sup><a href="4">4</a></sup>) Si bien estos nombres describen una pose, son también nombres cargados de tradición, de significado y de historia; como en el Hanumanasana<sup><a href="#5">5</a></sup> si recuerdan la leyenda que nos contó Nati en uno de los videos. Cuando entramos al Chaturanga<sup><a href="#6">6</a></sup> o "Chatu", como le dicen algunas de cariño, nos apoyamos en nuestras cuatro extremidades, es ahí cuando su origen lingüístico se hace obvio, sin embargo, más alla de la traducción literal el número cuatro tenía una simbología muy importante en la cultura Hindú, representaba solidez, simetría, estabilidad; no solo eran cuatro las divisiones del ejército  que protegía su soberanía, también el dios Brahma tenía cuatro cabezas que miraban a cada uno de los puntos cardinales, representando la ubicuidad, la consciencia del propio ser y de lo que pasa a su alrededor.  El cuatro es el número del orden y representa armonía, firmeza y equilibrio, el mejor ejemplo es una mesa o una silla, que por lo general tienen cuatro puntos de apoyo convirtiéndolas en estructuras estables por naturaleza, aunque cuando uno de estos apoyos se desnivela hay que ponerle un papelito debajo para que todo vuelva a la calma, cualquier parecido con las prácticas de yoga no es coincidencia.
        </p>

        <p>
          La próxima vez que escuchen "Chaturanga" sabrán que es una palabra llena de historia y significado, de la que ahora también hacemos parte. Es más que una pose.
        </p>

        <video width="100%" controls autoPlay loop muted>
          <source src="/video/chatu.mp4" type="video/mp4" />
        </video>
      </main>

      <footer className={styles.footer}>
        <ol className={styles.footnotes}>
          <li id="1">
            El Sánscrito es el lenguaje sagrado del Hinduísmo.
          </li>
          <li id="2">
            ¡El ejército Indio tenía elefantes! Cual película o cual Age of Empires para quienes lo han jugado.
          </li>
          <li id="3">
            De acuerdo con fuentes de alta fidelidad  (Esto me lo conto Nati 👀) "Alfil" en español se utiliza únicamente y exclusivamente para
            nombrar esa ficha del ajedrez, no tiene ningún otro significado como los caballos o las torres. "Al fil" son originalmente dos
            palabras árabes que traducen "El elefante". Esto probablemente no tendría mucho sentido para los ingleses quienes al no tener Elefantes dentro
            de su imaginario decidieron mejor cambiarlos por Obispos (Bishops en inglés), que aunque visualmente no eran tan imponentes como los elefantes,
            si tuvieron un papel trascendental en las jerarquías de las sociedades europeas occidentales. La palabra bishop proviene del griego "episcopos"
            (Lo pueden ver en palabras como episcopado 👀) que quiere decir "mirar desde arriba", al respecto Nati hace una relación muy interesante,
            destacando el hecho de que al estar sobre un elefante podrías ver todo el campo de batalla desde arriba.
          </li>
          <li id="4">
            Los nombres de las poses han sido traducidos a diversos idiomas y muchas poses son compartidas en una gran cantidad de prácticas y disciplinas, por lo que frecuentemente son nombradas de diferentes maneras, como los planks, los handstands o el pancake. 
          </li>
          <li id="5">
            El video de los splits si quieren recordar la historia, o la pose, o las dos.
          </li>
          <li id="6">
            Al Chaturanga Dandasana tambíen se le conoce como "Pose del bastón de cuatro extremidades" o "Four limbed staff pose" en inglés. 
          </li>
        </ol>
      </footer>
    </div>
  )
}
