import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  console.log("johnd");
  console.log("m38rmF$");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setAuth(true);
        navigate("/");
      } else {
        setError("Login yoki parol noto‘g‘ri!");
      }
    } catch (error) {
      setError("Server bilan bog‘lanishda xatolik yuz berdi!");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 text-white border border-gray-700 relative overflow-hidden"
        data-aos="zoom-in"
      >
        <h2 className="text-2xl font-bold text-center mb-6" data-aos="fade-down">
          Login
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative" data-aos="fade-right">
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="relative" data-aos="fade-left">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute bg-transparent top-3 right-4 text-gray-400 hover:text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className={`w-full py-3 text-lg font-bold rounded-lg transition-all ${
              loading
                ? "bg-blue-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500"
            }`}
            disabled={loading}
            data-aos="fade-up"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
      </div>
    </div>
  );
};

export default Login;
