import styles from './styles.module.css'

export default function Page() {
    //class='estilo' convencional
    //className='estilos' javascript
  return ( //Objeto JSX 
    <>
      <div className={styles.containerMain}>
        <div className={styles.containerContent}>
        <div>
          <div>
          <h1>Descripcion</h1>
            <p>Esta es una pagina de prueba</p>
          </div>
          <br></br>
          <br></br>

          <div className={styles.cardslayout}>
          <h1>Card 1</h1>
            <p>Descripcion de la card</p>
            </div>

            <div className={styles.cardslayout}>
            <h1>Card 2</h1>
            <p>Descripcion de la card</p>
            </div>

            <div className={styles.cardslayout}>
            <h1>Card 3</h1>
            <p>Descripcion de la card </p>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}
