import { Link } from "react-router-dom"

function Menu() {
  return (
    <Link to="/menu" className="fixed right-2 top-2">
      <img src="../../public/assets/image/WMenu.PNG" className="w-[36px] h-[36px] object-cover" />
    </Link>
  )
}

export default Menu