import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SearchPage() {
  const [search, setSearch] = useState("");
  const [listCartoon, setListCartoon] = useState([]);
  async function Search() {
    const res = await axios.get(`/api/search?search=${search}`);
    const data = await res.data;
    setListCartoon(data);
  }

  useEffect(() => {
    Search();
  }, [search]);
  const theme = localStorage.getItem("theme");
  return (
    <div
      className="flex flex-col bg-fixed min-h-screen items-center"
      style={{ backgroundColor: theme === "dark" ? "#020617" : "#F8FAFC" }}
    >
      <div className="mt-5 flex items-center">
        <div>
          <input
            type="text"
            className="rounded-lg p-2 w-[550px]"
            style={{ backgroundColor: "#e0dede" }}
            maxLength={"50"}
            placeholder="กรุณาใส่ชื่อผลงาน ชื่อนักเขียน หรือประเภท"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <Link to="/Latest">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="stroke-violet-600 ml-2 w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        {listCartoon?.map((value, key) => {
          return (
            <button
              key={key}
              className="hover:scale-125 hover:duration-500 mt-2 text-violet-600"
            >
              <Link to={`/cartoon/${value}`}>{value}</Link>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;
