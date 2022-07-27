import { Link } from "react-router-dom";

function Toolbar() {
  return (
    <div className="toolbar">
      <Link to="/chatRoom">
        <h1>Chat Room</h1>
      </Link>
      <Link to="/login">
        <h1>Log In</h1>
      </Link>
      <Link to="/">
        <h1>Register</h1>
      </Link>
      <Link to="/profile">
        <h1>Profile</h1>
      </Link>
    </div>
  );
}

export default Toolbar;
