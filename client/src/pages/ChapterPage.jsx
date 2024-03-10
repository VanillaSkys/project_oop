import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import SpringModal from "../components/BuyChapter";

function ChapterPage() {
	const { cartoon, chapter } = useParams();
	const startChapter = chapter.split('_')[0]
	const [coinChapter, setCoinChapter] = useState('')
	const [dataChapter, setDataChapter] = useState([])
	// const [userData, setUserData] = useState([])
	const [id, setId] = useState({})
	const [isOpen, setIsOpen] = useState(false);

	async function GetData() {
		const response = await axios.get(`/api/get_user?username=${localStorage.getItem('user')}`)
		// setUserData(response.data.transaction_chapter)
		const res = await axios.get(`/api/get_chapter?cartoon=${cartoon}&chapter=${startChapter}`);
		const data = await res.data;
		const chapterImage = await data.image_chapter
		setCoinChapter(res.data.coin)
		if ((res.data.coin === 0) || (response.data.transaction_chapter?.some(val => val?.chapter_number === startChapter))) {
			setDataChapter(chapterImage);
		} else {
			setIsOpen(true)
			setId({cartoon_id: res.data.cartoon_id, chapter_id: res.data.chapter_id})
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0);
		GetData();
	}, [chapter]);
	const theme = localStorage.getItem("theme")

	return(
		<div className="w-full flex flex-col items-center justify-center"  style={{backgroundColor: theme === "dark" ? "#020617" : "#F8FAFC"}}>
			<SpringModal isOpen={isOpen} setIsOpen={setIsOpen} chapter_id={id.chapter_id} cartoon_id={id.cartoon_id} />
			<div className="w-[630px]">
				{
					dataChapter?.map((value, key) => {
						return <img className="object-contain" src={`/api/static/${value}`} key={key} alt="" />
					})
				}
			</div>
			<Footer coin={coinChapter} />
		</div>
	);
}
export default ChapterPage

{/* 
<div className="col-span-2">
	<img className="absolute object-contain m-auto  w-full h-full m-0" src="https://ali.xn--s3cx7a.com/B/img/SoloLeveling-1_001.jpg" alt=""></img>
	<img className="absolute w-full block max-h-full max-w-full object-contain  inset-0 m-auto pointer-events-none w-full h-full m-0" src="https://ali.xn--s3cx7a.com/B/img/SoloLeveling-1_002.jpg" data-server="Server1" data-ll-status="loaded"/>
</div> 
*/}