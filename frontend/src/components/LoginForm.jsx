import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// The below import also imports all the "general" styles for eg. button, label etc.
import styles from "./LoginForm.module.css";

function Login({ login }) {
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoggingIn(true);
    setError(null);
    try {
      const { access_token, refresh_token } = await login(
        emailInput,
        passwordInput
      );
      // Login successful
      setShowCelebration(true);
      // This only loads the new component, doesn't refresh the whole web page-
      // unlike window.location.href
      navigate("/weighttracker");
    } catch (error) {
      setError("Invalid email or password");
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className={styles.Login}>
      <h2>Login to your account</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>
            Email:
            <input
              type="email"
              value={emailInput}
              onChange={(event) => setEmail(event.target.value)}
              disabled={isLoggingIn}
              required
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            Password:
            <input
              type="password"
              value={passwordInput}
              onChange={(event) => setPassword(event.target.value)}
              disabled={isLoggingIn}
              required
            />
          </label>
        </div>

        <button type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? "Logging in..." : "Log in"}
        </button>
      </form>
      {showCelebration && (
        <div className="Celebration">
          <span role="img" aria-label="Celebration">
            🎉
          </span>
          <p>Login successful! Redirecting to dashboard...</p>
        </div>
      )}
    </div>
  );
}

export default Login;
