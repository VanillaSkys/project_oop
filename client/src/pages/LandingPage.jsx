import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {motion, useMotionValue, useSpring, useTransform} from 'framer-motion'
import React, { useRef, useState, useEffect } from "react";
import { FiMousePointer } from 'react-icons/fi';
import DrawOutlineButton from '../components/DrawOutlineButton';

function handleClick() {

	// document.body.button.zoom = "500%";

	window.location.href='/Latest';
  }

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

function LandingPage() {
		// window.location.href = "/Latest"
	const ref = useRef(null);
	
	const [rotateX, setRotateX] = useState(0);
  	const [rotateY, setRotateY] = useState(0);

	  const handleMouseMove = (e) => {
		if (!ref.current) return;
	
		const rect = ref.current.getBoundingClientRect();
	
		const width = rect.width;
		const height = rect.height;
	
		const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
		const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
	
		const rY = mouseX / width - HALF_ROTATION_RANGE;
		const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
	
		setRotateX(rX);
		setRotateY(rY);
	};

	const handleMouseLeave = () => {
		if (!ref.current) return;
		setRotateX(0);
		setRotateY(0);
	};
	
	return (
		<div className="h-screen bg-gray-200">
			<div className="w-[950px] mx-auto pt-24 px-2 grid grid-cols-4 gap-1">
				<div className="h-[550px] flex items-between justify-between col-span-4">
					<div style={{backgroundColor:'#020617'}} className=' w-full text-center rounded-l-lg drop-shadow-2xl shadow-lg shadow-violet-500'>
						<DrawOutlineButton onClick={handleClick}>Web site</DrawOutlineButton>
					</div>
					<div className='text-center w-[550px] object-cover rounded-r-lg bg-cover bg-center '>
						<motion.div className="relative w-[550px] drop-shadow-2xl shadow-lg shadow-violet-500 rounded-r-xl" ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{backgroundImage:'url(../../public/assets/image/bg-2.jpg)', transformStyle: "preserve-3d",  height:'550px'}} animate={{ rotateX, rotateY, }}>
							<div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d",}}>
								<img src="https://th-a.kakaopagecdn.com/P/C/353/t2/2x/cc4fa235-5cd8-4a43-ae83-7d930e188713.png" className='absolute' alt="" />
								<video style={{width:'650px', height:'608px'}} className='absolute ml-16 inset-4 grid place-content-center'  autoPlay muted loop>
									<source  src=" https://th-a.kakaopagecdn.com/P/C/353/c1a/a124957b-5d43-42b0-ac3c-571844949405.webm" className='w-[400px] mx-auto' type="video/webm" />
								</video>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingPage

								
// https://th-a.kakaopagecdn.com/P/C/353/c1a/a124957b-5d43-42b0-ac3c-571844949405.webm

{/* <Swiper spaceBetween={20} slidesPerView={1} autoplay={{ delay: 1000 }} loop>
	<SwiperSlide className='text-center  object-contain bg-left rounded-r-lg'>

	</SwiperSlide>
	<SwiperSlide style={{backgroundImage:'url(../../public/assets/image/solo/bg-1.jpg)'}} className='text-center w-[550px] object-contain bg-left rounded-r-lg '>
		<img src="https://th-a.kakaopagecdn.com/P/C/48/t2/2x/82c39060-e9e6-400b-8d03-3505e552e172.png" className='absolute drop-shadow-2xl' alt="" />
		<motion.img src="../../public/assets/image/solo/sung-jin-woo.png" className='mt-32 w-[500px] mx-auto' alt="" />
	</SwiperSlide>
</Swiper> */}

// hover:scale-[1000%] hover:transition hover:duration-1000

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


{/* <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 1000 }} loop={true}>
<SwiperSlide>
	<img src="../../public/assets/image/landingPage-1.png" class="absolute object-cover w-[1920px] h-[737px]" />
</SwiperSlide>
<SwiperSlide>
	<img src="../../public/assets/image/landingPage-2.jpg" class="object-cover w-[1920px] h-[737px] ..." />
</SwiperSlide>
</Swiper>	 */}


{/* <div className="flex flex-col itmes-center justify-center">
	<div style={{marginLeft:'68%', marginTop:'30%'}}>
		<Link to="/Lastest"><button className='absolute text-white w-72	 outline p-3'>Web Site</button></Link>
	</div>
</div> */}