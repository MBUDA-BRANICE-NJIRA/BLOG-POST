import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Blog Post</h2>

      <div className="links">
        <Link to="/" class="nav-links">Home</Link>
        <Link to="/New-Blog" class="nav-links">New Blogs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
