

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <h1>ThatMovieList</h1>
        <li style={styles.navItem}><a href="./" style={styles.navLink}>Home</a></li>
        <li style={styles.navItem}><a href="./about" style={styles.navLink}>About</a></li>
        <li style={styles.navItem}><a href="./contact" style={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: 'inline',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;

