import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../login.css";
function LoginPage() {
	// background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
	return (
		<div className="flex justify-center items-center h-screen	" style={{background: 'linear-gradient(to bottom, #020617, #7c3aed, #302b63)'}}>
				<div className="main">
				<input type="checkbox" aria-hidden="true" id="chk" />

				<div className="Signup">
					<form action="">
						<label for="chk" aria-hidden="true">Sign up</label>
						<input type="text" height={"20px"} width={"60%"} className="p-5 mx-auto mt-2" name="username" placeholder="Username" required />
						<input type="password" height={"20px"} width={"60%"} className="p-5 mx-auto mt-2" name="password" placeholder="Password" required />
						<input type="password" height={"20px"} width={"60%"} className="p-5 mx-auto mt-2" name="confirmPassword" placeholder="Confirm Password" required />
						
						<button className="px-6 mx-auto mt-3 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
							Sign Up
						</button>
					</form>
				</div>

				<div className="login">
					<form action="">
						<label for="chk" aria-hidden="true" className="">Login</label>
							<input type="text" name="username" height={"20px"} width={"60%"} className="p-5 mx-auto mt-2" placeholder="Username" required />
							<input type="password" name="password" height={"20px"} width={"60%"} className="p-5 mx-auto mt-2" placeholder="Password" required />
							<button className="mx-auto mt-3 rounded-2xl border-2 hover:bg-violet-600 border-dashed border-black bg-white font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
								Login
							</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;

	// const [username, setUsername] = useState("");
	// const [password, setPassword] = useState("");

	// const [error, setError] = useState("");
	// async function Submit(e) {
	//   e.preventDefault();
	//   try {
	//     const res = await axios.post("/api/login", {
	//       username: username,
	//       password: password,
	//     });
	//     const data = await res.data;
	//     localStorage.setItem("user", data.user);
	//     location.href = "/Latest";
	//   } catch (error) {
	//     if (error.response && error.response.status === 401) {
	//       setError(error.response.data);
	//     } else {
	//       setError("Error.");
	//     }
	//   }
	// }

{/* <div className="p-4 h-screen flex items-center justify-center bg-gray-100">
<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
	<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
		<h1 className="text-5xl font-semibold text-center text-gray-300">
			Login
			<span className="text-blue-500"> cartoon</span>
		</h1>
		<form onSubmit={(e) => Submit(e)}>
			<div className="mt-5">
				<label className="label">
					<span className="text-2xl text-black label-text">Username</span>
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
					<span className="text-2xl text-black label-text">Password</span>
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
					<span className="text-2xl text-black label-text">
						Dont have your account?{" "}
					</span>
					<Link
						to="/register"
						className="text-2xl text-black hover:text-red-500 label-text  "
					>
						Register Now{" "}
					</Link>
				</label>
			</div>
		</form>
	</div>
</div>
</div> */}