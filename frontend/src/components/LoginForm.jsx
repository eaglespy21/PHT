import React, { useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${emailInput} Password: ${passwordInput}`);
    // Send login request to server
    fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.access_token;
        const refreshToken = data.refresh_token;
        console.log("Login successful!");
      })
      .catch((error) => {
        console.error("Login unsuccessful", error);
      });
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={emailInput}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={passwordInput}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
