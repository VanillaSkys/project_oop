import { useContext } from "react"
import { QrcodeContext } from "../pages/PaymentPage"

function Qrcode() {
    const {setPopup, qrcode} = useContext(QrcodeContext)
    
  return (
    <div>
        
        <img src={`data:image/jpeg;base64,${qrcode}`} />
        <button onClick={() => setPopup(false)}>ปิด</button>
    </div>
  )
}

export default Qrcode