import { useState } from "react";
import axios from "axios";
function RegistPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  async function Submit(e) {
    e.preventDefault();
    try {
      await axios.post("/api/register", {
        username: username,
        password: password,
      });
      location.href = "/login";
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError(error.response.data);
      } else {
        setError("Error.");
      }
    }
  }

  const isSubmitDisabled = password !== confirmPassword;
  return (
    <div className="p-4 h-screen flex items-center justify-center bg-[url(image/bg.jpg)]">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-5xl font-semibold text-center text-gray-300">
            Register
            <span className="text-blue-500"> Account</span>
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
                className="rounded-md w-full mt-4 pl-5 input input-bordered h-12"
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
                className="w-full rounded-md mt-4 pl-5 input input-bordered h-10"
              />
            </div>
            <div className="mt-5">
              <label className="label">
                <span className="text-2xl text-white label-text">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-md pl-5 mt-4 input input-bordered h-10"
              />
            </div>
            <div>{error}</div>
            <div>
              <button
                type="submit"
                className="btn btn-block btn-sm mt-5 w-full p-2 "
                style={{ background: isSubmitDisabled ? "gray" : "black" }}
                disabled={isSubmitDisabled}
              >
                <span className="loading loading-spinner text-3xl text-white">
                  Register
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistPage;
