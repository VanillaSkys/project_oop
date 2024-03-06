import axios from "axios";
import { useState } from "react";

function AdminPage() {
  const [nameCartoon, setNameCartoon] = useState("");
  const [author, setAuthor] = useState("");
  let category = [];
  const [imageCartoon, setImageCartoon] = useState(null);
  const [imageMain, setImageMain] = useState(null);
  const [imageBG, setImageBG] = useState(null);

//   const handleFileChange = (e) => {
//     setImageCartoon(e.target.files[0]);
//   };
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("name_cartoon", nameCartoon);
  formData.append("author", author);
  // formData.append("category", category);
  formData.append("category", ['action']);
  formData.append("image_cartoon", imageCartoon);
  formData.append("image_main", imageMain);
  formData.append("image_background", imageBG);

    try {
      await axios.post("/api/post_cartoon", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="mt-5">
          <label className="label">
            <span className="text-1xl text-black label-text">Cartoon Name</span>
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
            <span className="text-1xl text-black label-text">Author Name</span>
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
          <button
            type="button"
            placeholder="catefory"
            onClick={() => category.push('action')}
            className="rounded-md w-full mt-4 pl-5 input input-bordered h-12"
          >action</button>
        </div>
        <div className="mt-5">
          <label className="label">
            <span className="text-1xl text-black label-text">image cartoon</span>
          </label>
          <input
            className="w-full mt-4 pl-5 input h-12"
            type="file"
            // onChange={handleFileChange}
            onChange={(e) => setImageCartoon(e.target.files[0])}
          />
          <label className="label">
            <span className="text-1xl text-black label-text">image main</span>
          </label>
          <input
            className="w-full mt-4 pl-5 input h-12"
            type="file"
            // onChange={handleFileChange}
            onChange={(e) => setImageMain(e.target.files[0])}
          />
          <label className="label">
            <span className="text-1xl text-black label-text">image bg</span>
          </label>
          <input
            className="w-full mt-4 pl-5 input h-12"
            type="file"
            // onChange={handleFileChange}
            onChange={(e) => setImageBG(e.target.files[0])}
          />
          <button type="submit" className="mt-2">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminPage;

// ชื่อเรื่อง
// author
// category
