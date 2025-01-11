
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <Link className="nav-item" href={"/"}>ThatMovieList</Link>
        <Link className="nav-item"href="../">Home</Link>
        <Link className="nav-item"href="/ui/about">About</Link>
        <Link className="nav-item"href="/ui/contact">Contact</Link>
      <div className="nav-account">
      <Link className="nav-item"href="/ui/login">Login</Link>
      <Link className="nav-item"href="/ui/signup">Sign Up</Link>
      </div>

      </ul>
    </nav>
  );
}

export default Navbar;

