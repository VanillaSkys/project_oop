import { createContext, useState } from "react";
import Qrcode from "../components/Qrcode";
import axios from "axios";
import { Link } from "react-router-dom";

const QrcodeContext = createContext()

function PaymentPage() {
  const [coin, setCoin] = useState(0);
  const [money, setMoney] = useState(0);
  const coin_list = [2360, 4760, 7960, 13160, 19960, 40000, 84000];
  const money_lis = [59, 119, 199, 329, 499, 1000, 2100];
  const [popup, setPopup] = useState(false)
  const [qrcode, setQrcode] = useState('')
  async function fetchQrcode() {
    const res = await axios.post('/api/buy_coin', {
        username: localStorage.getItem('user'),
        total_coin: coin,
        amount: money
    })
    setQrcode(res.data.image)

    }
  return (
    <QrcodeContext.Provider className="h-screen" value={{setPopup, qrcode}}>
      {/* navbar */}
      <div className="flex justify-between items-center gap-5">
        <div></div>
        <div>
          <p className="text-xl">เติมแคช</p>
        </div>
        <div className="">
          <Link to="/menu">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2 w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      {/* second */}
      <div className="flex justify-between items-between">
        <div></div>
        <div className="w-[650px] flex justify-between items-between">
          <div className="">
            <div>
              <p className="text-5xl mt-14 text-gray-500">
                เติม<b className="text-amber-500">แคช</b>
              </p>
            </div>
            {coin_list.map((val, key) => {
              return (
                <div className="mt-5" key={key}>
                  <div>
                    <input
                      type="radio"
                      className=""
                      name="cash"
                      id=""
                      onChange={() => {setCoin(val);setMoney(money_lis[key])}}
                    />
                    <b className="ml-2 text-base">{val} แคช</b>
                  </div>
                </div>
              );
            })}
          </div>
          <div></div>
          <div className="">
            {/* <div>
              <p className="text-base mt-5 text-center">0 แคช</p>
            </div>
            <div>
              <p className="text-5xl mt-14 text-white">
                เติม<b className="text-white">แคช</b>
              </p>
            </div> */}
            <div className="text-center" style={{marginTop:'120px'}}>
                {
                    money_lis.map((val, key) => {
                        return <p key={key} className="text-amber-500 text-base mt-5">฿ {val}</p>
                    })
                }
              <button className="text-white bg-black w-60 p-1 mt-3 rounded" onClick={() => {setPopup(true); fetchQrcode()}}>
                ถัดไป
              </button>
            </div>
          </div>
        </div>
        <div></div>
          {
              popup ?
              <Qrcode />
              :
              null
          }

      </div>
    </QrcodeContext.Provider>
  );
}

export {QrcodeContext}

export default PaymentPage;

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

