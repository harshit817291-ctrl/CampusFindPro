
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  async function login() {
    await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });
    nav("/dashboard");
  }

  return (
    <div>
      <h1>CampusFind Login</h1>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
