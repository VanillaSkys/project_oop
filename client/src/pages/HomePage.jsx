// import { useContext } from "react";
import { useCallback, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
// import { ThemeContext } from "../App";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const { category } = useParams()
  const [allCartoon, setAllCartoon] = useState([]);
  // const {theme} = useContext(ThemeContext)
  const theme = localStorage.getItem("theme")
  
  const getAllCartoon = useCallback(async () => {
    const res = await axios.get('/api/all_cartoon');
    const data = await res.data;
    setAllCartoon(data);
  }, []); // No dependencies as this function doesn't depend on any external variables

  const getAllCartoonCategory = useCallback(async () => {
    const res = await axios.get(`/api/all_cartoon_category?category=${category}`);
    const data = await res.data;
    setAllCartoon(data);
  }, [category]); // Depends on category to fetch data for the correct category

  useEffect(() => {
    if (category === "Latest") {
      getAllCartoon();
    } else {
      getAllCartoonCategory();
    }
  }, [category, getAllCartoon, getAllCartoonCategory]); // Include getAllCartoon and getAllCartoonCategory in the dependency array

  return (
    <div className="w-full " style={{backgroundColor: theme === "dark" ? "#020617" : "#F8FAFC"}}>
      <NavBar/>
        <div>
          <div className="w-[630px] mx-auto pt-24 px-2 grid grid-cols-4 gap-1" >
            <div className="h-[444px] col-span-4">
              <img src="../../public/assets/image/Banner.PNG" className="rounded-xl object-cover h-full w-full" />
            </div>
            {
              allCartoon.map((value, key) => {
                return <Link key={key} to={`/cartoon/${value.name}`}><img src={`/api/static/${value.image_main}`} className="rounded-xl  object-cover h-full w-full" /></Link>
              })
            }
          </div>
      </div>
        
        
    </div>
  );
}

export default HomePage;