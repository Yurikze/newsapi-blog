import styles from './nav.module.scss';

const Nav = () => {
  /**
   * @description Компонент навигации. Временные заглушки button. При появлении необходимости в роутенге - будет добавлен react router и NavLink
   * */

  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <button className={`${styles.navLink} ${styles.navLink_active}`}>Главная</button>
        </li>
        <li className={styles.navItem}>
          <button className={styles.navLink}>Афиша</button>
        </li>
        <li className={styles.navItem}>
          <button className={styles.navLink}>О компании</button>
        </li>
        <li className={styles.navItem}>
          <button className={styles.navLink}>Контакты</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
