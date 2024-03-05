// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

function ChapterPage() {
	// const { cartoon, chapter } = useParams();
	const {state} = useLocation()
	// const { chapter } = state;
	console.log(state)
	return(
		<div className="bg-white w-full flex flex-col items-center justify-center">
			<div className="w-[630px]">
				<img className="object-contain" src="https://ali.xn--s3cx7a.com/B/img/SoloLeveling-1_001.jpg" alt=""></img>
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-1.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-2.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-3.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-4.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-5.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-6.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-7.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-8.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-9.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-10.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-11.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-12.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-13.jpg" alt="" />
				<img className="object-contain" src="https://www.up-manga.com/wp-content/uploads/2024/01/Solo-Leveling-ep1-14.jpg" alt="" />
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