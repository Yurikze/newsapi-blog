import logo from '../../assets/images/logo.svg';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logo} src={logo} alt="site logo" />
    </div>
  );
};

export default Logo;
