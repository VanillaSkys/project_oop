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
					<Link to="/" className="text-center">
						{/* <img src="../../public/assets/image/left-arrow.png" className="object-contain" height={"10%"} width={"10%"} alt="" /> */}
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-10 h-10">
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
					<div className="flex flex-row w-[650px] items-center text-center rounded-md bg-white mt-5">
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
							<button className="bg-amber-500 text-white rounded-md mr-2 w-[45px]">เติม</button>
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
				</div>
				<div></div>
				{
					history === 'coin' ?
					(
						dataCoin.map((value, key) => {
							return (
								<div key={key}>
									<div>{value.transaction_coin_id}</div>
									<div>{value.amount}</div>
									<div>{value.time}</div>
									<div>{value.total_coin}</div>
								</div>
							)
						})
					) :
					(
						dataChapter.map((value, key) => {
							return (
								<div key={key}>
									<div>{value.transaction_chapter_id}</div>
									<div>{value.chapter_id}</div>
									<div>{value.time}</div>
									<div>{value.cartoon_name}</div>
									<div>{value.chapter_number}</div>
									<div>{value.chapter_coin}</div>
								</div>
							)
						})
					)
				}
			</div>
		</div>
	);
}
export default HistoryPage