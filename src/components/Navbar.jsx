import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.title}>Ceylon Car Sales</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: '1rem 2rem',
    color: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  title: {
    margin: 0,
    fontWeight: 'bold',
    fontSize: '1.5rem',
    userSelect: 'none',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem',
  },
};
