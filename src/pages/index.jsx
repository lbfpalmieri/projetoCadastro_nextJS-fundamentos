import Link from "next/link";
import styles from '../styles/Estiloso.module.css'

export default function Inicio(){
  return(
    <div className={styles.textAlinhado}>
      <Link href="/estiloso">
        Estiloso
      </Link>
    </div>
  )
}
