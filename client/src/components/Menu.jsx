import { Link } from "react-router-dom"

function Menu() {
  return (
    <Link to="/menu" className="fixed right-2 top-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-violet-600 w-10 h-10 mr-2 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

    </Link>
  )
}

export default Menu