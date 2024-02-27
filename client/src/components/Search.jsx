import { Link } from "react-router-dom"

function Search() {
  return (
    <Link to='/search' className="fixed left-2 top-2"><img src="../../public/assets/image/WSearch.PNG" className="w-[36px] h-[36px] object-cover" /></Link>
  )
}

export default Search