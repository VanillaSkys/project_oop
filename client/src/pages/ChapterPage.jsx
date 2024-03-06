import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function ChapterPage() {
	const { cartoon, chapter } = useParams();
	const startChapter = chapter.split('_')[0]

	const [dataChapter, setDataChapter] = useState([])
	async function GetData() {
		const res = await axios.get(`/api/get_chapter?cartoon=${cartoon}&chapter=${startChapter}`);
		const data = await res.data;
		const chapterImage = await data.image_chapter
		setDataChapter(chapterImage);
	}
	useEffect(() => {
		window.scrollTo(0, 0);
		GetData();
	}, [chapter]);
	return(
		<div className="bg-white w-full flex flex-col items-center justify-center">
			<div className="w-[630px]">
				{
					dataChapter?.map((value, key) => {
						return <img className="object-contain" src={`/api/static/${value}`} key={key} alt="" />
					})
				}
			</div>
			<Footer />
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