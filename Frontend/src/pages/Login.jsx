import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("user"); // default is user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Hardcoded credentials
  const adminCreds = { email: "admin@example.com", password: "admin123" };
  const userCreds = { email: "user@example.com", password: "user123" };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      role === "admin" &&
      email === adminCreds.email &&
      password === adminCreds.password
    ) {
      alert("Admin login successful!");
      navigate("/admin"); // go to admin page
    } else if (
      role === "user" &&
      email === userCreds.email &&
      password === userCreds.password
    ) {
      alert("User login successful!");
      navigate("/"); // go to home page or user dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container py-5">
      
      <h2 className="text-center mb-4">Login</h2>

      {/* Role selector */}
      <div className="d-flex justify-content-center mb-3">
        <button
          className={`btn ${
            role === "user" ? "btn-primary" : "btn-outline-primary"
          } me-2`}
          onClick={() => setRole("user")}
        >
          User Login
        </button>
        <button
          className={`btn ${
            role === "admin" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setRole("admin")}
        >
          Admin Login
        </button>
      </div>

      {/* Form */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center">
                {role === "admin" ? "Admin Login" : "User Login"}
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
              <p className="mt-3 text-center text-muted small">
                Demo credentials:<br />
                Admin: admin@example.com / admin123<br />
                User: user@example.com / user123
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
