import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ view, setView }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setView(false); // ✅ Correctly log out the user
    navigate("/");  // ✅ Redirect to home/login page
  };

  return (
    <div className="header">
      <h5>Drive-In</h5>
      {!view ? (
        <Link to="/login">
          <button className="btn btn-warning px-5">Login</button>
        </Link>
      ) : (
        <button className="btn btn-primary px-5" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}

export default Header;
