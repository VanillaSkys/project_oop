import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  async function Submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", {
        username: username,
        password: password,
      });
      const data = await res.data;
      localStorage.setItem("user", data.user);
      location.href = "/Latest";
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError(error.response.data);
      } else {
        setError("Error.");
      }
    }
  }
  return (
    <div className="p-4 h-screen flex items-center justify-center bg-[url(../../public/assets/image/bg.jpg)]">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-5xl font-semibold text-center text-gray-300">
            Login
            <span className="text-blue-500"> cartoon</span>
          </h1>
          <form onSubmit={(e) => Submit(e)}>
            <div className="mt-5">
              <label className="label">
                <span className="text-2xl text-white label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-5 rounded-full mt-4 input input-bordered h-12"
              />
            </div>
            <div className="mt-5">
              <label className="label">
                <span className="text-2xl text-white label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-full pl-5 mt-2 input input-bordered h-12"
              />
            </div>
            <div>{error}</div>
            <div>
              <button className="btn btn-block btn-sm mt-5 w-full rounded p-1 bg-slate-700">
                <span className="loading loading-spinner text-3xl text-white">
                  Login
                </span>
              </button>
            </div>
            <div className="mt-5 text-center">
              <label className="label">
                <span className="text-2xl text-white label-text">
                  Dont have your account?{" "}
                </span>
                <Link
                  to="/register"
                  className="text-2xl text-white hover:text-red-500 label-text  "
                >
                  Register Now{" "}
                </Link>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

{
  /* <div className="grid grid-rows-7">
				<div>Login</div>
				<div>Websiter</div>
				<div>03</div>
				<div>04</div>
				<div>05</div>
				<div>06</div>
				<div>07</div>
			</div> */
}
