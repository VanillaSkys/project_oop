import { useEffect, useState } from "react"
import Menu from "./Menu"
import Search from "./Search"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

function NavBar() {
  const theme = localStorage.getItem("theme")
  const { category } = useParams()
  const [allCategory, setAllCategory] = useState([]);
  async function getAllCategory() {
    const res = await axios.get('/api/get_category')
    const data = await res.data
    setAllCategory(data)
  } 
  useEffect(() => {
    getAllCategory()
  }, [])
  return (
    <div className="fixed w-full" >
        <div className="flex">
            <Search />
            <Menu />
        </div>
        <div className="relative flex flex-col content-center items-center w-[630px] py-2 mx-auto gap-3"  style={{backgroundColor: theme === "dark" ? "#020617" : "#F8FAFC"}}>
            <div className=""  style={{color: theme === 'dark' ? "#c7d2fe" : "#4F46E5"}}>Logo</div>
            <div className="w-full h-0.5 opacity-50" style={{backgroundColor: theme === 'dark' ? "#c7d2fe" : "#4F46E5"}}></div>
            <ul className="flex justify-around w-full">
            <button ><Link to={`/Latest`}  style={{color: theme === 'dark' ? "#c7d2fe" : "#4F46E5"}}>Latest</Link></button>
              {allCategory.map((value) => {
                return( category === value.name ? <button ><Link to={`/${value.name}`} key={value}  style={{color: theme === 'dark' ? "#c7d2fe" : "#4F46E5"}}>{value.name}</Link></button> :<button ><Link to={`/${value.name}`} key={value.name} className="opacity-50 hover:opacity-90 transition duration-200" style={{color: theme === 'dark' ? "#c7d2fe" : "#4F46E5"}}>{value.name}</Link></button>)
              })}
            </ul>
        </div>
    </div>
  )
}

export default NavBar