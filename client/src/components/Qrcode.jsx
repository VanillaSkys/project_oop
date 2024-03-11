import { useContext } from "react";
import { QrcodeContext } from "../pages/PaymentPage";

function Qrcode() {
  const { setPopup, qrcode } = useContext(QrcodeContext);

  return (
    <div className="fixed bg-white h-screen w-screen flex justify-center items-center">
      <div className="">
        <div className=" w-[300px]">
          <img src={`data:image/jpeg;base64,${qrcode}`} className="" />
        </div>
      </div>
    </div>
  );
}

export default Qrcode;
