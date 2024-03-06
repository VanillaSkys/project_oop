import { Link } from "react-router-dom";
import ToggleButton from "../components/ToggleButton";
import axios from "axios";

function MenuPage() {
	async function logout() {
		try{
			await axios.post('/api/logout', {username: localStorage.getItem('user')})
			localStorage.removeItem('user')
			location.reload(false)
		} catch (error) {
			console.log(error.response)
		}
	}
	return (
		<div className="h-screen bg-gray-100">
			<div className="flex justify-between">
				<Link to="/" className="">
					{/* <img src="../../public/assets/image/left-arrow.png" className="object-contain" height={"10%"} width={"10%"} alt="" /> */}
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-10 h-10">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
					</svg>

				</Link>
				<div className="">
						{!localStorage.getItem("user") ? (
							<Link to="/login">
							 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 w-10 h-10">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
							</svg>
						</Link>
						) : (
							<button onClick={() => logout()}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-10 h-10">
									<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
								</svg>
							</button>
						)}
					</div>
			</div>
			<div className="flex justify-center items-center">
				<div className="w-[630px] flex flex-col justify-center items-center gap-2">
						<div>{localStorage.getItem('user')}</div>
							<div>
								{!localStorage.getItem("user") ? (
									null
								) : (
									"coin"
								)}
							</div>
						<div className="flex items-center justify-center mx-auto">
							<p>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="stroke-gray-100 fill-yellow-500 w-9 h-9">
									<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
							</svg>
							</p>
							<p className="text-3xl">Term Coin </p>
						</div>
						<div className="w-full flex justify-center items-center">
							<button className="w-full text-center p-1 bg-white rounded">
									<p className="text-xl text-black">เติมแคช</p>
							</button>
						</div>
						<div className="w-full flex justify-between gap-2 items-center">
							<button className="w-full text-center bg-white rounded"><p className=" text-black">History Coin</p></button>
							<button className="w-full text-center bg-white rounded"><p className=" text-black">History Chapter</p></button>
						</div>
						<ToggleButton />
				</div>
			</div>
		</div>
	);
}

export default MenuPage;
