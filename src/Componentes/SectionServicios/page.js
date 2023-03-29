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
            <h1>Titulo</h1>
            <p>Descripcion</p>
          </div>
          <div className={styles.cardslayout}>
            <p>Card 1 </p>
          </div>
          <div className={styles.descripcard}>
            <p>Descripcion 1</p>
          </div>
          <div className={styles.cardslayout}>
            <p>Card 2 </p>
          </div>
          <div className={styles.descripcard}>
            <p>Descripcion 2</p>
          </div>
          <div className={styles.cardslayout}>
            <p>Card 3 </p>
          </div>
          <div className={styles.descripcard}>
            <p>Descripcion 3</p>
          </div>
          
         
          </div>
        </div>
      </div>
    </>
  )
}
