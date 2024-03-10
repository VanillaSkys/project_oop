import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function HistoryPage() {
	const {history} = useParams()
	const [ dataCoin, setDataCoin ] = useState([])
	const [ dataChapter, setDataChapter ] = useState([])
	const [allMoney, setAllMoney] = useState(0)
	const [allCoin, setAllCoin] = useState(0)
	const fetchUserData = async() => {
		const res = await axios.get(`/api/get_user?username=${localStorage.getItem('user')}`)
		const data = await res.data
		setDataChapter(data.transaction_chapter)
		setDataCoin(data.transaction_coin)
		if (data.transaction_coin.length > 0){
			setAllMoney(data.transaction_coin.reduce((sum , num) => {
				return ( sum + num.amount )
			}, 0))
			
		}
		if (data.transaction_coin.length > 0){
			setAllCoin(data.transaction_coin.reduce((sum , num) => {
				return (sum + num.total_coin)
			}, 0))
			
		}
	}
	useEffect(() => {
		fetchUserData()
	}, [])
	// console.log(history === 'coin' ? dataCoin : dataChapter) //ตัวอย่างข้อมูล
	return (
		<div className="bg-gray-100 h-screen">
			<div className="flex justify-between items-between">
				<div>
					<Link to="/menu" className="text-center">
						{/* <img src="../../public/assets/image/left-arrow.png" className="object-contain" height={"10%"} width={"10%"} alt="" /> */}
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="stroke-violet-600 ml-4 mt-2 w-10 h-10">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
						</svg>

					</Link>
				</div>
				<div className="gap-5">
					<p className="text-lg text-center mt-2">ประวัติแคช</p>
					<div className="flex flex-row gap-5 mt-5">
						<div>
							<Link to='/history/coin'><p className="border-b-2 border-black">History Coin</p></Link>
						</div>
						<div>
							<Link to='/history/chapter'><p className="border-b-2 border-black">History Chapter</p></Link>
						</div>
					</div>
					<div className="flex flex-row w-[700px] items-center text-center rounded-md bg-white mt-5">
						<div className="">
							<p>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="stroke-gray-100 fill-yellow-500 w-14 h-14">
									<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
								</svg>
							</p>
						</div>
						<div>
							<p className="ml-5 text-4xl">{allMoney}</p>
						</div>
						<div className="ml-10">
							<Link to="/payment"><button className="bg-amber-500 text-white rounded-md mr-2 w-[45px]">เติม</button></Link>
						</div>
					</div>
					<div className="flex flex-row mt-2 rounded-md bg-white items-center ">
						<div>
							<p className="ml-2 text-amber-500">แคชที่เติม </p>
						</div>
						<div>
							<p className="ml-2 text-amber-500">{allCoin}</p>
						</div>
					</div>
					<div className="mt-2">
					{
						history === 'coin' ?
						(
							dataCoin.map((value, key) => {
								return (
									<div>
										<p className="text-xl ml-4 mb-2">ประวัติการซื้อเหรียญ</p>
										<table className="bg-amber-100 mx-auto">
											<thead>
												<th className="border border-slate-600 p-2">รหัสการซื้อ</th>
												<th className="border border-slate-600 p-2">ราคา</th>
												<th className="border border-slate-600 p-2">วัน / เวลา</th>
												<th className="border border-slate-600 p-2">เหรียญ</th>
											</thead>
											<tbody className="text-center" key={key}>
												<tr className="bg-white hover:bg-gray-200">
													<td class="border border-slate-700 p-2 ">{value.transaction_coin_id}</td>
													<td class="border border-slate-700 p-2">{value.amount}</td>
													<td class="border border-slate-700 p-2">{value.time}</td>
													<td class="border border-slate-700 p-2">{value.total_coin}</td>
												</tr>
											</tbody>
										</table>
									</div>
								)
							})
						) :
						(
							dataChapter.map((value, key) => {
								return (
								<div>
									<p className="text-xl ml-4 mb-2">ประวัติการซื้อเหรียญ</p>
									<table className="bg-amber-100 mx-auto">
										<thead>
											<th className="border border-slate-600 p-2">รหัสการซื้อ</th>
											<th className="border border-slate-600 p-2">รหัสตอน</th>
											<th className="border border-slate-600 p-2">วัน / เวลา</th>
											<th className="border border-slate-600 p-2">ชื่อการ์ตูน</th>
											<th className="border border-slate-600 p-2">ตอน</th>
											<th className="border border-slate-600 p-2">เหรียญ</th>
										</thead>
										<tbody className="text-center" key={key}>
											<tr className="bg-white hover:bg-gray-200">
												<td class="border border-slate-700 p-2 ">{value.transaction_chapter_id}</td>
												<td class="border border-slate-700 p-2 ">{value.chapter_id}</td>
												<td class="border border-slate-700 p-2">{value.time}</td>
												<td class="border border-slate-700 p-2 ">{value.cartoon_name}</td>
												<td class="border border-slate-700 p-2 ">{value.chapter_number}</td>
												<td class="border border-slate-700 p-2 ">{value.chapter_coin}</td>
											</tr>
										</tbody>
									</table>
								</div>
								)
							})
						)
					}
					</div>
				</div>
				
				<div></div>
					
			</div>
		</div>
	);
}
export default HistoryPage
