import { Link } from "react-router-dom";
import ToggleButton from "../components/ToggleButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function MenuPage() {
  const [userData, setUserData] = useState([]);
  async function logout() {
    try {
      await axios.post("/api/logout", {
        username: localStorage.getItem("user"),
      });
      localStorage.removeItem("user");
      location.reload(false);
    } catch (error) {
      console.log(error.response);
    }
  }
  const fetchUserData = async () => {
    const res = await axios.get(
      `/api/get_user?username=${localStorage.getItem("user")}`
    );
    setUserData(res.data);
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      fetchUserData();
    }
  }, []);

  const theme = localStorage.getItem("theme");
  return (
    <div
      className={`h-screen`}
      style={{ backgroundColor: theme === "dark" ? "#020617" : "#F8FAFC" }}
    >
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: "10%" }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex justify-between">
          <Link to="/Latest" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="stroke-violet-600 ml-4 mt-2 w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </Link>
          <div className="">
            {!localStorage.getItem("user") ? (
              <Link to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="stroke-violet-600 mr-4 mt-2 w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </Link>
            ) : (
              <button onClick={() => logout()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="stroke-violet-600 mr-4 mt-2 w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[630px] flex flex-col justify-center items-center gap-2">
            <div>
              <p className="text-2xl text-violet-600">
                {localStorage.getItem("user")}
              </p>
            </div>
            <div>
              <p className="text-xl text-violet-600">
                {!localStorage.getItem("user") ? null : userData.coin}
              </p>
            </div>
            <div className="flex items-center justify-center mx-auto">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="stroke-violet-200 fill-yellow-500 w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>
              </p>
              <p className="text-3xl ml-8 text-violet-600">Term Coin </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Link
                to={!localStorage.getItem("user") ? "/login" : "/payment"}
                className="w-full text-center rounded"
              >
                <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 w-full py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  <p className="text-2xl">เติมแคช</p>
                </button>
              </Link>
            </div>
            <div className="w-full flex justify-between gap-2 items-center">
              <Link
                to={!localStorage.getItem("user") ? "/login" : "/history/coin"}
                className="w-full text-center"
              >
                <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 w-full py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  <p className="text-base">History Coin</p>
                </button>
              </Link>
              <Link
                to={
                  !localStorage.getItem("user") ? "/login" : "/history/chapter"
                }
                className="w-full text-center"
              >
                <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 w-full py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  <p className="text-base">History Chapter</p>
                </button>
              </Link>
            </div>
            <ToggleButton />
          
        {
          localStorage.getItem('user') === 'admin' ?
        (
         <div className="flex justify-between gap-5 items-between">
            <div className="w-[305px]">
              <Link
                to={
                  !localStorage.getItem("user") ? "/login" : "/history/chapter"
                }
                className="text-center"
              >
               <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 w-full py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  <p className="text-base">Add Cartoon</p>
                </button>
                </Link>
            </div>
            <div className="w-[305px]">
               <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 w-full py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  <p className="text-base">Add Cartoon</p>
                </button>
            </div>
         </div>
        )
        : 
        <button>ADMIN</button>
        }
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default MenuPage;
