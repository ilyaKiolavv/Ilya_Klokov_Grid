import styles from './Header.module.css';
import Nav from '../Nav/Nav';

function Header({ articlesCount }) {
  return (
   <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h1 className={styles.title}>React Blog</h1>
          <span className={styles.count}>Статей: {articlesCount}</span>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;