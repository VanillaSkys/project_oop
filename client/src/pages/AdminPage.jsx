import axios from "axios";
import { useState } from "react";

function AdminPage() {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name_cartoon", "solo");
    formData.append("author", "fill");
    formData.append("category", "action");
    formData.append("image", image);

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
            className="rounded-md w-full mt-4 pl-5 input input-bordered h-12"
          />
        </div>
        <div className="mt-5">
          <label className="label">
            <span className="text-1xl text-black label-text">Category</span>
          </label>
          <input
            type="text"
            placeholder="catefory"
            className="rounded-md w-full mt-4 pl-5 input input-bordered h-12"
          />
        </div>
        <div className="mt-5">
          <label className="label">
            <span className="text-1xl text-black label-text">Upload</span>
          </label>
          <input
            className="w-full mt-4 pl-5 input h-12"
            type="file"
            onChange={handleFileChange}
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
