// import { useContext } from "react";
import NavBar from "../components/NavBar";
// import { ThemeContext } from "../App";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage() {
  const data = ["cartoon", "cartoon","cartoon","cartoon", "cartoon","cartoon","cartoon", "cartoon"]
  const { category } = useParams()
  // const {theme} = useContext(ThemeContext)
  const theme = localStorage.getItem("theme")

  return (
    <div className="w-full " style={{backgroundColor: theme === "dark" ? "#020617" : "#F8FAFC"}}>
      <NavBar/>
        {
          category === "Latest" ?
        <div>
          <div className="w-[630px] mx-auto pt-24 px-2 grid grid-cols-4 gap-1" >
            <div className="h-[444px] col-span-4">
              <img src="../../public/assets/image/Banner.PNG" className="rounded-xl object-cover h-full w-full" />
            </div>
            {
              data.map((value, key) => {
                return <div key={key} className="" ><Link to="/cartoon"><img src="../../public/assets/image/Cartoon.PNG" className="rounded-xl  object-cover h-full w-full" /></Link></div>
              })
            }
          </div>
      </div>
        :
        <div className="w-[630px] mx-auto pt-24 px-2 grid grid-cols-4 gap-1" >
          <div className="h-[444px] col-span-4">
            <img src="../../public/assets/image/ActionBanner.PNG" className="rounded-xl object-cover h-full w-full" />
          </div>
          {
            data.map((value, key) => {
              return <div key={key} className="" ><Link to="/cartoon"><img src="../../public/assets/image/ActionCartoon.PNG" className="rounded-xl  object-cover h-full w-full" /></Link></div>
            })
          }
        </div>
        }
        
    </div>
  );
}

export default HomePage;