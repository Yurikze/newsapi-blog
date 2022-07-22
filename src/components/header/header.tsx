import Logo from '../logo/logo';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
