import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">ConnectLogs</Link>
      <Link to="/create">Write Experience</Link>
    </nav>
  );
}

export default Navbar;
