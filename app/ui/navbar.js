
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a className="nav-link">ThatMovieList</a></li>
        <li className="nav-item"><a href="../" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/ui/about" className="nav-link">About</a></li>
        <li className="nav-item"><a href="/ui/contact" className="nav-link">Contact</a></li>
      <div className="nav-account">
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
      </div>

      </ul>
    </nav>
  );
}

export default Navbar;

