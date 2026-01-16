import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const user = JSON.parse(localStorage.getItem("user"));

    setTimeout(() => {
      if (user && user.email === email && user.password === password) {
        localStorage.setItem("auth", "true");
        navigate("/");
      } else {
        alert("Invalid credentials");
        setLoading(false);
      }
    }, 800); // smooth effect
  };

  return (
    <div className="login-page">
      <h1>LOGIN</h1>

      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className={`login-btn ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "LOGGING IN..." : "LOGIN"}
        </button>
      </form>

      <p>
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
