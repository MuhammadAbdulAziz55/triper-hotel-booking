import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password.length < 6) {
      setError("!!!Your password should be at least 6 characters long");
      return;
    }

    if (password !== confirm) {
      setError("!!!Your password do not match");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log("user", user);
        form.reset();
      })
      .catch((err) => console.error(err));
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
        <div className="form-control">
          <label htmlFor="confirm">Confirm password</label>
          <input type="password" name="confirm" className="" required />
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
      {error ? <p className="text-red-800">{error}</p> : <p></p>}
    </div>
  );
};

export default SignUp;
