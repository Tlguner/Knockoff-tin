import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle authentication logic here
    navigate("/home");
  };

  return (
    <div className="grid grid-cols-2 place-items-center min-h-screen bg-pink-400">
      <div className="col-span-1 px-10">
        <img src="" alt="" />
        <h1 className="text-6xl font-bold text-white">Hello, Friend!</h1>
        <p className="text-white">
          Enter your personal details and start journey with us
        </p>
      </div>
      <div className="col-span-1">
        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          <input
            type="Email"
            placeholder="Email"
            className="px-4 py-1 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-1 rounded-lg"
          />
          <button
            type="submit"
            className="py-1 bg-violet-500 hover:shadow-2xl rounded-lg"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
