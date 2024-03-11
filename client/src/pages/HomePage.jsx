// import { useContext } from "react";
import { useCallback, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
// import { ThemeContext } from "../App";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
function HomePage() {
  const { category } = useParams();
  const [allCartoon, setAllCartoon] = useState([]);
  // const [isOpen, setIsOpen] = useState(false)
  const dataBanner = [
    {
      category: "Romance",
      background: "url(../../public/assets/image/bg-re.jpg)",
      video: "../../public/assets/banners/b-romance.webm",
      type: "video/webm",
    },
    {
      category: "Action",
      background: "url(../../public/assets/banners/bg-banner-action.jpg)",
      video: "../../public/assets/banners/b-action.webm",
      type: "video/webm",
    },
    {
      category: "Romance Fantasy",
      background: "url(../../public/assets/banners/bg-banner-fantacy.jpg)",
      video: "../../public/assets/banners/b-fantacy.webm",
      type: "video/webm",
    },
    {
      category: "Drama",
      background: "url(../../public/assets/banners/bg-banner-drama.jpg)",
      video: "../../public/assets/banners/b-drama.webm",
      type: "video/webm",
    },
    {
      category: "Latest",
      background: "url(../../public/assets/banners/bg-banner-fantacy.jpg)",
      video: "../../public/assets/banners/b-fantacy.webm",
      type: "video/webm",
    },
    {
      category: "Thriller",
      background: "url(../../public/assets/banners/bg-banner-Thriller.jpg)",
      video: "../../public/assets/banners/b-Thriller.webm",
      type: "video/webm",
    },
    {
      category: "Y",
      background: "url(../../public/assets/banners/bg-Y.jpg)",
      video: "../../public/assets/banners/b-Y.webm",
      type: "video/webm",
    },
  ];
  // const {theme} = useContext(ThemeContext)
  const theme = localStorage.getItem("theme");

  const getAllCartoon = useCallback(async () => {
    const res = await axios.get("/api/all_cartoon");
    const data = await res.data;
    setAllCartoon(data);
  }, []); // No dependencies as this function doesn't depend on any external variables

  const getAllCartoonCategory = useCallback(async () => {
    const res = await axios.get(
      `/api/all_cartoon_category?category=${category}`
    );
    const data = await res.data;
    setAllCartoon(data);
  }, [category]); // Depends on category to fetch data for the correct category

  useEffect(() => {
    // setIsOpen(true)
    if (category === "Latest") {
      getAllCartoon();
    } else {
      getAllCartoonCategory();
    }
  }, [category, getAllCartoon, getAllCartoonCategory]); // Include getAllCartoon and getAllCartoonCategory in the dependency array

  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");
    video.removeAttribute("controls");
  });
  return (
    <div
      className="w-full pb-20 "
      style={{ backgroundColor: theme === "dark" ? "#020617" : "#F8FAFC" }}
    >
      <NavBar />
      <div>
        <motion.div
          className="w-[630px] mx-auto pt-24 px-2 grid grid-cols-4 gap-1"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: "-10%" }}
          transition={{ duration: 0.25 }}
        >
          <div className=" h-[380px] mt-8 mb-2 flex items-center justify-center col-span-4">
            {dataBanner.map((value, key) => {
              return value.category === category ? (
                <div key={key} className="h-[394px] w-full flex items-end">
                  <div
                    className="rounded-xl h-[380px]  w-full bg-contain flex items-end "
                    style={{ background: value?.background }}
                  >
                    <video
                      className="mx-auto h-[394px] hover:scale-105 hover:mb-2 duration-500"
                      autoPlay
                      muted
                      loop
                    >
                      <source
                        style={{ background: "none" }}
                        src={value?.video}
                        className=""
                        type={value?.type}
                      />
                    </video>
                  </div>
                </div>
              ) : null;
            })}
          </div>
          {allCartoon
            .slice()
            .reverse()
            .map((value, key) => {
              return (
                <button key={key}>
                  <div
                    className="overflow-hidden w-full h-full rounded-xl"
                    style={{
                      backgroundImage: `url(/api/static/${encodeURIComponent(
                        value.image_background
                      )})`,
                    }}
                  >
                    <Link to={`/cartoon/${value.name}`}>
                      <div
                        className=" overflow-hidden w-full h-full rounded-xl"
                        style={{
                          backgroundImage: `url(/api/static/${encodeURIComponent(
                            value.image_background
                          )})`,
                        }}
                      >
                        <img
                          src={`/api/static/${value.image_main}`}
                          className="object-cover scale-100  hover:scale-105 duration-300"
                        />
                      </div>
                    </Link>
                  </div>
                </button>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
