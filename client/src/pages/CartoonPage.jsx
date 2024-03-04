import { Link } from "react-router-dom";
function CartoonPage()
{
	return (
		<div className="h-screen flex items-center justify-center">
			<img src="https://th-a.kakaopagecdn.com/P/C/48/bg/2x/2d678b69-787d-4a80-a854-32ed5d4f630f.jpg" alt="" width={"100%"} />
			<div class="grid gap-4 place-content-evenly absolute justify-center">
				<div className="w-[630px] flex flex-col justify-center items-center gap-2">
					<div className="w-[450px] ">
						<img src="https://th-a.kakaopagecdn.com/P/C/48/c1/2x/12894781-3bf1-4744-9116-a672823c1db3.png" alt=""style={{borderBottomWidth:'1px', borderBottomColor:'#5F009E'}} className="object-contain" />
					</div>            
					<div>
						<h1 className="text-2xl font-semibold text-center text-white">Solo Leveling</h1>
						<p className="text-gray-500 text-center">h-goon 2018, DISCIPLES(REDICE STUDIO), Chugong</p>
					</div>
					<div className="w-[608px]">
						<button className="btn w-full btn-block btn-sm mt-5 rounded-md p-1" style={{backgroundColor:"#362863"}}>
							<p className="loading loading-spinner text-1xl text-white">
								อ่านต่อ
							</p>
						</button>
					</div>
					<div className="grid grid-flow-col gap-1">
						<div><Link to="/chapter">
							<img src="https://th-a.kakaopagecdn.com/P/EO/48/39571/tn/2x/a1013d70-cbbc-4d39-ac0e-c03a89babca2.jpg" className="object-cover rounded-md w-[118px]" />
							<p className="text-center text-white text-1xl mt-2">ตอนที่ 1</p></Link>
						</div>
						<div>
							<img src="https://th-a.kakaopagecdn.com/P/EO/48/36654/tn/2x/8f212de0-9bf7-43d0-94b2-0a72581d9ac2.jpg" className="object-cover rounded-md w-[118px]" />
							<p className="text-center text-white text-1xl mt-2">ตอนที่ 2</p>
						</div>
						<div>
							<img src="https://th-a.kakaopagecdn.com/P/EO/48/36653/tn/2x/c0fdaacf-4dfe-462e-acb2-113655fb8e7b.jpg" className="object-cover rounded-md w-[118px]" />
							<p className="text-center text-white text-1xl mt-2">ตอนที่ 3</p>
						</div>
						<div>
							<img src="https://th-a.kakaopagecdn.com/P/EO/48/36652/tn/2x/35907da9-d6e5-4006-8b4f-980045753ba4.jpg" className="object-cover rounded-md w-[118px]" />
							<p className="text-center text-white text-1xl mt-2">ตอนที่ 4</p>
						</div>
						<div>
							<img src="https://th-a.kakaopagecdn.com/P/EO/48/36651/tn/2x/c3cfdef9-0489-48ab-a274-3fa1b10ccc6a.jpg" className="object-cover rounded-md w-[118px]" />
							<p className="text-center text-white text-1xl mt-2">ตอนที่ 5</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartoonPage