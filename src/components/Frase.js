import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Teste de components de frase</p>
        </div>
    )
}

export default Frase