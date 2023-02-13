import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="" required />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="" required />
        </div>
        <input type="submit" value="Sign up" className="btn-submit" />
      </form>
      <p>
        {" "}
        Already have an account please{" "}
        <Link to="/login">
          <span className="text-green-700">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
