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
  const dataBanner = [{
                        category: "Romance",
                        background: 'url(../../public/assets/image/bg-re.jpg)', 
                        video: "../../public/assets/banners/b-romance.webm", 
                        type: "video/webm" },
                      {
                        category: "Action",
                        background: 'url(../../public/assets/banners/bg-banner-action.jpg)', 
                        video: "../../public/assets/banners/b-action.webm", 
                        type: "video/webm"
                      },
                      {
                        category: "Romance Fantasy",
                        background: 'url(../../public/assets/banners/bg-banner-fantacy.jpg)', 
                        video: "../../public/assets/banners/b-fantacy.webm", 
                        type: "video/webm"
                      },
                      {
                        category: "Drama",
                        background: 'url(../../public/assets/banners/bg-banner-drama.jpg)', 
                        video: "../../public/assets/banners/b-drama.webm", 
                        type: "video/webm"
                      },
                      {
                        category: "Latest",
                        background: 'url(../../public/assets/banners/bg-banner-fantacy.jpg)', 
                        video: "../../public/assets/banners/b-fantacy.webm", 
                        type: "video/webm"
                      },
                      {
                        category: "Thriller",
                        background: 'url(../../public/assets/banners/bg-banner-Thriller.jpg)', 
                        video: "../../public/assets/banners/b-Thriller.webm", 
                        type: "video/webm"
                      },
                      {
                        category: "Y",
                        background: 'url(../../public/assets/banners/bg-Y.jpg)', 
                        video: "../../public/assets/banners/b-Y.webm", 
                        type: "video/webm"
                      },
                    ]
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

  document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("myVideo");
    video.removeAttribute("controls");
  });
  
  return (
    <div className="w-full pb-20" style={{backgroundColor: theme === "dark" ? "#020617" : "#F8FAFC"}}>
      <NavBar/>
        <div>
          <div className="w-[630px] mx-auto pt-24 px-2 grid grid-cols-4 gap-1" >
            <div className=" h-[380px] mt-2 flex items-center justify-center col-span-4">
              {
                dataBanner.filter(data => data.category === category).map((value, key) => {
                  return (
                    <div key={key} className="rounded-xl h-full w-full bg-contain" style={{background: value.background}}>
                      <video className='mx-auto' style={{width:'450px'}} autoPlay muted loop>
                        <source style={{background:'none'}} src={value.video} className="" type={value.type} />
                      </video>
                    </div>
                  )
                })
              }
              {/* <div className="rounded-xl h-full w-full bg-contain" style={{background:'url(../../public/assets/image/bg-re.jpg)'}}>
                <video className='mx-auto' style={{width:'450px'}} autoPlay muted loop>
                  <source style={{background:'none'}} src="https://th-a.kakaopagecdn.com/P/C/202/c1a/081f03d0-cfb3-4b0f-8638-977e1a874fd8.webm" className="" type="video/webm" />
                </video>
              </div> */}
            </div>
            {
              allCartoon.map((value, key) => {
                return <Link key={key} to={`/cartoon/${value.name}`}><img src={`/api/static/${value.image_main}`} className="rounded-xl object-cover h-full w-full" /></Link>
              })
            }
          </div>
      </div>
    </div>
  );
}

export default HomePage;