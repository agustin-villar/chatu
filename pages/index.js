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
          Hace tres años no sabía lo que era "Chaturanga" y la palabra como tal me habría llamado la atención solo por que suena raro,
          a pesar de que nuestra idioma está lleno de chirimoya, charro, Churra, chévere, changos, en fin "che" por todos lados, pero
          Chaturanga tiene un sonido particular para nosotros, medio distante, o por lo menos para mí es así. Sin embargo esa palabra
          que antes se me hacía medio extraña, ahora me llama la atención por otra razón, ya no es tan rara, ya hace parte de mi vida,
          casi que diariamente. Creo que ustedes saben de qué les estoy hablando y tal vez se puedan identificar con esa situación,
          por eso les voy a contar algo que aprendí hace poco, cuando me encontré con otro Chaturanga que no me esperaba.
        </p>

        <p>
          Resulta que Chaturanga además de ser esa pose que todos disfrutamos tanto, es también un juego de mesa que
          surgió en la India alrededor del año 400 A.C, es el padre del ajedrez y se también se jugaba en un tablero de ocho casillas
          de ancho por ocho de largo, todas del mismo color y no blancas y negras como hoy en día. Cuenta la leyenda, que el juego surgió
          con el fin de reproducir los hechos ocurridos durante una batalla de sucesión al trono entre dos hermanos, para de esta manera
          poder esclarecer algunos detalles turbios del enfrentamiento. Un grupo de sabios decidió entonces recrear la confrontación en
          un tablero de madera, en el cual colocaron estatuillas que representaban a los protagonistas de la contienda, a falta de videos
          había que ser recursivos. Los detalles de la evolución del juego no son del todo claros, pero se sabe que se convirtió  en uno
          de los pasatiempos preferidos por los mercaderes marítimos de la India Antigua, fue así que se dispersó a través de Asia
          Occidental hasta llegar a Europa.
        </p>

        <p>
          Chaturanga traduce "cuatro miembros" por sus raíces en Sánscrito<sup><a href="#1">1</a></sup> "Chatur" cuatro y "Anga" miembros,  el juego fue nombrado así
          ya que el ejército estaba conformado por la infantería, la caballería, la elefantería<sup><a href="#2">2</a></sup> y los carruajes, estas cuatro divisiones
          estaban representadas en el tablero, junto con el rey y el general del ejército, que no podía alejarse de su rey más de una
          casilla. El Chaturanga sufrió un largo proceso de occidentalización, dando origen a lo que hoy conocemos como ajedrez, fue así
          que los que alguna vez fueron elefantes se convirtieron en alfiles<sup><a href="#3">3</a></sup>, los carruajes pasaron a ser torres, y el general del ejército
          que siempre estaba al lado del rey, finalmente se convirtió en la reina, que puede moverse a su antojo por todo el tablero,
          situándose como la ficha más versátil y poderosa del juego.
        </p>

        <div className={`${styles['sanscrit-gradient']} ${styles.banner}`} style={{ height: '400px' }}>
          <img src="/img/chaturanga.svg" width="500"/>
          <h3>Así se escribe Chaturanga en Sánscrito 🤓</h3>
        </div>

        <p>
          El yoga comparte el mismo origen que este antiguo juego, los nombres de las poses también provienen del Sánscrito, kapotasana,
          malasana, lolasana y todas las "Anas" que nos ha presentado Nati, fueron originalmente escritas en un idioma que tiene más de
          3000 años de antigüedad (Bueno, el pancake no tanto 🥞) que si bien describen una pose son nombres cargados de tradición, de
          significado y de historia, como sucede con el Hanumanasana<sup><a href="#4">4</a></sup>, pero eso es otra historia. Cuando entramos al Chaturanga o
          "Chatu" como le dicen algunas de cariño, nos apoyamos en nuestras cuatro extremidades, es ahí cuando su origen lingüístico se hace
          obvio, sin embargo, más alla de la traducción literal, el número cuatro tenía una simbología muy importante en la cultura Hindú,
          representaba solidez, simetría, estabilidad; no solo eran cuatro las divisiones del ejército  que protegía su soberanía, también
          el dios Brahma tenía cuatro cabezas que miraban a cada uno de los puntos cardinales, representando la ubicuidad, la consciencia
          del propio ser y de lo que pasa a su alrededor.  El cuatro es el número del orden y representa armonía, firmeza y equilibrio, el
          mejor ejemplo es una mesa o una silla, que por lo general tienen cuatro puntos de apoyo convirtiéndolas en estructuras estables
          por naturaleza, aunque cuando uno de estos apoyos se desnivela, hay que ponerle un papelito debajo para que todo vuelva a la calma,
          cualquier parecido con las prácticas no es coincidencia. La próxima vez que escuchen "Chaturanga" sabrán que es una palabra llena
          de historia y de significado, de la que ahora también hacemos parte, es más que una pose.
        </p>

        <video width="100%" controls autoPlay loop muted>
          <source src="/video/chatu.mp4" type="video/mp4" />
        </video>
      </main>

      <footer className={styles.footer}>
        <ol className={styles.footnotes}>
          <li id="1">
            El lenguaje sagrado del Hinduísmo.
          </li>
          <li id="2">
            ¡El ejército Indio tenía elefantes! Cual película o cual Age of Empires para quienes lo han jugado.
          </li>
          <li id="3">
            "Alfil" en español se utiliza únicamente y exclusivamente para nombrar esa ficha del ajedrez, no tiene ningún otro significado
            como los caballos o las torres. "Al fil" son originalmente dos palabras árabes que traducen "El elefante".
            Esto probablement no tuvo mucho sentido para los ingleses quienes optaron simplemente por llamar "Bishops" (Obispos) a los alfiles,
            que si bien no eran tan impresionantes como los elefantes, si fueron personajes muy influyentes en las sociedades de Europa Occidental
            por mucho tiempo.
          </li>
          <li id="4">
            Quienes han visto el video de los splits frontales tal vez lo recuerden.
          </li>
        </ol>
      </footer>
    </div>
  )
}
