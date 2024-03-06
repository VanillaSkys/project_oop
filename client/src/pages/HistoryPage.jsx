import { Link } from "react-router-dom";
function HistoryPage()
{
	return (
		<div className="bg-gray-100 h-screen">
			<div className="flex justify-between items-between">
				<div>
					<Link to="/" className="text-center">
						{/* <img src="../../public/assets/image/left-arrow.png" className="object-contain" height={"10%"} width={"10%"} alt="" /> */}
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-10 h-10">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
						</svg>

					</Link>
				</div>
				<div className="gap-5">
					<p className="text-lg text-center mt-2">ประวัติแคช</p>
					<div className="flex flex-row gap-5 mt-5">
						<div>
							<Link><p className="border-b-2 border-black">History Coin</p></Link>
						</div>
						<div>
							<Link><p className="border-b-2 border-black">History Chapter</p></Link>
						</div>
					</div>
					<div className="flex flex-row w-[650px] items-center text-center rounded-md bg-white mt-5">
						<div className="">
							<p>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="stroke-gray-100 fill-yellow-500 w-14 h-14">
									<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
								</svg>
							</p>
						</div>
						<div>
							<p className="ml-5 text-4xl">1,000,000</p>
						</div>
						<div className="ml-10">
							<button className="bg-amber-500 text-white rounded-md mr-2 w-[45px]">เติม</button>
						</div>
					</div>
					<div className="flex flex-row mt-2 rounded-md bg-white items-center ">
						<div>
							<p className="ml-2 text-amber-500">แคชที่เติม </p>
						</div>
						<div>
							<p className="ml-2 text-amber-500">0</p>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}
export default HistoryPage