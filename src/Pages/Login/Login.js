import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="" required />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="" required />
        </div>
        <input type="submit" value="Login" className="btn-submit" />
      </form>
      <p>
        {" "}
        New to Abdul Aziz{" "}
        <Link to="/sign-up">
          <span className="text-green-700">create a New Account</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
