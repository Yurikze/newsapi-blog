import Logo from '../logo/logo';
import Nav from '../nav/nav';
import Search from '../search/search';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Logo />
        <Nav />
        <Search />
      </div>
    </header>
  );
};

export default Header;
