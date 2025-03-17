import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [loginstatus, setLoginStatus] = useState(null);
  const [view, setView] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // To store message
  const [showModal, setShowModal] = useState(false); // To control modal visibility

  const navigate = useNavigate();

  const loginmessage = (response) => {
    setModalMessage(response); // Store message in state
    setShowModal(true); // Show modal
  };

  const login = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post("http://localhost:9090/login", loginDetails);
      setLoginStatus(response.status);
      loginmessage(response.data);

      if (response.status === 200) {
        setView(true);
        setTimeout(() => {
          navigate("/admin/CounterProfile"); // Redirect only after success
        }, 2000);
      }
    } catch (error) {
      loginmessage("Error logging in! Please check your credentials.");
    }
  };

  const loginForm = () => (
    <div className="loginback">
      <div className="login">
        <h4 style={{ textAlign: "center" }}>Admin Login</h4>
        <form onSubmit={login}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label className="form-label">Username :</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    required
                    name="username"
                    value={loginDetails.username}
                    onChange={(e) =>
                      setLoginDetails({
                        ...loginDetails,
                        [e.target.name]: e.target.value,
                      })
                    }
                    autoFocus
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="form-label">Password :</label>
                </td>
                <td>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={loginDetails.password}
                    onChange={(e) =>
                      setLoginDetails({
                        ...loginDetails,
                        [e.target.name]: e.target.value,
                      })
                    }
                    required
                    className="form-control"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <Link to={"/"}>
            <button className="btn btn-secondary px-3" type="button">
              Cancel
            </button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <button className="btn btn-primary px-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <Header view={view} setView={setView} />
      {loginForm()}
      <Footer />

      {/* Modal Component */}
      {showModal && (
        <div className="modal">
          <div className="modal-body">
            <h5>{modalMessage}</h5>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
