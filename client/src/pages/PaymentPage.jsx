function PaymentPage()
{
    return(
        <div className="h-screen">
            {/* navbar */}
            <div className="flex justify-between items-center gap-5">
                <div>
					
                </div>
                <div>
                    <p className="text-xl">เติมแคช</p>
                </div>
				<div className="">
                    <button >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
				</div>
			</div>
            {/* second */}
            <div className="flex justify-between items-between">
                <div></div>
                <div className="w-[650px] flex justify-between items-between">
                    <div className="" >
                        <div>
                            <p className="text-base mt-5">แคชที่มี</p>
                        </div>
                        <div>
                            <p className="text-5xl mt-14 text-gray-500">เติม<b className="text-amber-500">แคช</b ></p>
                        </div>
                        <div className="mt-5">
                         <div>
                             <input type="radio" className="" name="cash" id="" />
                             <b className="ml-2 text-base">2,360 แคช</b>
                         </div>
                         <div className="mt-5">
                             <input type="radio" className="" name="cash" id="" />
                             <b className="ml-2 text-base">4,760 แคช</b>
                         </div>
                         <div className="mt-5">
                             <input type="radio" className="" name="cash" id="" />
                             <b className="ml-2 text-base">7,960 แคช</b>
                         </div>
                         <div className="mt-5">
                             <input type="radio" className="" name="cash" id="" />
                             <b className="ml-2 text-base">13,160 แคช</b>
                         </div>
                         <div className="mt-5">
                             <input type="radio" className="" name="cash" id="" />
                             <b className="ml-2 text-base">19,960 แคช</b>
                         </div>
                         <div className="mt-5">
                             <input type="radio" className="" name="cash" id="" />
                             <b className="ml-2 text-base">40,000 แคช</b>
                         </div>
                         <div className="mt-5">
                             <input type="radio" className="" name="cash" id="" />
                             <b className="ml-2 text-base">84,000 แคช</b>
                         </div>
                     </div>
                    </div>
                    <div>
                   
                    </div>
                    <div className="">
                        <div>
                            <p className="text-base mt-5 text-center">0 แคช</p>
                        </div>
                        <div>
                            <p className="text-5xl mt-14 text-white">เติม<b className="text-white">แคช</b ></p>
                        </div>
                        <div  className="mt-5 text-center">
                         <p className="text-amber-500 text-base">฿ 59</p>
                         <p className="text-amber-500 text-base mt-5">฿ 119</p>
                         <p className="text-amber-500 text-base mt-5">฿ 199</p>
                         <p className="text-amber-500 text-base mt-5">฿ 329</p>
                         <p className="text-amber-500 text-base mt-5">฿ 499</p>
                         <p className="text-amber-500 text-base mt-5">฿ 1,000</p>
                         <p className="text-amber-500 text-base mt-5">฿ 2,100</p>
                         <button className="text-white bg-black w-60 p-1 mt-3 rounded">ถัดไป</button>
                     </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
 );
}

export default PaymentPage

// <div className="w-[650px] border-t-2 border-gray-200 h-screen flex justify-between">
//                     <div className="mt-5">
//                         <div>
//                             <input type="radio" className="" name="" id="" />
//                             <b className="ml-2 text-base">2,360 แคช</b>
//                         </div>
//                         <div className="mt-5">
//                             <input type="radio" className="" name="" id="" />
//                             <b className="ml-2 text-base">4,760 แคช</b>
//                         </div>
//                         <div className="mt-5">
//                             <input type="radio" className="" name="" id="" />
//                             <b className="ml-2 text-base">7,960 แคช</b>
//                         </div>
//                         <div className="mt-5">
//                             <input type="radio" className="" name="" id="" />
//                             <b className="ml-2 text-base">13,160 แคช</b>
//                         </div>
//                         <div className="mt-5">
//                             <input type="radio" className="" name="" id="" />
//                             <b className="ml-2 text-base">19,960 แคช</b>
//                         </div>
//                         <div className="mt-5">
//                             <input type="radio" className="" name="" id="" />
//                             <b className="ml-2 text-base">40,000 แคช</b>
//                         </div>
//                         <div className="mt-5">
//                             <input type="radio" className="" name="" id="" />
//                             <b className="ml-2 text-base">84,000 แคช</b>
//                         </div>
//                     </div>
//                     <div>
                        
//                     </div>
//                     <div  className="mt-5">
//                         <p className="text-amber-500 text-base">฿ 59</p>
//                         <p className="text-amber-500 text-base mt-5">฿ 119</p>
//                         <p className="text-amber-500 text-base mt-5">฿ 199</p>
//                         <p className="text-amber-500 text-base mt-5">฿ 329</p>
//                         <p className="text-amber-500 text-base mt-5">฿ 499</p>
//                         <p className="text-amber-500 text-base mt-5">฿ 1,000</p>
//                         <p className="text-amber-500 text-base mt-5">฿ 2,100</p>
//                     </div>
//                 </div>