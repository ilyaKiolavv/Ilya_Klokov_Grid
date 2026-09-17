import styles from './Nav.module.css';

const links = [
  { id: 1, label: 'Главная', href: '#' },
  { id: 2, label: 'Статьи', href: '#' },
  { id: 3, label: 'О нас', href: '#' },
];
function Nav() {
  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <a key={link.id} href={link.href} className={styles.link}>
          {link.label}
            </a>
      ))}
    </nav>
  );
}
export default Nav;