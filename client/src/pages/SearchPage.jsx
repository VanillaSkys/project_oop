import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function SearchPage() {
    return(
        <div  className='mt-5 flex justify-center'>
            <div>
                <input type="text" className='rounded-lg p-2 w-[550px]' style={{backgroundColor:'#e0dede'}} maxLength={"50"} placeholder='กรุณาใส่ชื่อผลงาน ชื่อนักเขียน หรือประเภท'/>

            </div>
            <div>
               <Link to="/Latest">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 mt-1 w-9 h-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
               </Link>
            </div>
        </div>
    )
}

export default SearchPage