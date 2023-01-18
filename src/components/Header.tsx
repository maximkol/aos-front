import styles from '../App.module.scss';
import { Link } from "react-router-dom";
export function Header(){
    return(
        <nav className={styles.nav}>
            <Link className={styles.navLink} to="/">Главная</Link>
            <Link className={styles.navLink} to="statistic">Статистика</Link>
            <Link className={styles.navLink} to="calendar">Календарь</Link>
            <Link className={styles.navLink} to="rating">Рейтинг</Link>
            <Link className={styles.navLink} to="about">О проекте</Link>
            <Link className={styles.navLink} to="create">Создать турнир</Link>
        </nav>
    )
}