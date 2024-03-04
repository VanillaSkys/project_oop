function Footer()
{
	return (
		<div className="w-full">
			<div className="bg-gray-100	p-2 flex justify-center gap-4">
				<div>
					<button className="rounded-full drop-shadow-md active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 bg-white hover:bg-grat-700">
						<img className="w-[50px] mb-1 mr-1" src="../../public/assets/image/back.png" alt="" />
					</button>
				</div>
				<div className="relative w-32">
					<p className="text-center text-2xl mt-2"> ตอนที่ 1 </p>
				</div>
				<div>
					<button className="rounded-full drop-shadow-md active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 bg-white hover:bg-grat-700">
						<img className="w-[51px] ml-1" src="../../public/assets/image/next.png" alt="" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Footer