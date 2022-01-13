import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signIn, signInWithGithub, signInWithGoogle } from "../helpers/auth";
import { ReactComponent as Password } from "../logo/lock_black_24dp.svg";
import { ReactComponent as Person } from "../logo/person_outline_black_24dp.svg";
import { ReactComponent as Google } from "../logo/google_brands.svg";
import { ReactComponent as Github } from "../logo/github_brands.svg";
import styles from "../styles/login.module.css";

function Login() {
  const [input, setInput] = useState({ email: "", password: "" });

  // sign in submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    // sign in function
    signIn(email, password);
  };

  // Google click handler
  const googleSignIn = () => {
    signInWithGoogle();
  };

  // Github click handler
  const githubSignIn = () => {
    signInWithGithub();
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={styles.formBody}>
      <div className={styles.card}>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <h1>Sign In</h1>
          <p>Fill in the form below to sign in to your account.</p>
          <div className={styles.emailInput}>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              value={input.email}
              required
              autoComplete="true"
            />
            <label htmlFor="email" className={styles.labelName}>
              <Person />
              <span className={styles.contentName}>Email</span>
            </label>
          </div>
          <div className={styles.passwordInput}>
            <input
              name="password"
              onChange={handleChange}
              value={input.password}
              type="password"
              required
              autoComplete="true"
            />
            <label htmlFor="password" className={styles.labelName}>
              <Password />
              <span className={styles.contentName}>Password</span>
            </label>
          </div>
          <div className={styles.bttn}>
            <button title="Login" aria-label="Login to DheraGram" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className={styles.flex}>
          <div className={styles.rule}></div>
          <p>or</p>
          <div className={styles.rule}></div>
        </div>
        <div className={styles.svgContainer}>
          <button
            aria-label="Sign-in with Google"
            onClick={googleSignIn}
            type="button"
          >
            <Google />
          </button>
          <label htmlFor="submit">
            <button
              aria-label="Sign-in with Github"
              onClick={githubSignIn}
              type="button"
            >
              <Github />
            </button>
          </label>
        </div>
        <div className={styles.option}>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
