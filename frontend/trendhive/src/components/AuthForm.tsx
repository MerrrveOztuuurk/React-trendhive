import React, { useState, type FormEvent } from "react";

interface AuthFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
  loading: boolean;
  error: string | null;
  isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, loading, error, isLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>{isLogin ? "Login" : "Register"}</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" disabled={loading} style={styles.button}>
          {isLogin ? "Login" : "Register"}
        </button>

        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    // background: "linear-gradient(135deg, #74ABE2, #5563DE)", 
  },
  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "320px",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "24px",
    color: "#333",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "all 0.3s ease",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#5563DE",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: "10px",
    fontSize: "14px",
  },
};



export default AuthForm;
