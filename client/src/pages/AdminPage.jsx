import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function AdminPage() {
  const [nameCartoon, setNameCartoon] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState([]);
  const [imageCartoon, setImageCartoon] = useState(null);
  const [imageMain, setImageMain] = useState(null);
  const [imageBG, setImageBG] = useState(null);

  const [allCategory, setAllCategory] = useState([]);
  async function getAllCategory() {
    const res = await axios.get("/api/get_category");
    const data = await res.data;
    setAllCategory(data);
  }
  useEffect(() => {
    getAllCategory();
  }, []);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name_cartoon", nameCartoon);
    formData.append("author", author);
    formData.append("category", category);
    formData.append("image_cartoon", imageCartoon);
    formData.append("image_main", imageMain);
    formData.append("image_background", imageBG);

    try {
      await axios.post("/api/post_cartoon", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };
  function PushCategory(name) {
    if (!category.find((val) => val === name)) {
      setCategory([...category, name]);
    } else {
      setCategory(category.filter((val) => val !== name));
    }
  }

  const theme = localStorage.getItem("theme");
  return (
    <div className=" bg-gray-100" style={{ backgroundColor: theme === "dark" ? "#020617" : "#F8FAFC" }} >
      <motion.div
       animate={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: "-10%" }}
       transition={{ duration: 0.25 }}
      >
        <div>
          <Link to="/menu" className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="ml-4 w-10 h-10 stroke-violet-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </Link>
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-[650px] bg-white p-2 rounded-md">
            <div className="text-center">
              <p className="text-2xl">Add Cartoon Page</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <label className="label">
                  <span className="text-1xl text-black label-text">
                    Cartoon Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Cartoon Name"
                  onChange={(e) => setNameCartoon(e.target.value)}
                  className="rounded-md w-full mt-4 pl-5 input input-bordered h-12"
                />
              </div>
              <div className="mt-5">
                <label className="label">
                  <span className="text-1xl text-black label-text">
                    Author Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Author Name"
                  onChange={(e) => setAuthor(e.target.value)}
                  className="rounded-md w-full mt-4 pl-5 input input-bordered h-12"
                />
              </div>
              <div className="mt-5">
                <label className="label">
                  <span className="text-1xl text-black label-text">Category</span>
                </label>
                <div className="flex flex-col justify-between items-center text-center gap-1">
                  {allCategory.map((value, key) => {
                    return (
                      <button
                        key={key}
                        type="button"
                        placeholder="category"
                        onClick={() => PushCategory(value.name)}
                        className="rounded-md w-full input input-bordered p-1"
                        style={{
                          backgroundColor: category.find(
                            (val) => val === value.name
                          )
                            ? "green"
                            : "red",
                        }}
                      >
                        {value.name}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="mt-5">
                <label className="label">
                  <span className="text-1xl text-black label-text">
                    image cartoon
                  </span>
                </label>
                <input
                  className="w-full mt-4 pl-5 input h-12"
                  type="file"
                  onChange={(e) => setImageCartoon(e.target.files[0])}
                />
                <label className="label">
                  <span className="text-1xl text-black label-text">
                    image main
                  </span>
                </label>
                <input
                  className="w-full mt-4 pl-5 input h-12"
                  type="file"
                  onChange={(e) => setImageMain(e.target.files[0])}
                />
                <label className="label">
                  <span className="text-1xl text-black label-text">image bg</span>
                </label>
                <input
                  className="w-full mt-4 pl-5 input h-12"
                  type="file"
                  onChange={(e) => setImageBG(e.target.files[0])}
                />
                <button
                  type="submit"
                  className="mt-2 bg-green-400 ml-52 rounded-md p-2 w-[210px]"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminPage;
