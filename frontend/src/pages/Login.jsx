import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
  "http://localhost:5000/api/auth/login",
  {
    email,
    password,
  }
);
      alert(response.data.message);
    } catch (error) {
       alert(
      error.response?.data?.message ||
      "Something went wrong"
    );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-4">
          Don't have an account?
          {" "}
          <Link
            to="/Signup"
            className="text-blue-600 font-semibold"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;