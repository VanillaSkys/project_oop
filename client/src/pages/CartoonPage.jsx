import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SpringModal from "../components/BuyChapter";

function CartoonPage() {
  const { cartoon } = useParams();
  const [dataCartoon, setDataCartoon] = useState({});
  const [chapter, setChapter] = useState([])
  const [userData, setUserData] = useState([])
  async function GetData() {
    const res = await axios.get(`/api/get_cartoon?cartoon=${cartoon}`);
    const data = await res.data;
    setDataCartoon(data);
	if (data.all_chapter.length > 0) {
		setChapter(data.all_chapter)
	}
  }

  const fetchUserData = async() => {
		const res = await axios.get(`/api/get_user?username=${localStorage.getItem('user')}`)
		setUserData(res.data)
	}
  useEffect(() => {
    GetData();
    if (localStorage.getItem('user')) {
			fetchUserData()
		}
  }, []);
  // console.log(chapter)
  const [isOpen, setIsOpen] = useState(false);

  function check(chapter_number){
    return userData?.transaction_chapter?.some(val => val?.chapter_number === chapter_number)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <img
        src={`/api/static/${dataCartoon?.image_background}`}
        alt=""
        width={"100%"}
      />
      <div className="grid gap-4 place-content-evenly absolute justify-center">
        <div className="w-[630px] flex flex-col justify-center items-center gap-2">
          <div className="w-[450px] ">
            <img
              src={`/api/static/${dataCartoon?.image_cartoon}`}
              alt=""
              style={{ borderBottomWidth: "1px", borderBottomColor: "#5F009E" }}
              className="object-contain w-fit mx-auto"
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-center text-white">
              {dataCartoon?.name_cartoon}
            </h1>
            <p className="text-gray-500 text-center">{dataCartoon?.author}</p>
          </div>
          <div className="w-[608px]">
            <button
              className="btn w-full btn-block btn-sm mt-5 rounded-md p-1"
              style={{ backgroundColor: "#362863" }}
            >
              <p className="loading loading-spinner text-1xl text-white">
                อ่านต่อ
              </p>
            </button>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {
			chapter
      ?.slice()
      .reverse()
      .map((value, key) => {
              return (
                <div key={key}>
                  {
                    value.coin === 0 ?
                  <Link to={`/cartoon/${cartoon}/${value.number_chapter}_${chapter.length}`}>
                    <img
                      src={`/api/static/${value?.image_chapter[0]}`}
                      className="object-cover rounded-md w-[118px] h-20"
                    />
                    <p className="text-center text-white text-1xl mt-2">
                      ตอนที่ {value?.number_chapter}
                    </p>
                  </Link>
                  : 
                  ( !localStorage.getItem('user') ?
                    <Link to={`/login`}>
                    <div className="bg-white opacity-50 w-[118px] absolute rounded-md h-[80px]">
                        <img src="../../public/assets/image/lock.png" className="absolute overflow-hidden rounded-md text-center ml-7 mt-2" height={"50%"}  width={"50%"}/>
                      </div>
                    <img
                    // onCl
                      src={`/api/static/${value?.image_chapter[0]}`}
                      className="object-cover rounded-md w-[118px] h-20"
                    />
                    <p className="text-center text-white text-1xl mt-2">
                      ตอนที่ {value?.number_chapter}
                    </p>

                  </Link> 
                 : check(value?.number_chapter) ?
                //  : userData?.transaction_chapter[key]?.chapter_number === value?.number_chapter ?
                  <Link to={`/cartoon/${cartoon}/${value.number_chapter}_${chapter.length}`}>
                  <img
                    src={`/api/static/${value?.image_chapter[0]}`}
                    className="object-cover rounded-md w-[118px] h-20"
                  />
                  <p className="text-center text-white text-1xl mt-2">
                    ตอนที่ {value?.number_chapter} 
                    
                  </p>
                </Link>
                  : 
                    
                    <div>
                      <button  onClick={() => setIsOpen(true)}>
                        <div className="bg-white opacity-50 w-[118px] absolute rounded-md h-[80px]">
                          <img src="../../public/assets/image/lock.png" className="absolute overflow-hidden rounded-md text-center ml-7 mt-2" height={"50%"}  width={"50%"}/>
                        </div>
                        <img src={`/api/static/${value?.image_chapter[0]}`} className="object-cover rounded-md w-[118px] h-20"/>
                        <p className="text-center text-white text-1xl mt-2">
                          ตอนที่ {value?.number_chapter}
                        </p>
                      </button>
                      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} chapter_id={value?.chapter_id} cartoon_id={dataCartoon?.cartoon_id} />
                    </div>
                  
                  )
                  }
                </div>
			)})
			} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartoonPage;
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import SpringModal from "../components/BuyChapter";

// function CartoonPage() {
//   const { cartoon } = useParams();
//   const [dataCartoon, setDataCartoon] = useState({});
//   const [chapter, setChapter] = useState([])
//   const [userData, setUserData] = useState([])
//   async function GetData() {
//     const res = await axios.get(`/api/get_cartoon?cartoon=${cartoon}`);
//     const data = await res.data;
//     setDataCartoon(data);
// 	if (data.all_chapter.length > 0) {
// 		setChapter(data.all_chapter)
// 	}
//   }

//   const fetchUserData = async() => {
// 		const res = await axios.get(`/api/get_user?username=${localStorage.getItem('user')}`)
// 		setUserData(res.data)
// 	}
//   useEffect(() => {
//     GetData();
//     if (localStorage.getItem('user')) {
// 			fetchUserData()
// 		}
//   }, []);
//   // console.log(chapter)
//   const [isOpen, setIsOpen] = useState(false);

//   function check(chapter_number){
//     return userData?.transaction_chapter?.some(val => val?.chapter_number === chapter_number)
//   }

//   return (
//     <div className="h-screen flex items-center justify-center">
//       <img
//         src={`/api/static/${dataCartoon?.image_background}`}
//         alt=""
//         width={"100%"}
//       />
//       <div className="grid gap-4 place-content-evenly absolute justify-center">
//         <div className="w-[630px] flex flex-col justify-center items-center gap-2">
//           <div className="w-[450px] ">
//             <img
//               src={`/api/static/${dataCartoon?.image_cartoon}`}
//               alt=""
//               style={{ borderBottomWidth: "1px", borderBottomColor: "#5F009E" }}
//               className="object-contain w-fit mx-auto"
//             />
//           </div>
//           <div>
//             <h1 className="text-2xl font-semibold text-center text-white">
//               {dataCartoon?.name_cartoon}
//             </h1>
//             <p className="text-gray-500 text-center">{dataCartoon?.author}</p>
//           </div>
//           <div className="w-[608px]">
//             <button
//               className="btn w-full btn-block btn-sm mt-5 rounded-md p-1"
//               style={{ backgroundColor: "#362863" }}
//             >
//               <p className="loading loading-spinner text-1xl text-white">
//                 อ่านต่อ
//               </p>
//             </button>
//           </div>
//           <div className="grid grid-cols-5 gap-1">
//             {
// 			chapter
//       ?.slice()
//       .reverse()
//       .map((value, key) => {
//               return (
//                 <div key={key}>
//                   {
//                     value.coin === 0 ?
//                   <Link to={`/cartoon/${cartoon}/${value.number_chapter}_${chapter.length}`}>
//                     <img
//                       src={`/api/static/${value?.image_chapter[0]}`}
//                       className="object-cover rounded-md w-[118px] h-20"
//                     />
//                     <p className="text-center text-white text-1xl mt-2">
//                       ตอนที่ {value?.number_chapter}
//                     </p>
//                   </Link>
//                   : 
//                   ( !localStorage.getItem('user') ?
//                     <Link to={`/login`}>
//                     <img
//                     // onCl
//                       src={`/api/static/${value?.image_chapter[0]}`}
//                       className="object-cover rounded-md w-[118px] h-20"
//                     />
//                     <p className="text-center text-white text-1xl mt-2">
//                       ตอนที่ {value?.number_chapter} LOCK
                      
//                     </p>
//                   </Link> 
//                  : check(value?.number_chapter) ?
//                 //  : userData?.transaction_chapter[key]?.chapter_number === value?.number_chapter ?
//                   <Link to={`/cartoon/${cartoon}/${value.number_chapter}_${chapter.length}`}>
//                   <img
//                     src={`/api/static/${value?.image_chapter[0]}`}
//                     className="object-cover rounded-md w-[118px] h-20"
//                   />
//                   <p className="text-center text-white text-1xl mt-2">
//                     ตอนที่ {value?.number_chapter} 
                    
//                   </p>
//                 </Link>
//                   : 
                    
//                     <div>
//                        <button  onClick={() => setIsOpen(true)}>
//                         <div className="bg-white opacity-50 w-[118px] absolute rounded-md h-[80px]">
//                           <img src="../../public/assets/image/lock.png" className="absolute overflow-hidden rounded-md text-center ml-7 mt-2" height={"50%"}  width={"50%"}/>
//                         </div>
//                         <img src={`/api/static/${value?.image_chapter[0]}`} className="object-cover rounded-md w-[118px] h-20"/>
//                         <p className="text-center text-white text-1xl mt-2">
//                           ตอนที่ {value?.number_chapter}
//                         </p>
//                       </button>
//                       <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} chapter_id={value?.chapter_id} cartoon_id={dataCartoon?.cartoon_id} />
//                     </div>
                  
//                   )
//                   }
//                 </div>
// 			)})
// 			} 
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartoonPage;
