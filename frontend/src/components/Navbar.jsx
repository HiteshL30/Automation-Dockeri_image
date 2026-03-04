import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#222" }}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/add">Add Message</Link>
      <Link style={linkStyle} to="/messages">View Messages</Link>
      <Link style={linkStyle} to="/about">About</Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  marginRight: "20px",
  textDecoration: "none"
};

export default Navbar;