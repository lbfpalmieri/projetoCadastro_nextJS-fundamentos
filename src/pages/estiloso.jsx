import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'; 

export default function Estiloso() {
  return (
    <div>
      <h1 className={styles.roxo}>Estilo usando CSS Módulos</h1>
        <p className={styles.textAlinhado}>Este é um exemplo de estilo usando CSS Módulos.</p>
        <Link href="/">
          <h3 className={styles.textAlinhado}>Voltar</h3>
        </Link>
    </div>
  );
}