import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
function LandingPage() {
		// window.location.href = "/Latest"
	return (
		<div className="h-screen bg-gray-100">
			<Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 1000 }} loop={true}>
				<SwiperSlide>
					<img src="../../public/assets/image/landingPage-1.png" class="absolute object-cover w-[1920px] h-[737px]" />
					<div className="flex flex-col itmes-center justify-center">
						<div style={{marginLeft:'68%', marginTop:'30%'}}>
							<Link to="/Lastest"><button className='absolute text-white w-72	 outline p-3'>Web Site</button></Link>
						</div>
					</div>
					{/* <div>
						<p className='absolute text-white indent-8'>
													10 ปีก่อน 'เกต' ที่พาทะลุสู่อีกมิติหนึ่งได้เปิดขึ้น ภายในเกตมีมอนสเตอร์ตัวร้ายที่เหล่าผู้คนที่ถูกปลุกพลังจะต้องกำราบ 
							คนเหล่านั้นได้รับการขนานนามว่า 'ฮันเตอร์' แต่ทว่า ไม่ใช่ฮันเตอร์ทุกคนที่จะแข็งแกร่ง
							ซองจินอู ผู้ได้รับฉายาว่าเป็นอาวุธที่กากที่สุดในมวลมนุษยชาติ คือฮันเตอร์แรงค์ E ที่แม้กระทั่งในดันเจี้ยนแรงค์ต่ำๆ ชีวิตเขาก็ยังแขวนบนเส้นด้าย
							แต่หลังจากที่ได้เข้าไปในดับเบิลดันเจี้ยนและรอดชีวิตกลับมา เขาก็เปลี่ยนไป
							จากฮันเตอร์ที่กากที่สุด เขาจะกลายเป็นผู้ที่แกร่งที่สุด!
						</p>
					</div> */}
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../public/assets/image/landingPage-2.jpg" class="object-cover w-[1920px] h-[737px] ..." />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default LandingPage


// <motion.div animate={{ x: [null, 100, 0] }} style={{height:'500px'}}>
// <img src="https://th-a.kakaopagecdn.com/P/C/769/bg/2x/ff164223-7e06-4a42-8217-08c175e956e0.jpg" className='absolute rounded-lg object-contain'/>
// {/* <img src="../../public/assets/image/Solo-Leveling-ep1-2.jpg" className='w-20 h-20' alt="" /> */}
//   <img src="../../public/assets/image/timeerverse.png" className='absolute' alt="" />
// <video className='absolute ml-24' style={{width:'450px' ,height:'650px'}} controls autoPlay>
//   <source src="https://th-a.kakaopagecdn.com/P/C/769/c1a/b7b52d87-e241-4172-8e64-0e2f90c54abb.webm" type="video/webm" />
// </video>
// <div className=''>
//   <Link to="/Lastest"><button className='absolute w-34 p-2 text-3xl rounded-md mt-28 ml-a outline hover:bg-amber-200 text-white '>Web site</button></Link> 
// </div>

// </motion.div >
