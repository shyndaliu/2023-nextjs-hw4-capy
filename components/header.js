import Link from "next/link";
import styles from "../styles/header.module.css"

export default function Header(){
    return(
        <>
        <header className={styles.header}>
            <div className={styles.grid}>
                <nav className={styles.navigation}>
                    <ul className={styles.navigation__list}>
                        <li className={styles.navigation__item}><Link href="/" class={styles.navigation__link}>Home</Link></li>
                        <li className={styles.navigation__item}><Link href="/capyofthe" class={styles.navigation__link}>Capy of The...</Link></li>
                        <li className={styles.navigation__item}><Link href="/capyfact" class={styles.navigation__link}>Capy Fact</Link></li>
                        <li className={styles.navigation__item}><Link href="/capyoftruth" class={styles.navigation__link}>Personal Capy!</Link></li>
      
                    </ul>
                </nav>
            </div>
        </header>
        </>
    );
};