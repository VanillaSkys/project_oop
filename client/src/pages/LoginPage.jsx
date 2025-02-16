import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../login.css";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  async function LoginSubmit(e) {
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

  async function RegisterSubmit(e) {
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
    <div
      className="flex justify-center items-center h-screen	"
      style={{
        background: "linear-gradient(to bottom, #020617, #7c3aed, #302b63)",
      }}
    >
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: "-10%" }}
        transition={{ duration: 0.25 }}
        className="main"
      >
        <input type="checkbox" aria-hidden="true" id="chk" />

        <div className="Signup">
          <form action="">
            <label for="chk" className="label1" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              height={"20px"}
              width={"60%"}
              className="p-5 mx-auto mt-2 input1"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              height={"20px"}
              width={"60%"}
              className="p-5 mx-auto mt-2 input1"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              height={"20px"}
              width={"60%"}
              className="p-5 mx-auto mt-2 input1"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button
              disabled={isSubmitDisabled}
              onClick={(e) => RegisterSubmit(e)}
              className="px-6 button1 mx-auto mt-3 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="login">
          <form action="">
            <label for="chk" className="label1" aria-hidden="true">
              Login
            </label>
            <input
              type="text"
              name="username"
              height={"20px"}
              width={"60%"}
              className="p-5 input1 mx-auto mt-2"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              height={"20px"}
              width={"60%"}
              className="p-5 input1 mx-auto mt-2"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              onClick={(e) => LoginSubmit(e)}
              className="mx-auto mt-3 rounded-2xl border-2 button1 hover:bg-violet-600 border-dashed border-black bg-white font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              Login
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage;
