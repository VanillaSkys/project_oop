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
        formData.append('name_cartoon', 'solo');
        formData.append('author', 'fill');
        formData.append('category', 'action');
        formData.append('image', image);

        try {
            await axios.post('/api/post_cartoon', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Image uploaded successfully');
        } catch (error) {
            console.error('Error uploading image: ', error);
        }
    };
  return (
    <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
  )
}

export default AdminPage