import React from "react";
import Login from "../components/LoginForm";

function LoginSite() {
  const login = async (email, password) => {
    // Call the API to log in with the email and password and return the access token and refresh token
    const response = await fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Invalid email or password");
    }

    const { access_token, refresh_token } = await response.json();
    return { access_token, refresh_token };
  };

  return (
    <div className="App">
      <Login login={login} />
    </div>
  );
}

export default LoginSite;
