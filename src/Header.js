import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const [logindetails, setLogindetails] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [adminlogin, setAdminlogin] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const login = (e) => {
    e.preventDefault();

    console.log("🔹 Entered Credentials:", logindetails);

    // Simulate login check
    if (logindetails.username === "admin" && logindetails.password === "admin@123") {
      console.log("✅ Login successful! Storing session...");
      console.log("🔹 Storing session in localStorage...");
      localStorage.setItem("login", JSON.stringify(logindetails)); // Store data
      setAdminlogin(true);
      navigate("/admin/counterprofile"); // Redirect
    } else {
      console.log("❌ Invalid credentials. Please try again.");
      alert("Invalid username or password");
    }
  };

  const logout = () => {
    console.log("🔴 Logged out successfully.");
    console.log("🔹 Removing session from localStorage...");
    localStorage.removeItem("login"); // Clear stored data
    setAdminlogin(false);
    navigate("/");
  };

  return (
    <div className="text-center mt-4">
      <div className="header">
        <h5>Drive-In</h5>
        {adminlogin ? (
          <button className="btn btn-danger px-5 me-3" onClick={logout}>
            Logout
          </button>
        ) : (
          <button className="btn btn-warning px-5 me-3" onClick={handleShow}>
            Login
          </button>
        )}
      </div>

      {/* Login Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={login}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="username"
                value={logindetails.username}
                onChange={(e) =>
                  setLogindetails({ ...logindetails, [e.target.name]: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={logindetails.password}
                onChange={(e) =>
                  setLogindetails({ ...logindetails, [e.target.name]: e.target.value })
                }
                required
              />
            </Form.Group>

            <Button variant="secondary" onClick={handleClose} className="me-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
