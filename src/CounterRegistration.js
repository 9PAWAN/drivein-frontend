import React, { useState } from "react";
import axios from "axios";

function CounterRegistration() {
  const [counterdata, setCounterdata] = useState({
    name: "",
    owner: "",
    contact: "",
    email: "",
    image: "",
    status: "Active",
  });

  const { name, owner, contact, email } = counterdata;

  const change = (e) => {
    setCounterdata({ ...counterdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9090/addcounters", counterdata)
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
    setCounterdata({
      name: "",
      owner: "",
      contact: "",
      email: "",
      image: "",
      status: "Active",
    });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <center>
          <h5>Counter Registration</h5>
        </center>
        <table>
          <tbody>
            <tr>
              <td>
                <label className="form-label"> Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter Name"
                  required
                  className="form-control"
                  onChange={change}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="form-label">Owner :</label>
              </td>
              <td>
                <input
                  type="text"
                  name="owner"
                  value={owner}
                  placeholder="Enter Owner"
                  required
                  className="form-control"
                  onChange={change}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="form-label"> Contact:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="contact"
                  value={contact}
                  placeholder="Enter Contact number"
                  required
                  className="form-control"
                  onChange={change}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="form-label"> Upload Image :</label>
              </td>
              <td>
                <input
                  type="file"
                  name="image"
                  required
                  className="form-control"
                  onChange={change}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="form-label"> Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  required
                  className="form-control"
                  onChange={change}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="form-label">Avaliability :</label>
              </td>
              <td>
                <input
                  type="text"
                  name="status"
                  value="Active"
                  readOnly
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="btn btn-primary px-5" type="submit">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default CounterRegistration;
